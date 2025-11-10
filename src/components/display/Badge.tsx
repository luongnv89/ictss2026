import { ReactNode, HTMLAttributes } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge content
   */
  children: ReactNode

  /**
   * Badge variant/color
   */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

  /**
   * Badge size
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Whether the badge should have rounded corners (pill shape)
   */
  rounded?: boolean
}

/**
 * Badge component for labels and status indicators
 *
 * Features:
 * - Multiple color variants
 * - Multiple sizes
 * - Pill or rounded shape
 * - Semantic color meanings
 *
 * @example
 * ```tsx
 * <Badge variant="success">Published</Badge>
 * <Badge variant="warning" size="sm">Pending</Badge>
 * <Badge variant="danger" rounded>Error</Badge>
 * ```
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  rounded = true,
  className = '',
  ...props
}: BadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  }

  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 border border-gray-300',
    primary: 'bg-ieee-blue text-white',
    success: 'bg-green-100 text-green-800 border border-green-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    danger: 'bg-red-100 text-red-800 border border-red-300',
    info: 'bg-green-100 text-green-800 border border-green-300',
  }

  return (
    <span
      className={`
        inline-flex items-center font-medium
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${rounded ? 'rounded-full' : 'rounded'}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}
