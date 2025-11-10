import { forwardRef, InputHTMLAttributes } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label for the checkbox
   */
  label?: string

  /**
   * Error message to display
   */
  error?: string

  /**
   * Helper text to display below the checkbox
   */
  helperText?: string

  /**
   * Whether the checkbox is required
   */
  required?: boolean

  /**
   * Whether the checkbox is in an error state
   */
  hasError?: boolean
}

/**
 * Checkbox component with label, error, and helper text
 *
 * Features:
 * - Label with required indicator
 * - Error state styling
 * - Helper text
 * - Accessible with proper ARIA labels
 * - Supports all standard HTML checkbox attributes
 * - Forward ref support for form libraries
 * - Custom styling with IEEE blue theme
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="I agree to the terms and conditions"
 *   required
 *   error="You must agree to continue"
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, helperText, required, hasError, className = '', id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${label?.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${checkboxId}-error` : undefined
    const helperTextId = helperText ? `${checkboxId}-helper` : undefined
    const showError = hasError || error

    return (
      <div className="w-full">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className={`
                h-4 w-4 rounded border-gray-300
                text-ieee-blue focus:ring-ieee-blue focus:ring-2 focus:ring-offset-0
                disabled:bg-gray-100 disabled:cursor-not-allowed
                transition-colors
                ${showError ? 'border-red-500' : ''}
                ${className}
              `}
              aria-invalid={showError ? true : undefined}
              aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
              aria-required={required}
              {...props}
            />
          </div>

          {label && (
            <div className="ml-3">
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                {label}
                {required && (
                  <span className="text-red-500 ml-1" aria-label="required">
                    *
                  </span>
                )}
              </label>

              {helperText && !error && (
                <p id={helperTextId} className="text-sm text-gray-500 mt-1">
                  {helperText}
                </p>
              )}
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-600 ml-7" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
