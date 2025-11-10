import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
}

/**
 * Cookie Consent Banner Component
 *
 * Features:
 * - GDPR compliant cookie consent
 * - localStorage for consent persistence
 * - Granular cookie preferences
 * - Links to privacy and cookie policies
 * - Accessible and mobile-friendly
 *
 * @example
 * ```tsx
 * <CookieConsent />
 * ```
 */
export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    // Check if user has already made a choice
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) {
        setShowBanner(true)
      } else {
        try {
          const savedPreferences = JSON.parse(consent)
          setPreferences(savedPreferences)
        } catch {
          setShowBanner(true)
        }
      }
    }

    // Use requestAnimationFrame to avoid cascading renders
    const rafId = requestAnimationFrame(checkConsent)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
  }

  const handleAcceptNecessary = () => {
    savePreferences(DEFAULT_PREFERENCES)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    setPreferences(prefs)
    setShowBanner(false)
    setShowPreferences(false)

    // Dispatch custom event for analytics tracking
    window.dispatchEvent(
      new CustomEvent('cookieConsentUpdated', {
        detail: prefs,
      })
    )
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return // Necessary cookies cannot be disabled

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) {
    return null
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl animate-slide-up"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {!showPreferences ? (
          // Main banner
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h2 id="cookie-consent-title" className="text-lg font-bold text-gray-900 mb-2">
                Cookie Notice
              </h2>
              <p id="cookie-consent-description" className="text-sm text-gray-700">
                We use cookies to enhance your browsing experience, analyze site traffic, and
                personalize content. By clicking "Accept All", you consent to our use of cookies.{' '}
                <Link to="/privacy-policy" className="text-ieee-blue hover:underline">
                  Privacy Policy
                </Link>{' '}
                |{' '}
                <Link to="/cookie-policy" className="text-ieee-blue hover:underline">
                  Cookie Policy
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
              <Button
                variant="outline"
                size="md"
                onClick={() => setShowPreferences(true)}
                className="whitespace-nowrap"
              >
                Customize
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={handleAcceptNecessary}
                className="whitespace-nowrap"
              >
                Necessary Only
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleAcceptAll}
                className="whitespace-nowrap"
              >
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          // Preferences panel
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Cookie Preferences</h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
                aria-label="Close preferences"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  id="cookie-necessary"
                  checked={preferences.necessary}
                  disabled
                  className="mt-1 h-4 w-4 text-ieee-blue border-gray-300 rounded focus:ring-ieee-blue disabled:opacity-50"
                  aria-label="Necessary cookies (always enabled)"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-necessary" className="font-semibold text-gray-900 block">
                    Necessary Cookies
                    <span className="ml-2 text-xs font-normal text-gray-500">(Always Active)</span>
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Essential for the website to function properly. These cookies enable basic
                    functions like page navigation and access to secure areas.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={preferences.analytics}
                  onChange={() => togglePreference('analytics')}
                  className="mt-1 h-4 w-4 text-ieee-blue border-gray-300 rounded focus:ring-ieee-blue"
                  aria-label="Analytics cookies"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-analytics" className="font-semibold text-gray-900 block">
                    Analytics Cookies
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Help us understand how visitors interact with our website by collecting and
                    reporting information anonymously.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={preferences.marketing}
                  onChange={() => togglePreference('marketing')}
                  className="mt-1 h-4 w-4 text-ieee-blue border-gray-300 rounded focus:ring-ieee-blue"
                  aria-label="Marketing cookies"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-marketing" className="font-semibold text-gray-900 block">
                    Marketing Cookies
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Used to track visitors across websites to display relevant advertisements and
                    engage users.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
              <Button variant="outline" size="md" onClick={() => setShowPreferences(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="md" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
