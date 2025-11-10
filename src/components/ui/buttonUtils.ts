import { clsx } from 'clsx'

/**
 * Helper function to get button class names for use with Link components
 */
export function getButtonClassName(
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md',
  className?: string
) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantStyles = {
    primary: 'bg-ieee-blue text-white hover:bg-ieee-blue-dark focus:ring-ieee-blue',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    outline:
      'border-2 border-ieee-blue text-ieee-blue hover:bg-ieee-blue hover:text-white focus:ring-ieee-blue',
    ghost: 'text-ieee-blue hover:bg-gray-100 focus:ring-ieee-blue',
  }

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm rounded-md min-h-[40px]',
    md: 'px-4 py-2.5 text-base rounded-lg min-h-[44px]',
    lg: 'px-6 py-3 text-lg rounded-lg min-h-[48px]',
  }

  return clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
}
