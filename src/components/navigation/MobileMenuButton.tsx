interface MobileMenuButtonProps {
  /**
   * Whether the mobile menu is open
   */
  isOpen: boolean

  /**
   * Callback when the button is clicked
   */
  onClick: () => void

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Mobile menu toggle button component
 *
 * Features:
 * - Hamburger/close icon animation
 * - Accessible button with proper ARIA labels
 * - Touch-friendly tap target
 * - Smooth icon transitions
 *
 * @example
 * ```tsx
 * <MobileMenuButton
 *   isOpen={mobileMenuOpen}
 *   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 * />
 * ```
 */
export function MobileMenuButton({ isOpen, onClick, className = '' }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className={`lg:hidden inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-ieee-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ieee-blue transition-colors touch-target ${className}`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      {/* Hamburger/Close Icon */}
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}
