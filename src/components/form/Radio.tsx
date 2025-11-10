import { forwardRef, InputHTMLAttributes } from 'react'

export interface RadioOption {
  value: string
  label: string
  disabled?: boolean
  helperText?: string
}

export interface RadioGroupProps {
  /**
   * Label for the radio group
   */
  label?: string

  /**
   * Name attribute for all radio buttons in the group
   */
  name: string

  /**
   * Options for the radio group
   */
  options: RadioOption[]

  /**
   * Error message to display
   */
  error?: string

  /**
   * Helper text to display below the radio group
   */
  helperText?: string

  /**
   * Whether the radio group is required
   */
  required?: boolean

  /**
   * Whether the radio group is in an error state
   */
  hasError?: boolean

  /**
   * Currently selected value
   */
  value?: string

  /**
   * Callback when value changes
   */
  onChange?: (value: string) => void

  /**
   * Layout direction
   */
  direction?: 'vertical' | 'horizontal'
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label for the radio button
   */
  label: string

  /**
   * Helper text to display below the radio button
   */
  helperText?: string
}

/**
 * Single Radio component
 *
 * @example
 * ```tsx
 * <Radio
 *   name="choice"
 *   value="option1"
 *   label="Option 1"
 * />
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, className = '', id, ...props }, ref) => {
    const radioId = id || `radio-${props.name}-${props.value}`

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            className={`
              h-4 w-4 border-gray-300
              text-ieee-blue focus:ring-ieee-blue focus:ring-2 focus:ring-offset-0
              disabled:bg-gray-100 disabled:cursor-not-allowed
              transition-colors
              ${className}
            `}
            {...props}
          />
        </div>

        <div className="ml-3">
          <label htmlFor={radioId} className="text-sm font-medium text-gray-700 cursor-pointer">
            {label}
          </label>

          {helperText && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
        </div>
      </div>
    )
  }
)

Radio.displayName = 'Radio'

/**
 * RadioGroup component for grouped radio buttons
 *
 * Features:
 * - Label with required indicator
 * - Error state styling
 * - Helper text for group and individual options
 * - Accessible with proper ARIA labels
 * - Vertical or horizontal layout
 * - Controlled component support
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   label="Select your preference"
 *   name="preference"
 *   options={[
 *     { value: 'email', label: 'Email', helperText: 'We\'ll send updates via email' },
 *     { value: 'sms', label: 'SMS', helperText: 'We\'ll send updates via SMS' },
 *   ]}
 *   required
 *   value={selectedValue}
 *   onChange={(value) => setSelectedValue(value)}
 * />
 * ```
 */
export function RadioGroup({
  label,
  name,
  options,
  error,
  helperText,
  required,
  hasError,
  value,
  onChange,
  direction = 'vertical',
}: RadioGroupProps) {
  const groupId = `radio-group-${name}`
  const errorId = error ? `${groupId}-error` : undefined
  const helperTextId = helperText ? `${groupId}-helper` : undefined
  const showError = hasError || error

  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue)
    }
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      <div
        role="radiogroup"
        aria-labelledby={label ? groupId : undefined}
        aria-invalid={showError ? true : undefined}
        aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
        aria-required={required}
        className={direction === 'horizontal' ? 'flex flex-wrap gap-6' : 'space-y-3'}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            helperText={option.helperText}
            disabled={option.disabled}
            checked={value === option.value}
            onChange={() => handleChange(option.value)}
          />
        ))}
      </div>

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={helperTextId} className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  )
}
