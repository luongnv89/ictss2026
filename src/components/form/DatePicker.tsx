import { forwardRef } from 'react'
import { Input, type InputProps } from './Input'

export interface DatePickerProps extends Omit<InputProps, 'type'> {
  /**
   * Minimum selectable date (ISO format: YYYY-MM-DD)
   */
  min?: string

  /**
   * Maximum selectable date (ISO format: YYYY-MM-DD)
   */
  max?: string
}

/**
 * DatePicker component using native HTML5 date input
 *
 * Features:
 * - Native browser date picker
 * - Min/max date constraints
 * - All Input component features (label, error, helper text)
 * - Accessible with proper ARIA labels
 * - Forward ref support for form libraries
 *
 * @example
 * ```tsx
 * <DatePicker
 *   label="Birth Date"
 *   required
 *   min="1900-01-01"
 *   max={new Date().toISOString().split('T')[0]}
 * />
 * ```
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ min, max, ...props }, ref) => {
    return <Input ref={ref} type="date" min={min} max={max} {...props} />
  }
)

DatePicker.displayName = 'DatePicker'
