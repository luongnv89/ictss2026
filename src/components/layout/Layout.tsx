import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CookieConsent } from '../gdpr'

interface LayoutProps {
  children: ReactNode
}

/**
 * ScrollToTop component
 * Automatically scrolls to top of page on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

/**
 * Main Layout component
 * Wraps all pages with Header, Footer, and ScrollToTop functionality
 *
 * Features:
 * - Automatic scroll to top on navigation
 * - Consistent header and footer across all pages
 * - Main content wrapper with proper spacing
 * - Semantic HTML structure for accessibility
 * - Skip-to-content link for keyboard navigation
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ieee-blue focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
