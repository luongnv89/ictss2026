import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Heading component with consistent styling
 *
 * @example
 * ```tsx
 * <Heading level={1} as="h1">
 *   CloudCom 2026
 * </Heading>
 * ```
 */
export const Heading = ({ children, level = 1, as, className, ...props }: HeadingProps) => {
  const Component = as || (`h${level}` as const)

  const levelStyles = {
    1: 'text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight',
    2: 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight',
    3: 'text-2xl sm:text-3xl md:text-4xl font-semibold',
    4: 'text-xl sm:text-2xl md:text-3xl font-semibold',
    5: 'text-lg sm:text-xl md:text-2xl font-medium',
    6: 'text-base sm:text-lg md:text-xl font-medium',
  }

  return (
    <Component className={clsx('text-gray-900', levelStyles[level], className)} {...props}>
      {children}
    </Component>
  )
}
