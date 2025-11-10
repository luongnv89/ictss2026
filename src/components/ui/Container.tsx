import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  as?: 'div' | 'section' | 'article' | 'main'
}

/**
 * Container component for consistent page layouts
 *
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Page Content</h1>
 * </Container>
 * ```
 */
export const Container = ({
  children,
  size = 'lg',
  as: Component = 'div',
  className,
  ...props
}: ContainerProps) => {
  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <Component
      className={clsx('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizeStyles[size], className)}
      {...props}
    >
      {children}
    </Component>
  )
}
