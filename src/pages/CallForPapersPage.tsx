import { SEO } from '@/components/layout'
import { Container, Heading, Button } from '@/components'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components'

export function CallForPapersPage() {
  return (
    <>
      <SEO
        title="Call for Papers"
        description="Submit your research to CloudCom 2026. We invite submissions on cloud computing, distributed systems, and related topics."
        keywords={[
          'call for papers',
          'CFP',
          'cloud computing research',
          'paper submission',
          'CloudCom 2026',
        ]}
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Call for Papers
          </Heading>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            We invite high-quality submissions on all aspects of cloud computing technology and
            science
          </p>
        </Container>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Important Dates
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Abstract Submission Deadline', date: 'April 15, 2026' },
              { label: 'Full Paper Submission Deadline', date: 'May 1, 2026' },
              { label: 'Notification of Acceptance', date: 'July 15, 2026' },
              { label: 'Camera-Ready Deadline', date: 'August 15, 2026' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-4 bg-gray-50 rounded-lg"
              >
                <span className="font-medium text-gray-900">{item.label}</span>
                <span className="text-ieee-blue font-semibold">{item.date}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Topics */}
      <section className="py-16 bg-gray-50">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Research Topics
          </Heading>
          <div className="bg-white rounded-lg p-8">
            <Accordion type="multiple">
              <AccordionItem value="infrastructure">
                <AccordionTrigger>Cloud Infrastructure & Architecture</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Virtualization technologies and hypervisors</li>
                    <li>• Container orchestration and management</li>
                    <li>• Software-defined networking (SDN)</li>
                    <li>• Edge and fog computing architectures</li>
                    <li>• Hybrid and multi-cloud environments</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services">
                <AccordionTrigger>Cloud Services & Applications</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• SaaS, PaaS, and IaaS platforms</li>
                    <li>• Serverless and Function-as-a-Service (FaaS)</li>
                    <li>• Microservices architectures</li>
                    <li>• Cloud-native application development</li>
                    <li>• Mobile cloud computing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger>Security, Privacy & Trust</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cloud security architectures and mechanisms</li>
                    <li>• Data privacy and protection</li>
                    <li>• Identity and access management</li>
                    <li>• Compliance and regulatory frameworks</li>
                    <li>• Blockchain for cloud security</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data">
                <AccordionTrigger>Big Data & Analytics</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Large-scale data processing frameworks</li>
                    <li>• Machine learning and AI in the cloud</li>
                    <li>• Data streaming and real-time analytics</li>
                    <li>• IoT data management</li>
                    <li>• Cloud-based data warehousing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="performance">
                <AccordionTrigger>Performance & Quality of Service</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Resource allocation and optimization</li>
                    <li>• SLA management and monitoring</li>
                    <li>• Energy-efficient cloud computing</li>
                    <li>• Performance modeling and prediction</li>
                    <li>• Cloud cost optimization</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Submission Guidelines
          </Heading>
          <div className="prose max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Paper Format</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Papers must be original and not submitted elsewhere</li>
                <li>• Maximum length: 8 pages (including references)</li>
                <li>• Format: IEEE Conference template (double-column)</li>
                <li>• File format: PDF only</li>
                <li>• Language: English</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Review Process</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All submissions will be peer-reviewed (double-blind)</li>
                <li>• Minimum of 3 reviewers per paper</li>
                <li>• Criteria: originality, significance, technical quality, and clarity</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Publication</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Accepted papers will be published in IEEE Xplore Digital Library</li>
                <li>
                  • Extended versions of selected papers may be invited for journal publication
                </li>
                <li>• At least one author must register and present the paper</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="primary">
              Submit Your Paper
            </Button>
            <p className="mt-4 text-gray-600">Submission system will open on April 1, 2026</p>
          </div>
        </Container>
      </section>
    </>
  )
}
