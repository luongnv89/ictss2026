import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'

export function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="IEEE CloudCom 2026 Terms of Service - Rules and regulations for using our website and attending the conference."
        noIndex
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Terms of Service
          </Heading>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Last updated: November 10, 2025
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container size="lg">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                1. Acceptance of Terms
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the IEEE CloudCom 2026 website (cloudcom2026.org),
                registering for the conference, or submitting papers, you accept and agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not
                use our services.
              </p>
            </div>

            {/* Website Use */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                2. Website Use
              </Heading>
              <Heading level={3} className="mb-3 text-lg">
                2.1 Permitted Use
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">You may use this website for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Viewing conference information</li>
                <li>Registering for the conference</li>
                <li>Submitting papers for review</li>
                <li>Accessing conference materials</li>
                <li>Communicating with organizers</li>
              </ul>

              <Heading level={3} className="mb-3 text-lg mt-6">
                2.2 Prohibited Activities
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with the proper working of the website</li>
                <li>Submit false or misleading information</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
              </ul>
            </div>

            {/* Registration */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                3. Conference Registration
              </Heading>
              <Heading level={3} className="mb-3 text-lg">
                3.1 Registration Requirements
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                To register for IEEE CloudCom 2026, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete information</li>
                <li>Pay the applicable registration fee</li>
                <li>Accept these Terms of Service</li>
                <li>Comply with our Code of Conduct</li>
              </ul>

              <Heading level={3} className="mb-3 text-lg mt-6">
                3.2 Registration Fees
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                Registration fees are non-refundable except as specified in our{' '}
                <a href="/registration#cancellation" className="text-ieee-blue hover:underline">
                  Cancellation Policy
                </a>
                . Fees vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Registration date (early bird, regular, late)</li>
                <li>Attendee type (IEEE member, non-member, student)</li>
                <li>Additional events or workshops</li>
              </ul>

              <Heading level={3} className="mb-3 text-lg mt-6">
                3.3 Cancellation and Refunds
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                Cancellations received before September 1, 2026 will receive a 50% refund.
                Cancellations after this date are non-refundable. All refund requests must be
                submitted in writing to{' '}
                <a href="mailto:registration@cloudcom2026.org" className="text-ieee-blue">
                  registration@cloudcom2026.org
                </a>
                .
              </p>
            </div>

            {/* Paper Submission */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                4. Paper Submission and Publication
              </Heading>
              <Heading level={3} className="mb-3 text-lg">
                4.1 Submission Requirements
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">Papers submitted must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Be original work not previously published</li>
                <li>Not be under review elsewhere</li>
                <li>Follow the IEEE Conference template</li>
                <li>Not exceed 8 pages including references</li>
                <li>Be submitted in PDF format</li>
              </ul>

              <Heading level={3} className="mb-3 text-lg mt-6">
                4.2 Copyright and Publication Rights
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                By submitting a paper, you agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You own the copyright or have permission to publish the work</li>
                <li>
                  If accepted, you grant IEEE the right to publish the paper in the conference
                  proceedings
                </li>
                <li>The paper will be indexed in IEEE Xplore Digital Library</li>
                <li>At least one author must register and present the paper</li>
              </ul>

              <Heading level={3} className="mb-3 text-lg mt-6">
                4.3 Review Process
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                All submissions undergo double-blind peer review by at least three reviewers. The
                program committee's decisions are final. We do not guarantee acceptance of any
                submission.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                5. Intellectual Property
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos,
                images, and software, is the property of CloudCom 2026, IEEE, or their licensors and
                is protected by copyright and intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from any
                content without explicit written permission.
              </p>
            </div>

            {/* Code of Conduct */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                6. Code of Conduct
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                IEEE CloudCom 2026 is committed to providing a harassment-free conference experience
                for everyone. All attendees, speakers, sponsors, and volunteers must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Treat all participants with respect and courtesy</li>
                <li>Refrain from discriminatory, harassing, or offensive behavior</li>
                <li>Comply with all venue rules and regulations</li>
                <li>Follow instructions from conference staff</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Violations may result in removal from the conference without refund and being barred
                from future events.
              </p>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                7. Limitation of Liability
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, IEEE CloudCom 2026 and its organizers,
                sponsors, and affiliates shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Personal injury or property damage at the conference venue</li>
                <li>Errors or omissions in conference materials</li>
                <li>Third-party actions or content</li>
                <li>Force majeure events (natural disasters, pandemics, etc.)</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                8. Disclaimer of Warranties
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                The website and conference services are provided "as is" and "as available" without
                any warranties of any kind, either express or implied, including but not limited to
                warranties of merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                9. Indemnification
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless IEEE CloudCom 2026, its organizers,
                sponsors, and affiliates from any claims, damages, losses, liabilities, and expenses
                (including legal fees) arising from your use of the website, attendance at the
                conference, or violation of these Terms.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                10. Privacy
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                Your use of our website and services is also governed by our{' '}
                <a href="/privacy-policy" className="text-ieee-blue hover:underline">
                  Privacy Policy
                </a>
                . Please review it to understand how we collect, use, and protect your personal
                data.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                11. Changes to Terms
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting on this page. Your continued use of the website
                after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                12. Governing Law and Jurisdiction
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of
                France. Any disputes arising from these Terms or your use of our services shall be
                subject to the exclusive jurisdiction of the courts of Paris, France.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                13. Severability
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the
                remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                14. Contact Information
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold">IEEE CloudCom 2026</p>
                <p className="text-gray-700">
                  Email:{' '}
                  <a href="mailto:info@cloudcom2026.org" className="text-ieee-blue">
                    info@cloudcom2026.org
                  </a>
                  <br />
                  Address: Sorbonne Université, 21 Rue de l'École de Médecine, 75006 Paris, France
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
