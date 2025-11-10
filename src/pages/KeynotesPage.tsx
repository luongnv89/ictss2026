import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'

interface KeynoteSpeaker {
  name: string
  title: string
  affiliation: string
  image: string
  topic: string
  abstract: string
  bio: string
  website?: string
  day: string
  time: string
  location: string
}

export function KeynotesPage() {
  const speakers: KeynoteSpeaker[] = [
    {
      name: 'Dr. Emma Thompson',
      title: 'Director of Software Quality Research',
      affiliation: 'ETH Zurich',
      image: 'https://ui-avatars.com/api/?name=Emma+Thompson&size=400&background=8FBC8F&color=fff',
      topic: 'AI-Driven Test Generation and Optimization',
      day: 'Day 1',
      time: '9:30 - 10:30',
      location: 'Main Auditorium',
      abstract:
        'This keynote explores how artificial intelligence is revolutionizing software testing through intelligent test generation, optimization, and maintenance. We will examine cutting-edge AI techniques including neural program analysis, reinforcement learning for test case selection, and large language models for automated test generation. The talk will cover real-world case studies demonstrating how organizations are leveraging AI to achieve superior test coverage while reducing testing costs. We will also discuss the challenges that remain, including test oracle problems, flaky tests, and the future direction of AI-powered testing platforms.',
      bio: 'Dr. Emma Thompson is a leading researcher in automated testing and AI applications for software quality assurance with over 15 years of experience. She leads the Software Quality Research Group at ETH Zurich, where her work focuses on intelligent test generation, mutation testing, and AI-driven test optimization. Before joining ETH, she spent 8 years at Google working on large-scale testing infrastructure projects. She holds a Ph.D. in Computer Science from Stanford University and has published over 60 papers in top-tier software engineering conferences. Dr. Thompson is a recipient of the ACM SIGSOFT Distinguished Paper Award and serves on the program committees of major testing conferences.',
      website: 'https://example.com/emma-thompson',
    },
    {
      name: 'Prof. Andreas Mueller',
      title: 'Chair of Software Engineering',
      affiliation: 'TU Munich',
      image:
        'https://ui-avatars.com/api/?name=Andreas+Mueller&size=400&background=8FBC8F&color=fff',
      topic: 'Model-Based Testing for Safety-Critical Systems',
      day: 'Day 2',
      time: '9:00 - 10:00',
      location: 'Main Auditorium',
      abstract:
        'Model-based testing provides rigorous foundations for verifying safety-critical systems where failures can have catastrophic consequences. This keynote presents cutting-edge research on using formal models for systematic test generation, coverage analysis, and certification of automotive, aerospace, and medical systems. We will demonstrate how model-based approaches can automatically generate comprehensive test suites that satisfy safety standards like ISO 26262 and DO-178C. The talk includes practical examples from autonomous vehicle testing and discusses the integration of model-based testing into modern development workflows. We will also explore the challenges of scaling these techniques to complex cyber-physical systems.',
      bio: 'Professor Andreas Mueller is a pioneer in model-based testing and formal verification for safety-critical systems. As Chair of Software Engineering at TU Munich, he leads a research group investigating rigorous testing techniques for automotive and aerospace applications. His research has resulted in testing methodologies adopted by major automotive manufacturers and certification authorities. Prof. Mueller has authored over 120 research papers and holds 15 patents in model-based testing and verification. He received his Ph.D. from ETH Zurich and previously served as Chief Verification Engineer at a leading automotive systems supplier. He is a Fellow of the IEEE and serves on multiple safety standards committees.',
      website: 'https://example.com/andreas-mueller',
    },
    {
      name: 'Dr. Maria Santos',
      title: 'Principal Test Architect',
      affiliation: 'Microsoft Research',
      image: 'https://ui-avatars.com/api/?name=Maria+Santos&size=400&background=8FBC8F&color=fff',
      topic: 'Continuous Testing in Modern DevOps Pipelines',
      day: 'Day 3',
      time: '9:00 - 10:00',
      location: 'Main Auditorium',
      abstract:
        'As organizations increasingly adopt DevOps and continuous delivery, testing must evolve to keep pace with rapid release cycles. This keynote addresses the critical challenges of implementing effective continuous testing strategies that balance speed, quality, and cost. We will discuss intelligent test selection, parallel test execution, test impact analysis, and failure triage automation. The presentation includes real-world examples from Microsoft\'s own DevOps transformation and lessons learned from scaling testing across thousands of services. We will also cover emerging technologies such as AI-powered test maintenance, shift-left testing practices, and the future of quality gates in CI/CD pipelines.',
      bio: "Dr. Maria Santos is Principal Test Architect at Microsoft Research, where she leads initiatives to improve testing practices and developer productivity across Microsoft's engineering organization. With a background in test automation and software quality, she has been instrumental in developing testing frameworks used by thousands of developers worldwide. Before joining Microsoft, she held senior positions at Amazon Web Services and worked as a testing consultant for Fortune 500 companies. Dr. Santos earned her Ph.D. in Computer Science from Carnegie Mellon University, specializing in automated test generation and maintenance. She is a frequent speaker at testing conferences and has contributed to multiple industry testing standards and best practices.",
      website: 'https://example.com/maria-santos',
    },
  ]

  return (
    <>
      <SEO
        title="Keynote Speakers"
        description="Distinguished keynote speakers at ICTSS 2026"
        keywords={['keynote', 'speakers', 'software testing', 'ICTSS', 'quality assurance']}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-12">
        <Container size="xl">
          <Heading level={1} className="text-white text-center mb-4">
            Keynote Speakers
          </Heading>
          <p className="text-center text-lg">
            World-renowned experts sharing insights on the future of software testing and quality assurance
          </p>
        </Container>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-gray-50">
        <Container size="xl">
          <div className="space-y-16">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.name}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                {/* Speaker Image */}
                <div className="lg:w-1/3">
                  <div className="aspect-square lg:aspect-auto lg:h-full bg-ieee-blue">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="lg:w-2/3 p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{speaker.name}</h2>
                    <p className="text-lg text-ieee-blue font-medium">{speaker.title}</p>
                    <p className="text-gray-600">{speaker.affiliation}</p>
                    {speaker.website && (
                      <a
                        href={speaker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ieee-blue hover:underline mt-2 inline-block"
                      >
                        🔗 Personal Website
                      </a>
                    )}
                  </div>

                  {/* Talk Info */}
                  <div className="bg-blue-50 border-l-4 border-ieee-blue p-4 mb-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{speaker.topic}</h3>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <strong>📅 When:</strong> {speaker.day} • {speaker.time}
                      </p>
                      <p>
                        <strong>📍 Where:</strong> {speaker.location}
                      </p>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Abstract</h4>
                    <p className="text-gray-700 leading-relaxed">{speaker.abstract}</p>
                  </div>

                  {/* Bio */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Biography</h4>
                    <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white border-t border-gray-200">
        <Container size="lg">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Join Us for These Inspiring Talks
            </Heading>
            <p className="text-lg text-gray-600 mb-6">
              Register now to attend all keynote sessions and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/registration"
                className="px-6 py-3 bg-ieee-blue text-white rounded-lg hover:bg-ieee-blue-dark transition-colors font-medium"
              >
                Register Now
              </a>
              <a
                href="/program"
                className="px-6 py-3 border-2 border-ieee-blue text-ieee-blue rounded-lg hover:bg-ieee-blue hover:text-white transition-colors font-medium"
              >
                View Full Program
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
