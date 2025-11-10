import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import { Layout } from './components/layout'
import { Container, Heading } from './components'
import { setupAnalytics, trackPageView } from './utils/analytics'
import { setupMonitoring } from './utils/monitoring'

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const CallForPapersPage = lazy(() =>
  import('./pages/CallForPapersPage').then((m) => ({ default: m.CallForPapersPage }))
)
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
)
const VenuePage = lazy(() => import('./pages/VenuePage').then((m) => ({ default: m.VenuePage })))
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage').then((m) => ({ default: m.RegistrationPage }))
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
)
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage }))
)
const CookiePolicyPage = lazy(() =>
  import('./pages/CookiePolicyPage').then((m) => ({ default: m.CookiePolicyPage }))
)
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })))
const KeynotesPage = lazy(() =>
  import('./pages/KeynotesPage').then((m) => ({ default: m.KeynotesPage }))
)
const CommitteesPage = lazy(() =>
  import('./pages/CommitteesPage').then((m) => ({ default: m.CommitteesPage }))
)
const ProgramPage = lazy(() =>
  import('./pages/ProgramPage').then((m) => ({ default: m.ProgramPage }))
)

// Loading fallback component
function LoadingFallback() {
  return (
    <section className="py-20">
      <Container size="lg">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-ieee-blue border-r-transparent" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </Container>
    </section>
  )
}

// Route change tracker for analytics
function RouteChangeTracker() {
  const location = useLocation()

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search)
  }, [location])

  return null
}

function ComingSoonPage({ title }: { title: string }) {
  return (
    <section className="py-20">
      <Container size="lg">
        <div className="text-center">
          <Heading level={1} className="mb-4">
            {title}
          </Heading>
          <p className="text-xl text-gray-600">This page is coming soon.</p>
        </div>
      </Container>
    </section>
  )
}

// Error fallback component for Sentry
function ErrorFallback({
  error,
  resetError,
}: {
  error: unknown
  componentStack: string
  eventId: string
  resetError: () => void
}) {
  const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'

  return (
    <section className="py-20">
      <Container size="lg">
        <div className="text-center">
          <Heading level={1} className="mb-4 text-red-600">
            Oops! Something went wrong
          </Heading>
          <p className="text-lg text-gray-700 mb-4">
            We've been notified about this error and will fix it as soon as possible.
          </p>
          <p className="text-sm text-gray-500 mb-6">{errorMessage}</p>
          <button
            onClick={resetError}
            className="px-6 py-2 bg-ieee-blue text-white rounded-lg hover:bg-ieee-blue-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </Container>
    </section>
  )
}

function AppContent() {
  return (
    <>
      <RouteChangeTracker />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/call-for-papers" element={<CallForPapersPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/keynotes" element={<KeynotesPage />} />
            <Route path="/competitions" element={<ComingSoonPage title="Competitions" />} />
            <Route path="/venue" element={<VenuePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/sitemap" element={<ComingSoonPage title="Sitemap" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

function App() {
  // Initialize analytics and monitoring on app startup
  useEffect(() => {
    setupAnalytics()
    setupMonitoring()
  }, [])

  return (
    <Sentry.ErrorBoundary fallback={ErrorFallback} showDialog>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  )
}

export default App
