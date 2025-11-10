import { forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the input
   */
  label?: string

  /**
   * Error message to display
   */
  error?: string

  /**
   * Helper text to display below the input
   */
  helperText?: string

  /**
   * Whether the input is required
   */
  required?: boolean

  /**
   * Whether the input is in an error state
   */
  hasError?: boolean
}

/**
 * Input component with label, error, and helper text
 *
 * Features:
 * - Label with required indicator
 * - Error state styling
 * - Helper text
 * - Accessible with proper ARIA labels
 * - Supports all standard HTML input attributes
 * - Forward ref support for form libraries
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   required
 *   error="Invalid email address"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, required, hasError, className = '', id, ...props }, ref) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${inputId}-error` : undefined
    const helperTextId = helperText ? `${inputId}-helper` : undefined
    const showError = hasError || error

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-offset-0
            disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
            transition-colors
            ${
              showError
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-ieee-blue focus:ring-ieee-blue'
            }
            ${className}
          `}
          aria-invalid={showError ? true : undefined}
          aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
          aria-required={required}
          {...props}
        />

        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperTextId} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
