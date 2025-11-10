import { forwardRef, SelectHTMLAttributes } from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Label for the select
   */
  label?: string

  /**
   * Error message to display
   */
  error?: string

  /**
   * Helper text to display below the select
   */
  helperText?: string

  /**
   * Whether the select is required
   */
  required?: boolean

  /**
   * Whether the select is in an error state
   */
  hasError?: boolean

  /**
   * Options for the select
   */
  options: SelectOption[]

  /**
   * Placeholder text (shown as first disabled option)
   */
  placeholder?: string
}

/**
 * Select component with label, error, and helper text
 *
 * Features:
 * - Label with required indicator
 * - Error state styling
 * - Helper text
 * - Accessible with proper ARIA labels
 * - Supports all standard HTML select attributes
 * - Forward ref support for form libraries
 * - Optional placeholder
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 *   placeholder="Select a country"
 *   required
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      hasError,
      options,
      placeholder,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${selectId}-error` : undefined
    const helperTextId = helperText ? `${selectId}-helper` : undefined
    const showError = hasError || error

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full px-3 py-2 border rounded-md shadow-sm
              text-gray-900 bg-white
              focus:outline-none focus:ring-2 focus:ring-offset-0
              disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
              appearance-none
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
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

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

Select.displayName = 'Select'
