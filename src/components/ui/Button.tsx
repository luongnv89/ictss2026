import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  isLoading?: boolean
}

/**
 * Button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

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

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
}
