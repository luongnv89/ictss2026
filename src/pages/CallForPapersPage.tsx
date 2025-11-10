import { SEO } from '@/components/layout'
import { Container, Heading, Button } from '@/components'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components'

export function CallForPapersPage() {
  return (
    <>
      <SEO
        title="Call for Papers"
        description="Submit your research to ICTSS 2026. We invite submissions on software testing, verification, and quality assurance."
        keywords={[
          'call for papers',
          'CFP',
          'software testing',
          'paper submission',
          'ICTSS 2026',
          'verification',
        ]}
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Call for Papers
          </Heading>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            We invite high-quality submissions on all aspects of testing software and systems
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
              { label: 'Paper Submission Deadline', date: 'June 16, 2026' },
              { label: 'Notification of Acceptance', date: 'July 14, 2026' },
              { label: 'Camera-Ready Deadline', date: 'July 25, 2026' },
              { label: 'Author Registration Deadline', date: 'July 31, 2026' },
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
              <AccordionItem value="testing-fundamentals">
                <AccordionTrigger>Testing Fundamentals & Techniques</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Test generation and selection techniques</li>
                    <li>• Test automation and framework design</li>
                    <li>• Regression testing and test maintenance</li>
                    <li>• Test adequacy and coverage criteria</li>
                    <li>• Mutation testing and fault injection</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="emerging-technologies">
                <AccordionTrigger>Testing Emerging Technologies</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Testing AI/ML systems and LLMs</li>
                    <li>• Quantum software testing</li>
                    <li>• IoT and cyber-physical systems testing</li>
                    <li>• Blockchain and smart contract testing</li>
                    <li>• Cloud-native and microservices testing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="formal-methods">
                <AccordionTrigger>Formal Methods & Model-Based Testing</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Model-based test generation</li>
                    <li>• Formal verification and theorem proving</li>
                    <li>• Model checking and symbolic execution</li>
                    <li>• Specification-based testing</li>
                    <li>• Testing and modeling languages</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security-quality">
                <AccordionTrigger>Security & Quality Testing</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Security testing and vulnerability analysis</li>
                    <li>• Fuzzing and penetration testing</li>
                    <li>• Performance and reliability testing</li>
                    <li>• Usability and accessibility testing</li>
                    <li>• Safety-critical systems testing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="continuous-testing">
                <AccordionTrigger>Continuous Testing & DevOps</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• CI/CD testing strategies</li>
                    <li>• Test impact analysis and selection</li>
                    <li>• Shift-left and shift-right testing</li>
                    <li>• Testing in agile and DevOps environments</li>
                    <li>• Monitoring and testing in production</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="applications">
                <AccordionTrigger>Applications & Case Studies</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mobile and web application testing</li>
                    <li>• Automotive and embedded systems testing</li>
                    <li>• Healthcare and medical device testing</li>
                    <li>• Industrial applications and case studies</li>
                    <li>• Testing tool development and evaluation</li>
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
                <li>• Maximum length: 16 pages (including references)</li>
                <li>• Format: Springer LNCS format</li>
                <li>• File format: PDF only</li>
                <li>• Language: English</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Review Process</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All submissions will be peer-reviewed (single-blind)</li>
                <li>• Minimum of 3 reviewers per paper</li>
                <li>• Criteria: originality, significance, technical quality, and clarity</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Publication</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Accepted papers will be published in Springer LNCS proceedings</li>
                <li>
                  • Extended versions of selected papers may be invited for journal special issue
                </li>
                <li>• At least one author must register and present the paper</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="primary">
              Submit Your Paper
            </Button>
            <p className="mt-4 text-gray-600">Submission system will open on May 1, 2026</p>
          </div>
        </Container>
      </section>
    </>
  )
}
