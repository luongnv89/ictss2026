import { Link, useLocation } from 'react-router-dom'
import type { NavItem } from './MainNav'

interface MobileNavProps {
  /**
   * Navigation items to display
   */
  items: NavItem[]

  /**
   * Whether the mobile menu is open
   */
  isOpen: boolean

  /**
   * Callback when a navigation item is clicked
   */
  onItemClick?: () => void

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Mobile navigation component
 *
 * Features:
 * - Vertical navigation layout
 * - Active state highlighting
 * - Touch-friendly tap targets
 * - Smooth transitions
 * - Keyboard accessible
 *
 * @example
 * ```tsx
 * <MobileNav
 *   items={navigationItems}
 *   isOpen={mobileMenuOpen}
 *   onItemClick={() => setMobileMenuOpen(false)}
 * />
 * ```
 */
export function MobileNav({ items, isOpen, onItemClick, className = '' }: MobileNavProps) {
  const location = useLocation()

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  if (!isOpen) {
    return null
  }

  return (
    <nav className={`lg:hidden pb-4 ${className}`} aria-label="Mobile navigation">
      <div className="space-y-1">
        {items.map((item) => {
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors touch-target ${
                active
                  ? 'text-ieee-blue bg-blue-50'
                  : 'text-gray-700 hover:text-ieee-blue hover:bg-gray-50'
              }`}
              onClick={onItemClick}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
