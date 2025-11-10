import { Link, useLocation } from 'react-router-dom'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

interface MainNavProps {
  /**
   * Navigation items to display
   */
  items: NavItem[]

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Main desktop navigation component
 *
 * Features:
 * - Horizontal navigation bar
 * - Active state highlighting
 * - Hover effects
 * - Keyboard accessible
 * - Support for nested navigation (future)
 *
 * @example
 * ```tsx
 * <MainNav items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'About', href: '/about' }
 * ]} />
 * ```
 */
export function MainNav({ items, className = '' }: MainNavProps) {
  const location = useLocation()

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <nav className={`hidden lg:flex space-x-1 ${className}`} aria-label="Main navigation">
      {items.map((item) => {
        const active = isActive(item.href)

        return (
          <Link
            key={item.href}
            to={item.href}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              active
                ? 'text-ieee-blue bg-blue-50'
                : 'text-gray-700 hover:text-ieee-blue hover:bg-gray-50'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
