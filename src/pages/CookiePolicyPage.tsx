import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'

export function CookiePolicyPage() {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="ICTSS 2026 Cookie Policy - Learn about how we use cookies and similar technologies on our website."
        noIndex
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Cookie Policy
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
                1. What Are Cookies?
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your device (computer, smartphone,
                or tablet) when you visit a website. They are widely used to make websites work more
                efficiently and provide information to website owners.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                2. How We Use Cookies
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">ICTSS 2026 uses cookies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Enable essential website functionality</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve your browsing experience</li>
                <li>Analyze site traffic and usage patterns</li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                3. Types of Cookies We Use
              </Heading>

              {/* Necessary Cookies */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <Heading level={3} className="mb-3 text-lg">
                  3.1 Necessary Cookies
                </Heading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Purpose:</strong> These cookies are essential for the website to function
                  properly.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Session management cookies</li>
                  <li>Cookie consent preferences</li>
                  <li>Security and authentication cookies</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>Duration:</strong> Session or up to 1 year
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Consent Required:</strong> No (strictly necessary)
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <Heading level={3} className="mb-3 text-lg">
                  3.2 Analytics Cookies
                </Heading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Purpose:</strong> Help us understand how visitors interact with our
                  website by collecting and reporting information anonymously.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Google Analytics (_ga, _gid, _gat)</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>Duration:</strong> Up to 2 years
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Consent Required:</strong> Yes
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <Heading level={3} className="mb-3 text-lg">
                  3.3 Marketing Cookies
                </Heading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Purpose:</strong> Used to track visitors across websites to display
                  relevant advertisements and engage users.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Social media integration cookies</li>
                  <li>Advertising network cookies</li>
                  <li>Retargeting cookies</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>Duration:</strong> Up to 1 year
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Consent Required:</strong> Yes
                </p>
              </div>
            </div>

            {/* Cookie Table */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                4. Detailed Cookie List
              </Heading>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Cookie Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">cookie-consent</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Necessary</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Stores cookie preferences</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">_ga</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Google Analytics user identification
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">_gid</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Google Analytics session identification
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">24 hours</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">_gat</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Google Analytics throttling
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                5. Third-Party Cookies
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some cookies are set by third-party services that appear on our pages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Google Analytics:</strong> We use Google Analytics to analyze website
                  usage. Google may use cookies to collect information about your use of the
                  website.
                </li>
                <li>
                  <strong>Social Media:</strong> Social media buttons and plugins may set cookies to
                  track your interactions.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These third parties have their own privacy policies. We recommend reviewing them:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ieee-blue hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                6. How to Manage Cookies
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>

              <Heading level={3} className="mb-3 text-lg">
                6.1 Cookie Consent Banner
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you first visit our website, we show a cookie consent banner where you can:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
                <li>Accept all cookies</li>
                <li>Accept only necessary cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>

              <Heading level={3} className="mb-3 text-lg">
                6.2 Browser Settings
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most browsers allow you to control cookies through their settings:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ieee-blue hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ieee-blue hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ieee-blue hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ieee-blue hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Blocking necessary cookies may prevent you from using
                  certain features of our website.
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                7. Changes to This Cookie Policy
              </Heading>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on
                this page with an updated "Last updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <Heading level={2} className="mb-4">
                8. Contact Us
              </Heading>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Email:{' '}
                  <a href="mailto:privacy@ictss2026.org" className="text-ieee-blue">
                    privacy@ictss2026.org
                  </a>
                  <br />
                  See our{' '}
                  <a href="/privacy-policy" className="text-ieee-blue hover:underline">
                    Privacy Policy
                  </a>{' '}
                  for full contact details.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
