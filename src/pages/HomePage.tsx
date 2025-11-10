import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'
import { getButtonClassName } from '@/components/ui/buttonUtils'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="IEEE International Conference on Cloud Computing Technology and Science - October 21-23, 2026 in Paris, France"
        keywords={[
          'cloud computing',
          'IEEE',
          'conference',
          'CloudCom 2026',
          'Paris',
          'distributed systems',
        ]}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 sm:py-16 md:py-20">
        <Container size="xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">IEEE CloudCom 2026</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-6">
              International Conference on Cloud Computing Technology and Science
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
              { title: 'Abstract Submission', date: 'April 15, 2026' },
              { title: 'Paper Submission', date: 'May 1, 2026' },
              { title: 'Notification', date: 'July 15, 2026' },
              { title: 'Camera Ready', date: 'August 15, 2026' },
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
                title: 'Cloud Infrastructure',
                topics: ['Virtualization', 'Container Technologies', 'Edge Computing'],
              },
              {
                title: 'Cloud Services',
                topics: ['SaaS/PaaS/IaaS', 'Serverless Computing', 'Microservices'],
              },
              {
                title: 'Cloud Security',
                topics: ['Privacy', 'Access Control', 'Compliance'],
              },
              {
                title: 'Big Data & Analytics',
                topics: ['Data Processing', 'Machine Learning', 'IoT Integration'],
              },
              {
                title: 'Cloud Applications',
                topics: ['Mobile Cloud', 'Healthcare', 'Smart Cities'],
              },
              {
                title: 'Performance & QoS',
                topics: ['Resource Management', 'SLA', 'Energy Efficiency'],
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
            World-renowned experts will share insights on the future of cloud computing
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                title: 'Chief Cloud Architect',
                affiliation: 'MIT Computer Science',
                image:
                  'https://ui-avatars.com/api/?name=Sarah+Chen&size=200&background=8FBC8F&color=fff',
                topic: 'The Future of Serverless Computing',
                bio: 'Leading researcher in distributed systems and cloud architecture with over 15 years of experience.',
              },
              {
                name: 'Prof. Michael Rodriguez',
                title: 'Director of Cloud Research',
                affiliation: 'Stanford University',
                image:
                  'https://ui-avatars.com/api/?name=Michael+Rodriguez&size=200&background=8FBC8F&color=fff',
                topic: 'AI-Driven Cloud Optimization',
                bio: 'Pioneer in machine learning applications for cloud resource management and optimization.',
              },
              {
                name: 'Dr. Yuki Tanaka',
                title: 'VP of Engineering',
                affiliation: 'Google Cloud',
                image:
                  'https://ui-avatars.com/api/?name=Yuki+Tanaka&size=200&background=8FBC8F&color=fff',
                topic: 'Security in Multi-Cloud Environments',
                bio: 'Expert in cloud security and privacy, leading teams building next-generation security solutions.',
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
              { name: 'IEEE', url: 'https://www.ieee.org' },
              { name: 'IEEE Computer Society', url: 'https://www.computer.org' },
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
              Be part of the leading conference on cloud computing technology and science
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
