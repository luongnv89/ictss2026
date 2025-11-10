import { forwardRef, TextareaHTMLAttributes } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label for the textarea
   */
  label?: string

  /**
   * Error message to display
   */
  error?: string

  /**
   * Helper text to display below the textarea
   */
  helperText?: string

  /**
   * Whether the textarea is required
   */
  required?: boolean

  /**
   * Whether the textarea is in an error state
   */
  hasError?: boolean

  /**
   * Number of visible text rows
   */
  rows?: number
}

/**
 * Textarea component with label, error, and helper text
 *
 * Features:
 * - Label with required indicator
 * - Error state styling
 * - Helper text
 * - Accessible with proper ARIA labels
 * - Supports all standard HTML textarea attributes
 * - Forward ref support for form libraries
 * - Character count support
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Message"
 *   placeholder="Enter your message"
 *   rows={5}
 *   required
 *   maxLength={500}
 * />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      hasError,
      rows = 4,
      className = '',
      id,
      maxLength,
      value,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${textareaId}-error` : undefined
    const helperTextId = helperText ? `${textareaId}-helper` : undefined
    const showError = hasError || error

    const currentLength = typeof value === 'string' ? value.length : 0
    const showCharCount = maxLength !== undefined

    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          {label && (
            <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700">
              {label}
              {required && (
                <span className="text-red-500 ml-1" aria-label="required">
                  *
                </span>
              )}
            </label>
          )}

          {showCharCount && (
            <span className="text-xs text-gray-500">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          maxLength={maxLength}
          value={value}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-offset-0
            disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
            resize-y
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

Textarea.displayName = 'Textarea'
