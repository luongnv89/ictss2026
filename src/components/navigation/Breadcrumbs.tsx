import { Link, useLocation } from 'react-router-dom'
import { Container } from '../ui'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  /**
   * Custom breadcrumb items (optional)
   * If not provided, will auto-generate from URL path
   */
  items?: BreadcrumbItem[]

  /**
   * Whether to show the breadcrumbs in a container
   */
  contained?: boolean
}

/**
 * Generates breadcrumb items from the current URL path
 */
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  // Remove trailing slash and split path
  const paths = pathname.replace(/\/$/, '').split('/').filter(Boolean)

  if (paths.length === 0) {
    return []
  }

  // Route label mappings
  const labelMap: Record<string, string> = {
    'call-for-papers': 'Call for Papers',
    committees: 'Committees',
    program: 'Program',
    registration: 'Registration',
    keynotes: 'Keynote Speakers',
    competitions: 'Competitions',
    venue: 'Venue & Travel',
    contact: 'Contact',
    'privacy-policy': 'Privacy Policy',
    'cookie-policy': 'Cookie Policy',
    terms: 'Terms of Service',
    sitemap: 'Sitemap',
  }

  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]

  let currentPath = ''
  paths.forEach((path) => {
    currentPath += `/${path}`
    const label = labelMap[path] || path.charAt(0).toUpperCase() + path.slice(1)
    breadcrumbs.push({ label, href: currentPath })
  })

  return breadcrumbs
}

/**
 * Breadcrumbs navigation component
 *
 * Features:
 * - Auto-generates breadcrumbs from URL path
 * - Supports custom breadcrumb items
 * - Semantic HTML with proper ARIA labels
 * - Responsive design
 * - Accessible with keyboard navigation
 *
 * @example
 * ```tsx
 * // Auto-generate from URL
 * <Breadcrumbs />
 *
 * // Custom breadcrumbs
 * <Breadcrumbs items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Conference', href: '/conference' },
 *   { label: 'Program', href: '/conference/program' }
 * ]} />
 * ```
 */
export function Breadcrumbs({ items, contained = true }: BreadcrumbsProps) {
  const location = useLocation()
  const breadcrumbs = items || generateBreadcrumbs(location.pathname)

  // Don't show breadcrumbs on home page or if only one item
  if (breadcrumbs.length <= 1) {
    return null
  }

  const breadcrumbNav = (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="flex-shrink-0 mx-2 h-4 w-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}

              {isLast ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-600 hover:text-ieee-blue transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )

  if (contained) {
    return (
      <div className="bg-gray-50 border-b border-gray-200">
        <Container size="xl">{breadcrumbNav}</Container>
      </div>
    )
  }

  return breadcrumbNav
}
