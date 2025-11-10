/**
 * Form Security Utilities
 *
 * Provides client-side security features for forms:
 * - Rate limiting
 * - Honeypot validation
 * - Input sanitization
 */

/**
 * Rate limiter for form submissions
 * Prevents rapid form submissions from the same client
 */
class FormRateLimiter {
  private submissions: Map<string, number> = new Map()
  private readonly cooldown: number // milliseconds

  constructor(cooldownMs: number = 3000) {
    this.cooldown = cooldownMs
  }

  /**
   * Check if form submission is allowed
   * @param formId - Unique identifier for the form
   * @returns true if submission is allowed, false if rate limited
   */
  canSubmit(formId: string): boolean {
    const now = Date.now()
    const lastSubmission = this.submissions.get(formId)

    if (lastSubmission && now - lastSubmission < this.cooldown) {
      return false
    }

    return true
  }

  /**
   * Record a form submission
   * @param formId - Unique identifier for the form
   */
  recordSubmission(formId: string): void {
    this.submissions.set(formId, Date.now())

    // Clean up old entries after cooldown period
    setTimeout(() => {
      this.submissions.delete(formId)
    }, this.cooldown)
  }

  /**
   * Get remaining cooldown time
   * @param formId - Unique identifier for the form
   * @returns remaining cooldown in milliseconds, or 0 if no cooldown
   */
  getRemainingCooldown(formId: string): number {
    const now = Date.now()
    const lastSubmission = this.submissions.get(formId)

    if (!lastSubmission) return 0

    const elapsed = now - lastSubmission
    const remaining = this.cooldown - elapsed

    return remaining > 0 ? remaining : 0
  }
}

// Global rate limiter instance
export const formRateLimiter = new FormRateLimiter(3000) // 3 second cooldown

/**
 * Honeypot field validator
 * Honeypot fields are hidden from real users but visible to bots
 */
export interface HoneypotValidation {
  isValid: boolean
  message?: string
}

/**
 * Validate honeypot field
 * @param value - Value of the honeypot field
 * @returns validation result
 */
export function validateHoneypot(value: string): HoneypotValidation {
  // If honeypot field is filled, it's likely a bot
  if (value && value.trim() !== '') {
    return {
      isValid: false,
      message: 'Spam detected. Please try again.',
    }
  }

  return {
    isValid: true,
  }
}

/**
 * Sanitize user input to prevent XSS
 * @param input - User input string
 * @returns sanitized string
 */
export function sanitizeInput(input: string): string {
  // Basic XSS prevention - remove script tags and dangerous attributes
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '')
    .trim()
}

/**
 * Generate CSRF token (for future backend integration)
 * In a real implementation, this would be provided by the backend
 */
export function generateCSRFToken(): string {
  // Simple token generation - in production, get this from backend
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Validate email format
 * @param email - Email address to validate
 * @returns true if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Check if form data contains suspicious patterns
 * @param data - Form data object
 * @returns true if suspicious patterns detected
 */
export function hasSuspiciousContent(data: Record<string, unknown>): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<embed/i,
    /<object/i,
  ]

  const values = Object.values(data).filter((v) => typeof v === 'string')

  return values.some((value) => suspiciousPatterns.some((pattern) => pattern.test(value as string)))
}

/**
 * Hook for form rate limiting
 * @param formId - Unique identifier for the form
 * @param cooldown - Cooldown period in milliseconds (default: 3000)
 * @returns object with rate limiting functions
 */
export function useFormRateLimit(formId: string, cooldown: number = 3000) {
  const limiter = new FormRateLimiter(cooldown)

  return {
    canSubmit: () => limiter.canSubmit(formId),
    recordSubmission: () => limiter.recordSubmission(formId),
    getRemainingCooldown: () => limiter.getRemainingCooldown(formId),
  }
}
