import { SEO } from '@/components/layout'
import { Container, Heading, Button } from '@/components'
import { Badge } from '@/components'

export function RegistrationPage() {
  return (
    <>
      <SEO
        title="Registration"
        description="Register for IEEE CloudCom 2026. Early bird rates available until August 1, 2026."
        keywords={['registration', 'fees', 'early bird', 'CloudCom 2026']}
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Registration
          </Heading>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Secure your place at IEEE CloudCom 2026
          </p>
        </Container>
      </section>

      {/* Registration Fees */}
      <section className="py-16">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Registration Fees
          </Heading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Early Bird */}
            <div className="border-2 border-ieee-blue rounded-lg p-6 relative">
              <Badge variant="primary" className="absolute -top-3 left-6">
                Early Bird
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Until August 1, 2026</h3>
              <div className="space-y-3 mt-6">
                <div>
                  <p className="text-gray-600 text-sm">IEEE Member</p>
                  <p className="text-2xl font-bold text-ieee-blue">€450</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Non-Member</p>
                  <p className="text-2xl font-bold text-gray-900">€550</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Student (IEEE)</p>
                  <p className="text-2xl font-bold text-ieee-blue">€250</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Student (Non-IEEE)</p>
                  <p className="text-2xl font-bold text-gray-900">€300</p>
                </div>
              </div>
            </div>

            {/* Regular */}
            <div className="border-2 border-gray-300 rounded-lg p-6 relative">
              <Badge variant="default" className="absolute -top-3 left-6">
                Regular
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">August 2 - September 30</h3>
              <div className="space-y-3 mt-6">
                <div>
                  <p className="text-gray-600 text-sm">IEEE Member</p>
                  <p className="text-2xl font-bold text-gray-900">€550</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Non-Member</p>
                  <p className="text-2xl font-bold text-gray-900">€650</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Student (IEEE)</p>
                  <p className="text-2xl font-bold text-gray-900">€300</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Student (Non-IEEE)</p>
                  <p className="text-2xl font-bold text-gray-900">€350</p>
                </div>
              </div>
            </div>

            {/* Late/On-site */}
            <div className="border-2 border-gray-300 rounded-lg p-6 relative">
              <Badge variant="warning" className="absolute -top-3 left-6">
                Late/On-site
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">After October 1</h3>
              <div className="space-y-3 mt-6">
                <div>
                  <p className="text-gray-600 text-sm">IEEE Member</p>
                  <p className="text-2xl font-bold text-gray-900">€650</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Non-Member</p>
                  <p className="text-2xl font-bold text-gray-900">€750</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Student (IEEE)</p>
                  <p className="text-2xl font-bold text-gray-900">€350</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Student (Non-IEEE)</p>
                  <p className="text-2xl font-bold text-gray-900">€400</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="primary">
              Register Now
            </Button>
            <p className="mt-4 text-gray-600 text-sm">Registration opens on July 1, 2026</p>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Registration Includes
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Full Conference Access</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Access to all technical sessions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Keynote presentations
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Panel discussions and workshops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Poster and demo sessions
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Materials & Networking</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Conference proceedings (digital)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Conference bag and materials
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Coffee breaks and refreshments
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Welcome reception
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Social Events</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Conference banquet
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Networking sessions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Cultural activities (optional)
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Additional Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Certificate of attendance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  WiFi access at venue
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  IEEE Xplore publication
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Important Information */}
      <section className="py-16">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Important Information
          </Heading>
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-ieee-blue p-6">
              <h3 className="font-bold text-gray-900 mb-2">Author Registration</h3>
              <p className="text-gray-700">
                At least one author per accepted paper must register at the full (non-student) rate
                by the camera-ready deadline (August 15, 2026).
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Cancellation Policy</h3>
              <p className="text-gray-700">
                Cancellations received before September 1, 2026 will receive a 50% refund.
                Cancellations after this date are non-refundable. All refund requests must be
                submitted in writing.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Student Registration</h3>
              <p className="text-gray-700">
                Proof of student status (valid student ID or letter from institution) must be
                provided at registration.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
