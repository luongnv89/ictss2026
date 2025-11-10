import { Link } from 'react-router-dom'
import { Container } from '../ui'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Conference',
    links: [
      { label: 'Call for Papers', href: '/call-for-papers' },
      { label: 'Important Dates', href: '/#dates' },
      { label: 'Committees', href: '/committees' },
      { label: 'Program', href: '/program' },
    ],
  },
  {
    title: 'Participation',
    links: [
      { label: 'Registration', href: '/registration' },
      { label: 'Keynote Speakers', href: '/keynotes' },
      { label: 'Competitions', href: '/competitions' },
      { label: 'Past Editions', href: '/#past-editions' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Venue & Travel', href: '/venue' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/contact#faq' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

const sponsors = [
  { name: 'IEEE', url: 'https://www.ieee.org', logo: '/assets/logos/ieee-logo.svg' },
  {
    name: 'IEEE Computer Society',
    url: 'https://www.computer.org',
    logo: '/assets/logos/ieee-logo.svg',
  },
  { name: 'Montimage', url: 'https://www.montimage.com', logo: '/assets/logos/montimage-logo.svg' },
  { name: 'CloudCom', url: 'https://cloudcom.org', logo: '/assets/logos/cloudcom-logo.svg' },
]

/**
 * Footer component with navigation, sponsors, and legal links
 * Features:
 * - Multi-column footer navigation
 * - Sponsor logos and links
 * - Legal and privacy links
 * - Social media links
 * - Copyright notice
 * - Fully responsive layout
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-700">
      <Container size="xl">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Conference Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ieee-blue text-white font-bold text-xl">
                  CC
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">IEEE CloudCom 2026</h2>
                  <p className="text-sm text-gray-600">Paris, France</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                International Conference on Cloud Computing Technology and Science
              </p>
              <p className="text-sm text-gray-600">October 21-23, 2026</p>
            </div>

            {/* Footer Navigation Columns */}
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm hover:text-ieee-blue transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="border-t border-gray-200 py-8">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 text-center">
            Supported By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-105"
                aria-label={`Visit ${sponsor.name} website`}
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} IEEE CloudCom 2026. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/cloudcom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ieee-blue transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/cloudcom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ieee-blue transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
