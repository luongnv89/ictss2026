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
      title: 'Conference Chairs',
      members: [
        { name: 'Prof. Silvia Bonfanti', affiliation: 'University of Bergamo', country: 'Italy' },
        {
          name: 'Prof. George Angelos Papadopoulos',
          affiliation: 'University of Cyprus',
          country: 'Cyprus',
        },
      ],
    },
    {
      title: 'Program Committee Chairs',
      members: [
        { name: 'Prof. Ana Rosa Cavalli', affiliation: 'Télécom SudParis', country: 'France' },
        { name: 'Prof. Robert Hierons', affiliation: 'University of Sheffield', country: 'UK' },
        { name: 'Prof. Nikolai Kosmatov', affiliation: 'Thales Research & Technology', country: 'France' },
      ],
    },
    {
      title: 'Organizing Committee',
      members: [
        {
          name: 'Dr. Pascale Le Gall',
          affiliation: 'CentraleSupélec',
          role: 'Local Arrangements Chair',
          country: 'France',
        },
        {
          name: 'Dr. Christophe Gaston',
          affiliation: 'CEA LIST',
          role: 'Workshop Chair',
          country: 'France',
        },
        {
          name: 'Prof. Mercedes G. Merayo',
          affiliation: 'Universidad Complutense de Madrid',
          role: 'Publicity Chair',
          country: 'Spain',
        },
        {
          name: 'Dr. Alessandra De Benedictis',
          affiliation: 'University of Naples Federico II',
          role: 'Web Chair',
          country: 'Italy',
        },
      ],
    },
    {
      title: 'Program Committee',
      members: [
        { name: 'Prof. Valentina Casola', affiliation: 'University of Naples Federico II', country: 'Italy' },
        { name: 'Prof. David Clark', affiliation: 'University College London', country: 'UK' },
        { name: 'Prof. Hector Menendez', affiliation: 'King\'s College London', country: 'UK' },
        { name: 'Prof. Massimiliano Rak', affiliation: 'University of Campania', country: 'Italy' },
        {
          name: 'Prof. Gerardo Schneider',
          affiliation: 'University of Gothenburg',
          country: 'Sweden',
        },
        {
          name: 'Prof. Adenilso Simao',
          affiliation: 'University of São Paulo',
          country: 'Brazil',
        },
        { name: 'Prof. Jan Tretmans', affiliation: 'Radboud University', country: 'Netherlands' },
        { name: 'Prof. Hüsnü Yenigün', affiliation: 'Sabanci University', country: 'Turkey' },
        { name: 'Prof. Franz Wotawa', affiliation: 'Graz University of Technology', country: 'Austria' },
        {
          name: 'Dr. Alexander Pretschner',
          affiliation: 'Technical University of Munich',
          country: 'Germany',
        },
        {
          name: 'Prof. Kenji Taguchi',
          affiliation: 'National Institute of Informatics',
          country: 'Japan',
        },
        {
          name: 'Dr. Bestoun Ahmed',
          affiliation: 'University of Liverpool',
          country: 'UK',
        },
        { name: 'Prof. Thierry Jéron', affiliation: 'Inria Rennes', country: 'France' },
        {
          name: 'Dr. Machiel van der Bijl',
          affiliation: 'Axini',
          country: 'Netherlands',
        },
        { name: 'Prof. Bernhard Aichernig', affiliation: 'TU Graz', country: 'Austria' },
        {
          name: 'Prof. Djamel Eddine Saidouni',
          affiliation: 'University of Constantine',
          country: 'Algeria',
        },
        {
          name: 'Prof. Kyriakos Kritikos',
          affiliation: 'ICS-FORTH',
          country: 'Greece',
        },
        {
          name: 'Dr. Yliès Falcone',
          affiliation: 'University Grenoble Alpes',
          country: 'France',
        },
        {
          name: 'Prof. Manuel Núñez',
          affiliation: 'Universidad Complutense de Madrid',
          country: 'Spain',
        },
        {
          name: 'Dr. César Andrés',
          affiliation: 'Universidad Complutense de Madrid',
          country: 'Spain',
        },
      ],
    },
    {
      title: 'Steering Committee',
      members: [
        { name: 'Prof. Ana Rosa Cavalli', affiliation: 'Télécom SudParis', country: 'France' },
        { name: 'Prof. Robert Hierons', affiliation: 'University of Sheffield', country: 'UK' },
        { name: 'Prof. Nikolai Kosmatov', affiliation: 'Thales Research & Technology', country: 'France' },
        {
          name: 'Prof. Mercedes G. Merayo',
          affiliation: 'Universidad Complutense de Madrid',
          country: 'Spain',
        },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Committees"
        description="Meet the organizing and program committees of ICTSS 2026"
        keywords={['committees', 'organizers', 'program committee', 'ICTSS']}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-12">
        <Container size="xl">
          <Heading level={1} className="text-white text-center mb-4">
            Conference Committees
          </Heading>
          <p className="text-center text-lg">
            Meet the distinguished researchers and professionals organizing ICTSS 2026
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
