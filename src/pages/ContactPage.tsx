import { SEO } from '@/components/layout'
import { Container, Heading, Button } from '@/components'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  formRateLimiter,
  validateHoneypot,
  sanitizeInput,
  hasSuspiciousContent,
} from '@/utils/formSecurity'
import { trackFormSubmission } from '@/utils/analytics'

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long'),
  honeypot: z.string().optional(), // Honeypot field - should be empty
})

type ContactFormData = z.infer<typeof contactFormSchema>

const FORM_ID = 'contact-form'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rateLimitRemaining, setRateLimitRemaining] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  // Update rate limit timer
  useEffect(() => {
    if (rateLimitRemaining > 0) {
      const timer = setInterval(() => {
        const remaining = formRateLimiter.getRemainingCooldown(FORM_ID)
        setRateLimitRemaining(remaining)
        if (remaining === 0) {
          clearInterval(timer)
        }
      }, 100)
      return () => clearInterval(timer)
    }
  }, [rateLimitRemaining])

  const onSubmit = async (data: ContactFormData) => {
    // Check rate limiting
    if (!formRateLimiter.canSubmit(FORM_ID)) {
      const remaining = formRateLimiter.getRemainingCooldown(FORM_ID)
      setRateLimitRemaining(remaining)
      return
    }

    // Validate honeypot
    const honeypotValidation = validateHoneypot(data.honeypot || '')
    if (!honeypotValidation.isValid) {
      console.error('Spam detected')
      return
    }

    // Check for suspicious content
    if (hasSuspiciousContent(data)) {
      console.error('Suspicious content detected')
      return
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message),
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Record submission for rate limiting
    formRateLimiter.recordSubmission(FORM_ID)

    // Track form submission
    trackFormSubmission('contact')

    console.log('Form submitted:', sanitizedData)
    setSubmitted(true)
    setIsSubmitting(false)
    reset()
  }

  const handleSendAnother = () => {
    setSubmitted(false)
    reset()
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the ICTSS 2026 organizing committee. Contact us for questions about submissions, registration, or general inquiries."
      />

      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <Container size="xl">
          <Heading level={1} className="text-center mb-4">
            Contact Us
          </Heading>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Have questions? We're here to help
          </p>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Heading level={2} className="mb-6">
                Send Us a Message
              </Heading>

              {submitted ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                  <Button className="mt-4" onClick={handleSendAnother}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field - hidden from users, visible to bots */}
                  <input
                    type="text"
                    {...register('honeypot')}
                    className="absolute -left-[9999px]"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                      placeholder="What is your inquiry about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                      placeholder="Your message..."
                      maxLength={1000}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong className="text-gray-900">Privacy Notice:</strong> By submitting this
                      form, you agree that we will process your personal data to respond to your
                      inquiry. Your data will be handled in accordance with our{' '}
                      <a href="/privacy-policy" className="text-ieee-blue hover:underline">
                        Privacy Policy
                      </a>
                      . You have the right to access, rectify, or delete your data at any time.
                    </p>
                  </div>

                  {/* Rate limit warning */}
                  {rateLimitRemaining > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        Please wait {Math.ceil(rateLimitRemaining / 1000)} seconds before submitting
                        again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || rateLimitRemaining > 0}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div>
              <Heading level={2} className="mb-6">
                Conference Information
              </Heading>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@ictss2026.org" className="text-ieee-blue hover:underline">
                      info@ictss2026.org
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Paper Submissions</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:papers@ictss2026.org"
                      className="text-ieee-blue hover:underline"
                    >
                      papers@ictss2026.org
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Registration</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:registration@ictss2026.org"
                      className="text-ieee-blue hover:underline"
                    >
                      registration@ictss2026.org
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Venue</h3>
                  <p className="text-gray-700">
                    Sorbonne Université
                    <br />
                    21 Rue de l'École de Médecine
                    <br />
                    75006 Paris, France
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-ieee-blue p-2 -m-2 touch-target"
                      aria-label="Follow us on Twitter"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-ieee-blue p-2 -m-2 touch-target"
                      aria-label="Follow us on LinkedIn"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
