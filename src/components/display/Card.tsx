import { ReactNode, HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card content
   */
  children: ReactNode

  /**
   * Card variant
   */
  variant?: 'default' | 'outlined' | 'elevated'

  /**
   * Whether the card is clickable/hoverable
   */
  hoverable?: boolean

  /**
   * Padding size
   */
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

/**
 * Card component for content grouping
 *
 * Features:
 * - Multiple variants (default, outlined, elevated)
 * - Hoverable state for interactive cards
 * - Customizable padding
 * - Semantic HTML
 * - Responsive design
 *
 * @example
 * ```tsx
 * <Card variant="elevated" hoverable>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     Card content goes here
 *   </CardContent>
 * </Card>
 * ```
 */
export function Card({
  children,
  variant = 'default',
  hoverable = false,
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const variantClasses = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-white border-2 border-gray-300',
    elevated: 'bg-white shadow-lg',
  }

  return (
    <div
      className={`
        rounded-lg
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverable ? 'transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * CardHeader component
 */
export function CardHeader({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * CardTitle component
 */
export function CardTitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-bold text-gray-900 ${className}`} {...props}>
      {children}
    </h3>
  )
}

/**
 * CardDescription component
 */
export function CardDescription({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-gray-600 mt-1 ${className}`} {...props}>
      {children}
    </p>
  )
}

/**
 * CardContent component
 */
export function CardContent({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * CardFooter component
 */
export function CardFooter({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  )
}
