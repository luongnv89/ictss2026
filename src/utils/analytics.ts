import ReactGA from 'react-ga4'

/**
 * Google Analytics 4 integration with cookie consent
 *
 * This utility provides GDPR-compliant analytics tracking that:
 * - Only loads GA4 after user consent
 * - Listens to cookie consent updates
 * - Provides type-safe tracking methods
 * - Handles errors gracefully
 */

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

let isInitialized = false

/**
 * Initialize Google Analytics 4
 * Only call this after user has given analytics consent
 */
export function initializeAnalytics() {
  const gaId = import.meta.env.VITE_GA_ID

  // Don't initialize if:
  // - No GA ID configured
  // - Already initialized
  // - Running in development mode (optional)
  if (!gaId || isInitialized) {
    return
  }

  try {
    ReactGA.initialize(gaId, {
      gtagOptions: {
        anonymize_ip: true, // GDPR compliance
        cookie_flags: 'SameSite=Strict;Secure', // Security
      },
    })

    isInitialized = true
    console.log('Google Analytics 4 initialized')
  } catch (error) {
    console.error('Failed to initialize Google Analytics:', error)
  }
}

/**
 * Track page view
 * @param path - Page path (optional, uses window.location by default)
 * @param title - Page title (optional)
 */
export function trackPageView(path?: string, title?: string) {
  if (!isInitialized) return

  try {
    ReactGA.send({
      hitType: 'pageview',
      page: path || window.location.pathname + window.location.search,
      title: title || document.title,
    })
  } catch (error) {
    console.error('Failed to track page view:', error)
  }
}

/**
 * Track custom event
 * @param category - Event category (e.g., 'User', 'Navigation')
 * @param action - Event action (e.g., 'Click', 'Submit')
 * @param label - Event label (optional)
 * @param value - Event value (optional)
 */
export function trackEvent(category: string, action: string, label?: string, value?: number) {
  if (!isInitialized) return

  try {
    ReactGA.event({
      category,
      action,
      label,
      value,
    })
  } catch (error) {
    console.error('Failed to track event:', error)
  }
}

/**
 * Track form submission
 * @param formName - Name of the form (e.g., 'registration', 'contact')
 */
export function trackFormSubmission(formName: string) {
  trackEvent('Form', 'Submit', formName)
}

/**
 * Track external link click
 * @param url - External URL clicked
 */
export function trackExternalLink(url: string) {
  trackEvent('External Link', 'Click', url)
}

/**
 * Track download
 * @param fileName - Name of downloaded file
 */
export function trackDownload(fileName: string) {
  trackEvent('Download', 'File', fileName)
}

/**
 * Setup analytics based on cookie consent
 * Call this on app initialization
 */
export function setupAnalytics() {
  // Check if user has already given consent
  const checkExistingConsent = () => {
    try {
      const consent = localStorage.getItem('cookie-consent')
      if (consent) {
        const preferences: CookiePreferences = JSON.parse(consent)
        if (preferences.analytics) {
          initializeAnalytics()
        }
      }
    } catch (error) {
      console.error('Failed to check cookie consent:', error)
    }
  }

  // Listen for cookie consent updates
  window.addEventListener('cookieConsentUpdated', ((event: CustomEvent<CookiePreferences>) => {
    const preferences = event.detail
    if (preferences.analytics && !isInitialized) {
      initializeAnalytics()
    }
  }) as EventListener)

  // Check for existing consent
  checkExistingConsent()
}
