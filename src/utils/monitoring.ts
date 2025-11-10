import * as Sentry from '@sentry/react'

/**
 * Sentry error monitoring integration
 *
 * This utility provides error tracking that:
 * - Respects user privacy and cookie consent
 * - Captures client-side errors automatically
 * - Provides context for debugging
 * - Filters sensitive data
 */

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

let isInitialized = false

/**
 * Initialize Sentry error monitoring
 * Only call this after user has given analytics consent
 */
export function initializeMonitoring() {
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN
  const environment = import.meta.env.MODE

  // Don't initialize if:
  // - No DSN configured
  // - Already initialized
  // - Running in development mode (optional - you may want errors in dev)
  if (!sentryDsn || isInitialized || environment === 'development') {
    return
  }

  try {
    Sentry.init({
      dsn: sentryDsn,
      environment,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: true, // Privacy: mask all text
          blockAllMedia: true, // Privacy: block all media
        }),
      ],

      // Performance monitoring
      tracesSampleRate: environment === 'production' ? 0.1 : 1.0, // 10% in prod, 100% in staging

      // Session replay
      replaysSessionSampleRate: 0.1, // 10% of sessions
      replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors

      // Filter out sensitive data
      beforeSend(event) {
        // Remove sensitive query parameters
        if (event.request?.url) {
          const url = new URL(event.request.url)
          const sensitiveParams = ['token', 'password', 'email', 'key', 'secret']
          sensitiveParams.forEach((param) => url.searchParams.delete(param))
          event.request.url = url.toString()
        }

        // Remove cookies
        if (event.request?.cookies) {
          delete event.request.cookies
        }

        return event
      },

      // Ignore certain errors
      ignoreErrors: [
        // Browser extensions
        'top.GLOBALS',
        // Random network errors
        'NetworkError',
        'Network request failed',
        // ResizeObserver errors (benign)
        'ResizeObserver loop',
      ],
    })

    isInitialized = true
    console.log('Sentry monitoring initialized')
  } catch (error) {
    console.error('Failed to initialize Sentry:', error)
  }
}

/**
 * Manually capture an exception
 * @param error - Error object or message
 * @param context - Additional context
 */
export function captureException(error: Error | string, context?: Record<string, unknown>) {
  if (!isInitialized) {
    console.error('Sentry not initialized:', error, context)
    return
  }

  try {
    if (context) {
      Sentry.setContext('custom', context)
    }
    Sentry.captureException(error)
  } catch (err) {
    console.error('Failed to capture exception:', err)
  }
}

/**
 * Manually capture a message
 * @param message - Message to log
 * @param level - Severity level
 */
export function captureMessage(
  message: string,
  level: 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug' = 'info'
) {
  if (!isInitialized) {
    console.log('Sentry not initialized:', message, level)
    return
  }

  try {
    Sentry.captureMessage(message, level)
  } catch (error) {
    console.error('Failed to capture message:', error)
  }
}

/**
 * Set user context for error tracking
 * @param user - User information (should not include sensitive data)
 */
export function setUser(user: { id?: string; email?: string; username?: string } | null) {
  if (!isInitialized) return

  try {
    Sentry.setUser(user)
  } catch (error) {
    console.error('Failed to set user:', error)
  }
}

/**
 * Add breadcrumb for debugging
 * @param message - Breadcrumb message
 * @param category - Breadcrumb category
 * @param level - Severity level
 */
export function addBreadcrumb(
  message: string,
  category: string = 'custom',
  level: 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug' = 'info'
) {
  if (!isInitialized) return

  try {
    Sentry.addBreadcrumb({
      message,
      category,
      level,
      timestamp: Date.now() / 1000,
    })
  } catch (error) {
    console.error('Failed to add breadcrumb:', error)
  }
}

/**
 * Setup error monitoring based on cookie consent
 * Call this on app initialization
 */
export function setupMonitoring() {
  // Check if user has already given consent
  const checkExistingConsent = () => {
    try {
      const consent = localStorage.getItem('cookie-consent')
      if (consent) {
        const preferences: CookiePreferences = JSON.parse(consent)
        // Initialize if analytics consent is given (Sentry is part of analytics)
        if (preferences.analytics) {
          initializeMonitoring()
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
      initializeMonitoring()
    }
  }) as EventListener)

  // Check for existing consent
  checkExistingConsent()
}
