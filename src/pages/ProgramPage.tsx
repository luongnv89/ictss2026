import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'
import { useState } from 'react'

interface Session {
  time: string
  title: string
  location?: string
  type: 'keynote' | 'session' | 'break' | 'social'
  talks?: Talk[]
  speaker?: string
  description?: string
}

interface Talk {
  title: string
  authors: string
  time?: string
}

interface DayProgram {
  date: string
  day: string
  sessions: Session[]
}

export function ProgramPage() {
  const [selectedDay, setSelectedDay] = useState(0)

  const program: DayProgram[] = [
    {
      date: 'October 21, 2026',
      day: 'Day 1',
      sessions: [
        {
          time: '8:00 - 9:00',
          title: 'Registration & Welcome Coffee',
          type: 'break',
          location: 'Grand Foyer',
        },
        {
          time: '9:00 - 9:30',
          title: 'Opening Ceremony',
          type: 'social',
          location: 'Main Auditorium',
          description: 'Welcome address by General Chairs and presentation of conference overview',
        },
        {
          time: '9:30 - 10:30',
          title: 'Keynote: The Future of Serverless Computing',
          type: 'keynote',
          location: 'Main Auditorium',
          speaker: 'Dr. Sarah Chen, MIT Computer Science',
          description:
            'An exploration of emerging trends in serverless architectures and their impact on software testing paradigms',
        },
        {
          time: '10:30 - 11:00',
          title: 'Coffee Break',
          type: 'break',
          location: 'Grand Foyer',
        },
        {
          time: '11:00 - 12:30',
          title: 'Session 1A: Cloud Infrastructure',
          type: 'session',
          location: 'Room A',
          talks: [
            {
              title: 'Efficient Resource Allocation in Multi-Tenant Cloud Environments',
              authors: 'J. Smith, M. Johnson (Stanford University)',
              time: '11:00',
            },
            {
              title: 'Container Orchestration at Scale: Lessons from Production Deployments',
              authors: 'L. Zhang, K. Park (Google Cloud)',
              time: '11:30',
            },
            {
              title: 'Edge Computing Integration with Cloud Data Centers',
              authors: 'R. Patel, S. Kumar (IIT Delhi)',
              time: '12:00',
            },
          ],
        },
        {
          time: '11:00 - 12:30',
          title: 'Session 1B: Cloud Security',
          type: 'session',
          location: 'Room B',
          talks: [
            {
              title: 'Zero-Trust Architecture for Cloud-Native Applications',
              authors: 'A. Mueller, T. Schmidt (ETH Zurich)',
              time: '11:00',
            },
            {
              title: 'Privacy-Preserving Data Processing in Public Clouds',
              authors: 'Y. Chen, H. Wang (Tsinghua University)',
              time: '11:30',
            },
            {
              title: 'Automated Threat Detection Using Machine Learning',
              authors: 'E. Wilson, D. Brown (Cambridge)',
              time: '12:00',
            },
          ],
        },
        {
          time: '12:30 - 14:00',
          title: 'Lunch Break',
          type: 'break',
          location: 'Restaurant Terrace',
        },
        {
          time: '14:00 - 15:30',
          title: 'Session 2A: Serverless & Microservices',
          type: 'session',
          location: 'Room A',
          talks: [
            {
              title: 'Performance Optimization for Serverless Functions',
              authors: 'M. Rodriguez, C. Silva (AWS)',
              time: '14:00',
            },
            {
              title: 'Microservices Communication Patterns in Large-Scale Systems',
              authors: 'N. Andersson, L. Johansson (Spotify)',
              time: '14:30',
            },
            {
              title: 'Cold Start Mitigation Strategies in FaaS Platforms',
              authors: 'K. Tanaka, R. Suzuki (University of Tokyo)',
              time: '15:00',
            },
          ],
        },
        {
          time: '14:00 - 15:30',
          title: 'Session 2B: Big Data & Analytics',
          type: 'session',
          location: 'Room B',
          talks: [
            {
              title: 'Real-Time Stream Processing at Petabyte Scale',
              authors: 'P. Singh, A. Gupta (Netflix)',
              time: '14:00',
            },
            {
              title: 'Distributed Machine Learning Training on Cloud Infrastructure',
              authors: 'F. Blanc, J. Dupont (INRIA)',
              time: '14:30',
            },
            {
              title: 'Cost-Effective Data Lake Architectures',
              authors: 'S. Martinez, R. Lopez (Barcelona Supercomputing Center)',
              time: '15:00',
            },
          ],
        },
        {
          time: '15:30 - 16:00',
          title: 'Afternoon Coffee Break',
          type: 'break',
          location: 'Grand Foyer',
        },
        {
          time: '16:00 - 17:30',
          title: 'Panel Discussion: Cloud Computing in 2030',
          type: 'social',
          location: 'Main Auditorium',
          description:
            'Industry leaders and researchers discuss future trends and challenges in software testing',
        },
        {
          time: '19:00 - 22:00',
          title: 'Welcome Reception',
          type: 'social',
          location: 'Rooftop Terrace',
          description: 'Networking event with refreshments and city views',
        },
      ],
    },
    {
      date: 'October 22, 2026',
      day: 'Day 2',
      sessions: [
        {
          time: '9:00 - 10:00',
          title: 'Keynote: AI-Driven Cloud Optimization',
          type: 'keynote',
          location: 'Main Auditorium',
          speaker: 'Prof. Michael Rodriguez, Stanford University',
          description:
            'How artificial intelligence is transforming cloud resource management and optimization',
        },
        {
          time: '10:00 - 10:30',
          title: 'Coffee Break',
          type: 'break',
          location: 'Grand Foyer',
        },
        {
          time: '10:30 - 12:00',
          title: 'Session 3A: Performance & QoS',
          type: 'session',
          location: 'Room A',
          talks: [
            {
              title: 'SLA-Aware Resource Provisioning in Hybrid Clouds',
              authors: 'O. Petrova, I. Sokolov (MSU)',
              time: '10:30',
            },
            {
              title: 'Network Performance Optimization for Distributed Applications',
              authors: "J. O'Reilly, M. Murphy (Trinity College)",
              time: '11:00',
            },
            {
              title: 'Energy-Efficient Scheduling Algorithms for Cloud Data Centers',
              authors: 'H. Schmidt, A. Weber (University of Vienna)',
              time: '11:30',
            },
          ],
        },
        {
          time: '10:30 - 12:00',
          title: 'Session 3B: Cloud-Native Applications',
          type: 'session',
          location: 'Room B',
          talks: [
            {
              title: 'Service Mesh Architectures for Cloud-Native Systems',
              authors: 'D. Papadopoulos, E. Stavrou (NTUA)',
              time: '10:30',
            },
            {
              title: 'Building Resilient Applications with Chaos Engineering',
              authors: 'L. Andersson, K. Nielsen (Klarna)',
              time: '11:00',
            },
            {
              title: 'GitOps: Declarative Infrastructure Management',
              authors: 'T. Mueller, S. Hoffmann (TU Munich)',
              time: '11:30',
            },
          ],
        },
        {
          time: '12:00 - 13:30',
          title: 'Lunch Break',
          type: 'break',
          location: 'Restaurant Terrace',
        },
        {
          time: '13:30 - 15:00',
          title: 'Session 4A: IoT & Edge Computing',
          type: 'session',
          location: 'Room A',
          talks: [
            {
              title: 'Edge AI for Real-Time Decision Making',
              authors: 'Y. Park, J. Kim (KAIST)',
              time: '13:30',
            },
            {
              title: 'Fog Computing Architectures for Smart Cities',
              authors: 'C. Mendez, P. Santos (Universidad de Chile)',
              time: '14:00',
            },
            {
              title: 'Low-Latency Processing at the Network Edge',
              authors: 'N. Patel, R. Sharma (NUS)',
              time: '14:30',
            },
          ],
        },
        {
          time: '13:30 - 15:00',
          title: 'Session 4B: Multi-Cloud & Hybrid Cloud',
          type: 'session',
          location: 'Room B',
          talks: [
            {
              title: 'Cross-Cloud Data Migration Strategies',
              authors: 'I. Rossi, G. Ferrari (Politecnico di Milano)',
              time: '13:30',
            },
            {
              title: 'Unified Management for Multi-Cloud Environments',
              authors: 'R. Johnson, S. Thompson (University of Toronto)',
              time: '14:00',
            },
            {
              title: 'Cost Optimization in Multi-Cloud Deployments',
              authors: 'F. Al-Rashid, M. Al-Zahrani (KAUST)',
              time: '14:30',
            },
          ],
        },
        {
          time: '15:00 - 15:30',
          title: 'Coffee Break',
          type: 'break',
          location: 'Grand Foyer',
        },
        {
          time: '15:30 - 17:00',
          title: 'Workshop: Hands-on with Kubernetes',
          type: 'session',
          location: 'Lab Room',
          description:
            'Interactive workshop on container orchestration and cloud-native deployment',
        },
        {
          time: '17:00 - 18:00',
          title: 'Poster Session & Demos',
          type: 'social',
          location: 'Exhibition Hall',
          description: 'Showcase of research posters and technology demonstrations',
        },
      ],
    },
    {
      date: 'October 23, 2026',
      day: 'Day 3',
      sessions: [
        {
          time: '9:00 - 10:00',
          title: 'Keynote: Security in Multi-Cloud Environments',
          type: 'keynote',
          location: 'Main Auditorium',
          speaker: 'Dr. Yuki Tanaka, Google Cloud',
          description:
            'Best practices and emerging technologies for securing distributed cloud infrastructures',
        },
        {
          time: '10:00 - 10:30',
          title: 'Coffee Break',
          type: 'break',
          location: 'Grand Foyer',
        },
        {
          time: '10:30 - 12:00',
          title: 'Session 5A: DevOps & CI/CD',
          type: 'session',
          location: 'Room A',
          talks: [
            {
              title: 'Infrastructure as Code: Best Practices and Pitfalls',
              authors: 'A. Jensen, B. Hansen (Danske Bank)',
              time: '10:30',
            },
            {
              title: 'Continuous Deployment in Cloud-Native Environments',
              authors: 'J. Brown, A. Taylor (University of Melbourne)',
              time: '11:00',
            },
            {
              title: 'Observability at Scale: Monitoring Distributed Systems',
              authors: 'D. Cohen, S. Levy (Tel Aviv University)',
              time: '11:30',
            },
          ],
        },
        {
          time: '10:30 - 12:00',
          title: 'Session 5B: Cloud Applications',
          type: 'session',
          location: 'Room B',
          talks: [
            {
              title: 'Healthcare Data Management in the Cloud',
              authors: 'N. Van Minh, T. Thi Lan (Hanoi University)',
              time: '10:30',
            },
            {
              title: 'Financial Services Migration to Cloud Platforms',
              authors: 'K. Osei, A. Mensah (University of Ghana)',
              time: '11:00',
            },
            {
              title: 'E-Learning Platforms on Cloud Infrastructure',
              authors: 'P. Santos, M. Oliveira (Universidade de Lisboa)',
              time: '11:30',
            },
          ],
        },
        {
          time: '12:00 - 13:30',
          title: 'Lunch Break',
          type: 'break',
          location: 'Restaurant Terrace',
        },
        {
          time: '13:30 - 15:00',
          title: 'Session 6: Industry Talks',
          type: 'session',
          location: 'Main Auditorium',
          talks: [
            {
              title: 'Cloud Innovation at AWS',
              authors: 'Speaker from Amazon Web Services',
              time: '13:30',
            },
            {
              title: "Azure's Vision for the Future",
              authors: 'Speaker from Microsoft Azure',
              time: '14:00',
            },
            {
              title: 'Google Cloud Next-Gen Technologies',
              authors: 'Speaker from Google Cloud',
              time: '14:30',
            },
          ],
        },
        {
          time: '15:00 - 15:30',
          title: 'Coffee Break',
          type: 'break',
          location: 'Grand Foyer',
        },
        {
          time: '15:30 - 16:30',
          title: 'Best Paper Awards & Closing Ceremony',
          type: 'social',
          location: 'Main Auditorium',
          description: 'Recognition of outstanding contributions and conference closing remarks',
        },
        {
          time: '16:30 - 17:00',
          title: 'Farewell & Networking',
          type: 'social',
          location: 'Grand Foyer',
          description: 'Final networking opportunity and farewells',
        },
      ],
    },
  ]

  const getSessionColor = (type: Session['type']) => {
    switch (type) {
      case 'keynote':
        return 'bg-blue-50 border-l-4 border-ieee-blue-dark'
      case 'session':
        return 'bg-white border-l-4 border-ieee-blue'
      case 'break':
        return 'bg-gray-50 border-l-4 border-gray-400'
      case 'social':
        return 'bg-blue-50 border-l-4 border-green-600'
      default:
        return 'bg-white'
    }
  }

  const getSessionIcon = (type: Session['type']) => {
    switch (type) {
      case 'keynote':
        return '🎤'
      case 'session':
        return '📊'
      case 'break':
        return '☕'
      case 'social':
        return '🤝'
      default:
        return '•'
    }
  }

  return (
    <>
      <SEO
        title="Conference Program"
        description="Detailed schedule for ICTSS 2026 - October 21-23, 2026"
        keywords={['program', 'schedule', 'sessions', 'talks', 'IEEE ICTSS']}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-12">
        <Container size="xl">
          <Heading level={1} className="text-white text-center mb-4">
            Conference Program
          </Heading>
          <p className="text-center text-lg">October 21-23, 2026 | Paris, France</p>
        </Container>
      </section>

      {/* Program Note */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <Container size="xl">
          <p className="text-center text-gray-700">
            <strong>Note:</strong> This is a preliminary program. Final schedule may be subject to
            changes.
          </p>
        </Container>
      </section>

      {/* Day Selector */}
      <section className="py-8 bg-white sticky top-0 z-10 border-b border-gray-200">
        <Container size="xl">
          <div className="flex flex-wrap justify-center gap-4">
            {program.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedDay === index
                    ? 'bg-ieee-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="font-bold">{day.day}</div>
                <div className="text-sm">{day.date}</div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Schedule Details */}
      <section className="py-12 bg-gray-50">
        <Container size="xl">
          <div className="space-y-4">
            {program[selectedDay].sessions.map((session, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 shadow-sm ${getSessionColor(session.type)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{getSessionIcon(session.type)}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-bold text-xl text-gray-900">{session.title}</h3>
                      <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full whitespace-nowrap">
                        {session.time}
                      </span>
                    </div>
                    {session.location && (
                      <p className="text-sm text-gray-600 mb-2">📍 {session.location}</p>
                    )}
                    {session.speaker && (
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Speaker:</strong> {session.speaker}
                      </p>
                    )}
                    {session.description && (
                      <p className="text-gray-700 mb-3">{session.description}</p>
                    )}
                    {session.talks && session.talks.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {session.talks.map((talk, talkIndex) => (
                          <div
                            key={talkIndex}
                            className="bg-white bg-opacity-50 p-4 rounded border border-gray-200"
                          >
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{talk.title}</h4>
                              {talk.time && (
                                <span className="text-xs text-gray-500 whitespace-nowrap">
                                  {talk.time}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{talk.authors}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Legend */}
      <section className="py-8 bg-white border-t border-gray-200">
        <Container size="lg">
          <Heading level={3} className="text-center mb-6">
            Program Legend
          </Heading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎤</span>
              <span className="text-gray-700">Keynote Speech</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <span className="text-gray-700">Technical Session</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">☕</span>
              <span className="text-gray-700">Break</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <span className="text-gray-700">Social Event</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
