import { ReactNode, useEffect, useRef, HTMLAttributes } from 'react'

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean

  /**
   * Callback when the modal should close
   */
  onClose: () => void

  /**
   * Modal content
   */
  children: ReactNode

  /**
   * Modal size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'

  /**
   * Whether clicking the backdrop closes the modal
   */
  closeOnBackdropClick?: boolean

  /**
   * Whether pressing Escape closes the modal
   */
  closeOnEscape?: boolean

  /**
   * Additional CSS classes for the modal content
   */
  className?: string
}

/**
 * Modal component for dialogs and overlays
 *
 * Features:
 * - Multiple sizes
 * - Backdrop click to close
 * - Escape key to close
 * - Focus trap
 * - Scroll lock
 * - Accessible with proper ARIA labels
 * - Smooth animations
 *
 * @example
 * ```tsx
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
 *   <ModalHeader>
 *     <ModalTitle>Modal Title</ModalTitle>
 *   </ModalHeader>
 *   <ModalBody>
 *     Modal content goes here
 *   </ModalBody>
 *   <ModalFooter>
 *     <Button onClick={() => setIsOpen(false)}>Close</Button>
 *   </ModalFooter>
 * </Modal>
 * ```
 */
export function Modal({
  isOpen,
  onClose,
  children,
  size = 'md',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = '',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    if (!isOpen) return

    const modal = modalRef.current
    if (!modal) return

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus()
          event.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus()
          event.preventDefault()
        }
      }
    }

    modal.addEventListener('keydown', handleTab)
    firstElement?.focus()

    return () => {
      modal.removeEventListener('keydown', handleTab)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={`
          w-full ${sizeClasses[size]}
          bg-white rounded-lg shadow-xl
          animate-fade-in
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * ModalHeader component
 */
export function ModalHeader({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * ModalTitle component
 */
export function ModalTitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 id="modal-title" className={`text-xl font-bold text-gray-900 ${className}`} {...props}>
      {children}
    </h2>
  )
}

/**
 * ModalBody component
 */
export function ModalBody({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * ModalFooter component
 */
export function ModalFooter({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 flex justify-end space-x-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
