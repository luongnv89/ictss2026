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
      name: 'Dr. Sarah Chen',
      title: 'Chief Cloud Architect',
      affiliation: 'MIT Computer Science',
      image: 'https://ui-avatars.com/api/?name=Sarah+Chen&size=400&background=0056b3&color=fff',
      topic: 'The Future of Serverless Computing',
      day: 'Day 1',
      time: '9:30 - 10:30',
      location: 'Main Auditorium',
      abstract:
        'This keynote explores the evolution of serverless computing and its transformative impact on cloud architecture. We will examine emerging trends including edge serverless, stateful functions, and serverless data processing. The talk will cover real-world case studies demonstrating how organizations are leveraging serverless technologies to achieve unprecedented scalability and cost efficiency. We will also discuss the challenges that remain, including cold start optimization, vendor lock-in concerns, and the future direction of serverless platforms.',
      bio: 'Dr. Sarah Chen is a leading researcher in distributed systems and cloud architecture with over 15 years of experience. She leads the Cloud Computing Research Group at MIT, where her work focuses on serverless computing, container orchestration, and distributed systems optimization. Before joining MIT, she spent 8 years at Google working on large-scale infrastructure projects. She holds a Ph.D. in Computer Science from Stanford University and has published over 50 papers in top-tier conferences. Dr. Chen is a recipient of the ACM SIGOPS Hall of Fame Award and serves on the technical advisory boards of several cloud computing startups.',
      website: 'https://example.com/sarah-chen',
    },
    {
      name: 'Prof. Michael Rodriguez',
      title: 'Director of Cloud Research',
      affiliation: 'Stanford University',
      image:
        'https://ui-avatars.com/api/?name=Michael+Rodriguez&size=400&background=0056b3&color=fff',
      topic: 'AI-Driven Cloud Optimization',
      day: 'Day 2',
      time: '9:00 - 10:00',
      location: 'Main Auditorium',
      abstract:
        'Artificial Intelligence is revolutionizing how we manage and optimize cloud infrastructure. This keynote presents cutting-edge research on using machine learning for intelligent resource allocation, predictive auto-scaling, and cost optimization in cloud environments. We will demonstrate how AI can analyze complex workload patterns to make real-time decisions that improve performance while reducing costs. The talk includes practical examples from major cloud providers and discusses the integration of AI/ML pipelines into cloud management platforms. We will also explore the ethical considerations and potential risks of automated cloud management.',
      bio: 'Professor Michael Rodriguez is a pioneer in applying machine learning to cloud computing challenges. As Director of the Cloud Research Lab at Stanford University, he leads a team investigating AI-driven optimization techniques for modern cloud infrastructure. His research has resulted in technologies adopted by major cloud providers including AWS, Azure, and Google Cloud. Prof. Rodriguez has authored over 100 research papers and holds 25 patents in cloud computing and machine learning. He received his Ph.D. from UC Berkeley and previously served as Chief Scientist at a leading cloud optimization startup. He is a Fellow of the IEEE and ACM.',
      website: 'https://example.com/michael-rodriguez',
    },
    {
      name: 'Dr. Yuki Tanaka',
      title: 'VP of Engineering',
      affiliation: 'Google Cloud',
      image: 'https://ui-avatars.com/api/?name=Yuki+Tanaka&size=400&background=0056b3&color=fff',
      topic: 'Security in Multi-Cloud Environments',
      day: 'Day 3',
      time: '9:00 - 10:00',
      location: 'Main Auditorium',
      abstract:
        'As organizations increasingly adopt multi-cloud strategies, security challenges grow in complexity. This keynote addresses the critical security considerations for managing workloads across multiple cloud providers. We will discuss zero-trust architectures, identity and access management across clouds, data encryption strategies, and compliance frameworks. The presentation includes real-world examples of security breaches and lessons learned, along with best practices for implementing robust security controls. We will also cover emerging technologies such as confidential computing, homomorphic encryption, and post-quantum cryptography in the context of cloud security.',
      bio: "Dr. Yuki Tanaka is Vice President of Engineering at Google Cloud, where she leads the development of security and privacy features for Google's cloud platform. With a background in cryptography and distributed systems, she has been instrumental in designing security architectures for some of the world's largest cloud deployments. Before joining Google, she held senior positions at Microsoft Azure and worked as a security consultant for Fortune 500 companies. Dr. Tanaka earned her Ph.D. in Computer Science from the University of Tokyo, specializing in cryptographic protocols. She is a frequent speaker at security conferences and has contributed to multiple industry security standards.",
      website: 'https://example.com/yuki-tanaka',
    },
  ]

  return (
    <>
      <SEO
        title="Keynote Speakers"
        description="Distinguished keynote speakers at IEEE CloudCom 2026"
        keywords={['keynote', 'speakers', 'cloud computing', 'IEEE CloudCom']}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-12">
        <Container size="xl">
          <Heading level={1} className="text-white text-center mb-4">
            Keynote Speakers
          </Heading>
          <p className="text-center text-lg">
            World-renowned experts sharing insights on the future of cloud computing
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
