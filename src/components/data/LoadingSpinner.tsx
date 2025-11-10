import { HTMLAttributes } from 'react'

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the spinner
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Color variant
   */
  variant?: 'primary' | 'white' | 'gray'

  /**
   * Optional label for accessibility
   */
  label?: string
}

/**
 * LoadingSpinner component for loading states
 *
 * Features:
 * - Multiple sizes
 * - Multiple color variants
 * - Accessible with ARIA labels
 * - Smooth animation
 *
 * @example
 * ```tsx
 * <LoadingSpinner size="md" variant="primary" label="Loading content..." />
 * ```
 */
export function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  label = 'Loading...',
  className = '',
  ...props
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
    xl: 'h-16 w-16 border-4',
  }

  const variantClasses = {
    primary: 'border-ieee-blue border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-300 border-t-gray-600',
  }

  return (
    <div role="status" aria-label={label} className={`inline-block ${className}`} {...props}>
      <div
        className={`
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          rounded-full
          animate-spin
        `}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}

/**
 * FullPageSpinner component for full-page loading states
 */
export function FullPageSpinner({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="text-center">
        <LoadingSpinner size="xl" variant="primary" label={label} />
        <p className="mt-4 text-gray-600">{label}</p>
      </div>
    </div>
  )
}
