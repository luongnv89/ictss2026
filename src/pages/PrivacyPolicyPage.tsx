import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="IEEE CloudCom 2026 Privacy Policy - How we collect, use, and protect your personal data in compliance with GDPR."
        noIndex
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Privacy Policy
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
                1. Introduction
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                IEEE CloudCom 2026 ("we", "our", or "us") is committed to protecting your privacy
                and personal data. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website cloudcom2026.org, register for
                the conference, or submit papers.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This policy complies with the EU General Data Protection Regulation (GDPR) and other
                applicable data protection laws.
              </p>
            </div>

            {/* Data Controller */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                2. Data Controller
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="text-gray-900 font-semibold">IEEE CloudCom 2026 Conference</p>
                <p className="text-gray-700">
                  Sorbonne Université
                  <br />
                  21 Rue de l'École de Médecine
                  <br />
                  75006 Paris, France
                  <br />
                  Email:{' '}
                  <a href="mailto:privacy@cloudcom2026.org" className="text-ieee-blue">
                    privacy@cloudcom2026.org
                  </a>
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                3. Information We Collect
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect the following types of personal data:
              </p>

              <Heading level={3} className="mb-3 text-lg">
                3.1 Information You Provide
              </Heading>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Registration Data:</strong> Name, email address, affiliation, country,
                  dietary preferences
                </li>
                <li>
                  <strong>Paper Submission Data:</strong> Author names, affiliations, email
                  addresses, research content
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address (payment processing handled
                  by third-party providers)
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages sent through contact forms, email
                  correspondence
                </li>
              </ul>

              <Heading level={3} className="mb-3 text-lg mt-6">
                3.2 Automatically Collected Data
              </Heading>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent, browser type, device
                  information
                </li>
                <li>
                  <strong>Cookies:</strong> Session cookies, preference cookies, analytics cookies
                  (with consent)
                </li>
                <li>
                  <strong>Log Data:</strong> IP address, access times, referring URLs
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                4. How We Use Your Information
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process your personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Conference Management:</strong> Processing registrations, managing
                  attendance, organizing events
                </li>
                <li>
                  <strong>Paper Review:</strong> Facilitating peer review, publication in
                  proceedings, academic indexing
                </li>
                <li>
                  <strong>Communication:</strong> Sending conference updates, important
                  announcements, responding to inquiries
                </li>
                <li>
                  <strong>Website Improvement:</strong> Analyzing usage patterns, improving user
                  experience
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Meeting legal obligations, preventing fraud,
                  protecting rights
                </li>
              </ul>
            </div>

            {/* Legal Basis */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                5. Legal Basis for Processing
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under GDPR, we process your personal data based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Contract Performance:</strong> Processing registration and paper
                  submissions
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> Improving our website, preventing fraud,
                  academic purposes
                </li>
                <li>
                  <strong>Consent:</strong> Marketing communications, analytics cookies, optional
                  features
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Compliance with tax laws, financial regulations
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                6. Data Sharing and Disclosure
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>IEEE:</strong> For publication in IEEE Xplore Digital Library
                </li>
                <li>
                  <strong>Reviewers:</strong> Paper content shared with peer reviewers
                  (anonymization maintained where applicable)
                </li>
                <li>
                  <strong>Service Providers:</strong> Payment processors, email services, hosting
                  providers (under data processing agreements)
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to protect rights
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal data to third parties.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                7. Data Retention
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal data only as long as necessary:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>
                  <strong>Registration Data:</strong> 3 years after conference for financial and
                  legal compliance
                </li>
                <li>
                  <strong>Published Papers:</strong> Permanently (academic archival purposes)
                </li>
                <li>
                  <strong>Unpublished Submissions:</strong> 1 year after submission
                </li>
                <li>
                  <strong>Marketing Consent:</strong> Until consent withdrawn
                </li>
                <li>
                  <strong>Website Logs:</strong> 12 months
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                8. Your Rights Under GDPR
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Right to Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your data (subject to legal
                  obligations)
                </li>
                <li>
                  <strong>Right to Restriction:</strong> Limit how we use your data
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your data in a structured
                  format
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based on legitimate
                  interest
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing or
                  analytics
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, contact us at{' '}
                <a
                  href="mailto:privacy@cloudcom2026.org"
                  className="text-ieee-blue hover:underline"
                >
                  privacy@cloudcom2026.org
                </a>
              </p>
            </div>

            {/* Security */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                9. Data Security
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>HTTPS/TLS encryption for data transmission</li>
                <li>Secure hosting with reputable providers</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits and updates</li>
                <li>Data processing agreements with third parties</li>
              </ul>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                10. International Data Transfers
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                Your data may be transferred to and processed in countries outside the European
                Economic Area (EEA). In such cases, we ensure adequate protection through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>EU Standard Contractual Clauses</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other legally approved transfer mechanisms</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                11. Cookies
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to improve your browsing experience. For detailed information about
                our cookie usage, please see our{' '}
                <a href="/cookie-policy" className="text-ieee-blue hover:underline">
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                12. Children's Privacy
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 16. We do not
                knowingly collect personal data from children.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                13. Changes to This Privacy Policy
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of significant
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                14. Contact Us
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about this Privacy Policy or to exercise your rights, please contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold">Data Protection Officer</p>
                <p className="text-gray-700">
                  Email:{' '}
                  <a href="mailto:privacy@cloudcom2026.org" className="text-ieee-blue">
                    privacy@cloudcom2026.org
                  </a>
                  <br />
                  Address: Sorbonne Université, 21 Rue de l'École de Médecine, 75006 Paris, France
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                You also have the right to lodge a complaint with your local data protection
                authority.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
