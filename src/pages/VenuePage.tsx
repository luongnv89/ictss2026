import { SEO } from '@/components/layout'
import { Container, Heading } from '@/components'
import { Card, CardContent, CardHeader, CardTitle } from '@/components'

export function VenuePage() {
  return (
    <>
      <SEO
        title="Venue & Travel"
        description="ICTSS 2026 will be held at Sorbonne Université in Paris, France. Find information about the venue, accommodation, and travel."
        keywords={['venue', 'Paris', 'travel', 'accommodation', 'Sorbonne Université']}
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Venue & Travel
          </Heading>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Join us in the heart of Paris at Sorbonne Université
          </p>
        </Container>
      </section>

      {/* Venue Information */}
      <section className="py-16">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Conference Venue
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Sorbonne Université</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Address:</p>
                      <p className="text-gray-700">
                        21 Rue de l'École de Médecine
                        <br />
                        75006 Paris, France
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">About the Venue:</p>
                      <p className="text-gray-700">
                        Located in the historic Latin Quarter, Sorbonne Université is one of
                        Europe's leading research universities, providing a prestigious setting for
                        ICTSS 2026.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Getting to the Venue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">Metro:</p>
                      <p className="text-gray-700">Line 4 - Odéon station (3 min walk)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">RER:</p>
                      <p className="text-gray-700">
                        RER B - Luxembourg station (10 min walk)
                        <br />
                        RER C - Saint-Michel station (8 min walk)
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Bus:</p>
                      <p className="text-gray-700">Lines 58, 70, 86, 87</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Travel to Paris */}
      <section className="py-16 bg-gray-50">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Travel to Paris
          </Heading>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Paris Charles de Gaulle Airport (CDG)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    The main international airport serving Paris, located 25km northeast of the city
                    center.
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Transportation to City Center:</p>
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>
                        • <strong>RER B Train:</strong> €11.45, 50-60 minutes to city center
                      </li>
                      <li>
                        • <strong>Roissybus:</strong> €14, 60-75 minutes to Opéra
                      </li>
                      <li>
                        • <strong>Taxi:</strong> €50-70, 45-60 minutes (depending on traffic)
                      </li>
                      <li>
                        • <strong>Uber/Ride-sharing:</strong> Similar to taxi pricing
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paris Orly Airport (ORY)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Secondary airport located 13km south of Paris. Connected via Orlyval + RER B or
                  bus services. Travel time: approximately 40-50 minutes to city center.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Accommodation */}
      <section className="py-16">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Accommodation
          </Heading>
          <p className="text-gray-700 mb-6">
            Paris offers a wide range of accommodation options. Here are some recommended hotels
            near the conference venue:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Hotel Recamier',
                distance: '400m',
                price: '€150-200',
                rating: '★★★★',
              },
              {
                name: 'Hotel Luxembourg Parc',
                distance: '600m',
                price: '€180-250',
                rating: '★★★★',
              },
              {
                name: 'Hotel Saint-Michel',
                distance: '500m',
                price: '€120-180',
                rating: '★★★',
              },
              {
                name: 'Hotel des Grandes Ecoles',
                distance: '800m',
                price: '€140-190',
                rating: '★★★',
              },
              {
                name: 'Hotel Cluny Sorbonne',
                distance: '300m',
                price: '€160-220',
                rating: '★★★★',
              },
              {
                name: 'Budget Options (Ibis, etc.)',
                distance: '1-2km',
                price: '€80-120',
                rating: '★★-★★★',
              },
            ].map((hotel) => (
              <Card key={hotel.name} hoverable>
                <CardHeader>
                  <CardTitle>{hotel.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <strong>Distance:</strong> {hotel.distance}
                    </p>
                    <p className="text-gray-700">
                      <strong>Price Range:</strong> {hotel.price}/night
                    </p>
                    <p className="text-gray-700">
                      <strong>Rating:</strong> {hotel.rating}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            * Prices are approximate and may vary based on booking dates and availability.
          </p>
        </Container>
      </section>

      {/* Visa Information */}
      <section className="py-16 bg-gray-50">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Visa Information
          </Heading>
          <Card>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                France is part of the Schengen Area. Depending on your nationality, you may need a
                visa to enter France.
              </p>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Visa-Free Entry:</p>
                <p className="text-gray-700">
                  Citizens of EU/EEA countries, USA, Canada, Australia, Japan, and many other
                  countries can enter France visa-free for stays up to 90 days.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Schengen Visa Required:</p>
                <p className="text-gray-700">
                  If you need a visa, please apply for a Schengen short-stay visa at the French
                  embassy or consulate in your country.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Invitation Letters:</p>
                <p className="text-gray-700">
                  Registered participants requiring an invitation letter for visa purposes can
                  request one by contacting{' '}
                  <a
                    href="mailto:registration@ictss2026.org"
                    className="text-ieee-blue hover:underline"
                  >
                    registration@ictss2026.org
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Local Information */}
      <section className="py-16">
        <Container size="lg">
          <Heading level={2} className="mb-8">
            Local Information
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Climate in October</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Average temperature: 10-16°C (50-61°F)
                  <br />
                  Pack layers and a light rain jacket
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Currency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Euro (EUR / €)
                  <br />
                  Credit cards widely accepted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">French (English spoken in tourist areas and hotels)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Time Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  CET (UTC+1)
                  <br />
                  CEST (UTC+2) in summer
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
