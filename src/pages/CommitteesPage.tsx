import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'

interface CommitteeMember {
  name: string
  affiliation: string
  role?: string
  country?: string
}

interface Committee {
  title: string
  members: CommitteeMember[]
}

export function CommitteesPage() {
  const committees: Committee[] = [
    {
      title: 'General Chairs',
      members: [
        { name: 'Prof. Jean Dupont', affiliation: 'Sorbonne Université', country: 'France' },
        {
          name: 'Prof. Maria Garcia',
          affiliation: 'Universidad Politécnica de Madrid',
          country: 'Spain',
        },
      ],
    },
    {
      title: 'Program Committee Chairs',
      members: [
        { name: 'Prof. John Smith', affiliation: 'Stanford University', country: 'USA' },
        { name: 'Prof. Li Wei', affiliation: 'Tsinghua University', country: 'China' },
        { name: 'Dr. Anna Kowalski', affiliation: 'ETH Zurich', country: 'Switzerland' },
      ],
    },
    {
      title: 'Organizing Committee',
      members: [
        {
          name: 'Dr. Sophie Martin',
          affiliation: 'Montimage',
          role: 'Local Arrangements Chair',
          country: 'France',
        },
        {
          name: 'Dr. Thomas Mueller',
          affiliation: 'Technical University of Munich',
          role: 'Workshop Chair',
          country: 'Germany',
        },
        {
          name: 'Dr. Priya Sharma',
          affiliation: 'IIT Bombay',
          role: 'Publicity Chair',
          country: 'India',
        },
        {
          name: 'Dr. Carlos Silva',
          affiliation: 'Universidade de São Paulo',
          role: 'Sponsorship Chair',
          country: 'Brazil',
        },
      ],
    },
    {
      title: 'Program Committee',
      members: [
        { name: 'Prof. Ahmed Hassan', affiliation: 'Cairo University', country: 'Egypt' },
        { name: 'Dr. Emma Wilson', affiliation: 'University of Cambridge', country: 'UK' },
        { name: 'Prof. Hiroshi Yamamoto', affiliation: 'University of Tokyo', country: 'Japan' },
        { name: 'Dr. Lars Andersson', affiliation: 'KTH Royal Institute', country: 'Sweden' },
        {
          name: 'Prof. Olga Petrova',
          affiliation: 'Moscow State University',
          country: 'Russia',
        },
        {
          name: 'Dr. James Brown',
          affiliation: 'University of Melbourne',
          country: 'Australia',
        },
        { name: 'Prof. Yoon Park', affiliation: 'KAIST', country: 'South Korea' },
        { name: 'Dr. Isabella Rossi', affiliation: 'Politecnico di Milano', country: 'Italy' },
        { name: 'Prof. David Cohen', affiliation: 'Tel Aviv University', country: 'Israel' },
        {
          name: 'Dr. Fatima Al-Rashid',
          affiliation: 'King Abdullah University',
          country: 'Saudi Arabia',
        },
        {
          name: 'Prof. Robert Johnson',
          affiliation: 'University of Toronto',
          country: 'Canada',
        },
        {
          name: 'Dr. Nina Patel',
          affiliation: 'National University of Singapore',
          country: 'Singapore',
        },
        { name: 'Prof. Hans Schmidt', affiliation: 'University of Vienna', country: 'Austria' },
        {
          name: 'Dr. Carolina Mendez',
          affiliation: 'Universidad de Chile',
          country: 'Chile',
        },
        { name: 'Prof. Kwame Osei', affiliation: 'University of Ghana', country: 'Ghana' },
        {
          name: 'Dr. Annika Jensen',
          affiliation: 'University of Copenhagen',
          country: 'Denmark',
        },
        {
          name: 'Prof. Dimitri Papadopoulos',
          affiliation: 'National Technical University of Athens',
          country: 'Greece',
        },
        {
          name: "Dr. Rachel O'Brien",
          affiliation: 'Trinity College Dublin',
          country: 'Ireland',
        },
        {
          name: 'Prof. Nguyen Van Minh',
          affiliation: 'Hanoi University of Science',
          country: 'Vietnam',
        },
        {
          name: 'Dr. Patricia Santos',
          affiliation: 'Universidade de Lisboa',
          country: 'Portugal',
        },
      ],
    },
    {
      title: 'Steering Committee',
      members: [
        { name: 'Prof. Richard Davis', affiliation: 'MIT', country: 'USA' },
        { name: 'Prof. Francoise Blanc', affiliation: 'INRIA', country: 'France' },
        { name: 'Prof. Klaus Weber', affiliation: 'University of Heidelberg', country: 'Germany' },
        {
          name: 'Prof. Raj Kumar',
          affiliation: 'Indian Institute of Science',
          country: 'India',
        },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Committees"
        description="Meet the organizing and program committees of IEEE CloudCom 2026"
        keywords={['committees', 'organizers', 'program committee', 'IEEE CloudCom']}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-12">
        <Container size="xl">
          <Heading level={1} className="text-white text-center mb-4">
            Conference Committees
          </Heading>
          <p className="text-center text-lg">
            Meet the distinguished researchers and professionals organizing CloudCom 2026
          </p>
        </Container>
      </section>

      {/* Committees Sections */}
      <section className="py-16 bg-gray-50">
        <Container size="xl">
          <div className="space-y-16">
            {committees.map((committee) => (
              <div key={committee.title}>
                <Heading level={2} className="text-ieee-blue mb-6 pb-2 border-b-2 border-ieee-blue">
                  {committee.title}
                </Heading>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {committee.members.map((member, index) => (
                    <div
                      key={`${member.name}-${index}`}
                      className="bg-white p-6 rounded-lg border border-gray-200 hover:border-ieee-blue hover:shadow-lg transition-all"
                    >
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-sm text-gray-700 mb-1">{member.affiliation}</p>
                      {member.country && (
                        <p className="text-sm text-gray-500 mb-2">{member.country}</p>
                      )}
                      {member.role && (
                        <p className="text-sm text-ieee-blue font-medium mt-2">{member.role}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call for Participation */}
      <section className="py-12 bg-white">
        <Container size="lg">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Join Our Community
            </Heading>
            <p className="text-lg text-gray-600 mb-6">
              Interested in participating? Submit your research or join as a reviewer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/call-for-papers"
                className="px-6 py-3 bg-ieee-blue text-white rounded-lg hover:bg-ieee-blue-dark transition-colors font-medium"
              >
                Submit a Paper
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-ieee-blue text-ieee-blue rounded-lg hover:bg-ieee-blue hover:text-white transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
