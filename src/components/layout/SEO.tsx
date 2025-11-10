import { Helmet } from 'react-helmet-async'

interface SEOProps {
  /**
   * Page title (will be appended with site name)
   */
  title?: string

  /**
   * Meta description for SEO
   */
  description?: string

  /**
   * Keywords for the page
   */
  keywords?: string[]

  /**
   * Canonical URL for the page
   */
  canonical?: string

  /**
   * Open Graph image URL
   */
  ogImage?: string

  /**
   * Open Graph type (default: website)
   */
  ogType?: 'website' | 'article' | 'profile'

  /**
   * Article published date (for articles)
   */
  publishedTime?: string

  /**
   * Article modified date (for articles)
   */
  modifiedTime?: string

  /**
   * Twitter card type (default: summary_large_image)
   */
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'

  /**
   * Disable indexing for this page
   */
  noIndex?: boolean
}

const defaultProps = {
  title: 'IEEE CloudCom 2026',
  description:
    'IEEE International Conference on Cloud Computing Technology and Science - October 21-23, 2026 in Paris, France',
  keywords: ['cloud computing', 'IEEE', 'conference', 'CloudCom', 'Paris', 'technology', 'science'],
  ogType: 'website' as const,
  twitterCard: 'summary_large_image' as const,
}

/**
 * SEO component for managing page meta tags
 *
 * Features:
 * - Dynamic title and meta tags
 * - Open Graph tags for social sharing
 * - Twitter Card tags
 * - Structured data (JSON-LD)
 * - Canonical URLs
 * - Robots meta tag
 *
 * @example
 * ```tsx
 * <SEO
 *   title="Call for Papers"
 *   description="Submit your research to CloudCom 2026"
 *   keywords={['call for papers', 'CFP', 'research']}
 * />
 * ```
 */
export function SEO({
  title,
  description = defaultProps.description,
  keywords = defaultProps.keywords,
  canonical,
  ogImage,
  ogType = defaultProps.ogType,
  publishedTime,
  modifiedTime,
  twitterCard = defaultProps.twitterCard,
  noIndex = false,
}: SEOProps) {
  const siteName = 'IEEE CloudCom 2026'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://cloudcom2026.org'
  const defaultOgImage = `${siteUrl}/og-image.jpg`
  const fullCanonical = canonical || siteUrl

  // Structured data for conference event
  const eventStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'IEEE CloudCom 2026',
    description: description,
    startDate: '2026-10-21',
    endDate: '2026-10-23',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Sorbonne Université',
      address: {
        '@type': 'PostalAddress',
        streetAddress: "21 Rue de l'École de Médecine",
        addressLocality: 'Paris',
        postalCode: '75006',
        addressCountry: 'FR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'IEEE Computer Society',
      url: 'https://www.computer.org',
    },
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/registration`,
      price: '450',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-07-01',
    },
  }

  // Organization structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IEEE CloudCom 2026',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ['https://twitter.com/IEEECloudCom', 'https://www.linkedin.com/company/ieee-cloudcom'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@cloudcom2026.org',
      contactType: 'Customer Service',
    },
  }

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Robots meta tag */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Article specific Open Graph tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(eventStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationStructuredData)}</script>
    </Helmet>
  )
}
