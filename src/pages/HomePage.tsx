import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'
import { getButtonClassName } from '@/components/ui/buttonUtils'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="International Conference on Testing Software and Systems - October 21-23, 2026 in Paris, France"
        keywords={[
          'software testing',
          'test automation',
          'ICTSS',
          'conference',
          'ICTSS 2026',
          'Paris',
          'quality assurance',
          'verification',
        ]}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 sm:py-16 md:py-20">
        <Container size="xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">ICTSS 2026</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-6">
              International Conference on Testing Software and Systems
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              October 21-23, 2026 | Paris, France
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/call-for-papers" className={getButtonClassName('secondary', 'lg')}>
                Submit Your Paper
              </Link>
              <Link
                to="/registration"
                className={getButtonClassName(
                  'outline',
                  'lg',
                  'text-white border-white hover:bg-white hover:text-ieee-blue'
                )}
              >
                Register Now
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Important Dates Section */}
      <section id="dates" className="py-16 bg-white">
        <Container size="xl">
          <Heading level={2} className="text-center mb-12">
            Important Dates
          </Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Paper Submission', date: 'June 16, 2026' },
              { title: 'Notification', date: 'July 14, 2026' },
              { title: 'Camera Ready', date: 'July 25, 2026' },
              { title: 'Author Registration', date: 'July 31, 2026' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg text-ieee-blue mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.date}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Conference Tracks Section */}
      <section className="py-16 bg-gray-50">
        <Container size="xl">
          <Heading level={2} className="text-center mb-12">
            Conference Tracks
          </Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Test Automation',
                topics: ['Automated Test Generation', 'CI/CD Testing', 'Test Frameworks'],
              },
              {
                title: 'Model-Based Testing',
                topics: ['Formal Methods', 'Model Checking', 'Test Oracles'],
              },
              {
                title: 'AI/ML for Testing',
                topics: ['Intelligent Test Generation', 'Test Selection', 'Fault Prediction'],
              },
              {
                title: 'Security Testing',
                topics: ['Penetration Testing', 'Vulnerability Analysis', 'Fuzzing'],
              },
              {
                title: 'Performance & Reliability',
                topics: ['Load Testing', 'Stress Testing', 'Reliability Assessment'],
              },
              {
                title: 'Mobile & Web Testing',
                topics: ['Cross-Platform Testing', 'UI/UX Testing', 'Accessibility'],
              },
            ].map((track) => (
              <div
                key={track.title}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-ieee-blue transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">{track.title}</h3>
                <ul className="space-y-2">
                  {track.topics.map((topic) => (
                    <li key={topic} className="text-gray-600 text-sm flex items-start">
                      <span className="text-ieee-blue mr-2">▸</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Keynote Speakers Section */}
      <section className="py-16 bg-white">
        <Container size="xl">
          <Heading level={2} className="text-center mb-8">
            Keynote Speakers
          </Heading>
          <p className="text-center text-gray-600 mb-12">
            World-renowned experts will share insights on the future of software testing and quality assurance
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: 'Dr. Emma Thompson',
                title: 'Director of Software Quality',
                affiliation: 'ETH Zurich',
                image:
                  'https://ui-avatars.com/api/?name=Emma+Thompson&size=200&background=8FBC8F&color=fff',
                topic: 'AI-Driven Test Generation and Optimization',
                bio: 'Leading researcher in automated testing and AI applications for software quality assurance.',
              },
              {
                name: 'Prof. Andreas Mueller',
                title: 'Chair of Software Engineering',
                affiliation: 'TU Munich',
                image:
                  'https://ui-avatars.com/api/?name=Andreas+Mueller&size=200&background=8FBC8F&color=fff',
                topic: 'Model-Based Testing for Critical Systems',
                bio: 'Pioneer in formal methods and model-based testing for safety-critical applications.',
              },
              {
                name: 'Dr. Maria Santos',
                title: 'Principal Test Architect',
                affiliation: 'Microsoft Research',
                image:
                  'https://ui-avatars.com/api/?name=Maria+Santos&size=200&background=8FBC8F&color=fff',
                topic: 'Continuous Testing in DevOps Pipelines',
                bio: 'Expert in test automation and continuous integration, leading large-scale testing initiatives.',
              },
            ].map((speaker) => (
              <div
                key={speaker.name}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-ieee-blue">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-ieee-blue font-medium mb-1">{speaker.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{speaker.affiliation}</p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{speaker.topic}</p>
                  <p className="text-sm text-gray-600">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/keynotes" className={getButtonClassName('primary')}>
              View All Keynote Speakers
            </Link>
          </div>
        </Container>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-gray-50">
        <Container size="xl">
          <Heading level={2} className="text-center mb-12">
            Supported By
          </Heading>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: 'IFIP WG 1.7', url: 'https://ifip.org' },
              { name: 'Springer', url: 'https://www.springer.com' },
              { name: 'Montimage', url: 'https://www.montimage.com' },
              { name: 'Sorbonne Université', url: 'https://www.sorbonne-universite.fr' },
            ].map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ieee-blue transition-colors text-lg font-medium"
              >
                {sponsor.name}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ieee-blue text-white">
        <Container size="lg">
          <div className="text-center">
            <Heading level={2} className="text-white mb-4">
              Join Us in Paris
            </Heading>
            <p className="text-xl mb-8">
              Be part of the premier conference on software testing and quality assurance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/call-for-papers" className={getButtonClassName('secondary', 'lg')}>
                Submit a Paper
              </Link>
              <Link
                to="/venue"
                className={getButtonClassName(
                  'outline',
                  'lg',
                  'text-white border-white hover:bg-white hover:text-ieee-blue'
                )}
              >
                Venue Information
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
