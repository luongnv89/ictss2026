import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'
import { getButtonClassName } from '@/components/ui/buttonUtils'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noIndex
      />

      <section className="py-20">
        <Container size="lg">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-ieee-blue mb-4">404</h1>
            <Heading level={2} className="mb-4">
              Page Not Found
            </Heading>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It may have been moved or
              deleted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className={getButtonClassName('primary', 'lg')}>
                Go to Home
              </Link>
              <Link to="/sitemap" className={getButtonClassName('outline', 'lg')}>
                View Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
