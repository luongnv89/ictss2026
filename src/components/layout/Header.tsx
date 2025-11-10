import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui'
import { MainNav, MobileNav, MobileMenuButton, type NavItem } from '../navigation'

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Call for Papers', href: '/call-for-papers' },
  { label: 'Committees', href: '/committees' },
  { label: 'Program', href: '/program' },
  { label: 'Registration', href: '/registration' },
  { label: 'Venue & Travel', href: '/venue' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Header component with navigation and mobile menu
 * Features:
 * - Responsive navigation (desktop and mobile)
 * - Mobile hamburger menu
 * - IEEE blue branding
 * - Sticky header on scroll
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Container size="xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-ieee-blue text-white font-bold text-lg sm:text-xl">
              CC
            </div>
            <div className="hidden xs:block sm:block">
              <h1 className="text-base sm:text-xl font-bold text-ieee-blue">IEEE CloudCom 2026</h1>
              <p className="text-xs text-gray-600">Paris, France</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <MainNav items={navigation} />

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        <MobileNav
          items={navigation}
          isOpen={mobileMenuOpen}
          onItemClick={() => setMobileMenuOpen(false)}
        />
      </Container>
    </header>
  )
}
