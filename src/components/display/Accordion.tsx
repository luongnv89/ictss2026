import { ReactNode, useState, createContext, useContext } from 'react'

interface AccordionContextType {
  openItems: Set<string>
  toggleItem: (id: string) => void
  type: 'single' | 'multiple'
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion compound components must be used within Accordion')
  }
  return context
}

interface AccordionProps {
  /**
   * Accordion content
   */
  children: ReactNode

  /**
   * Type of accordion (single: only one item open at a time, multiple: multiple items can be open)
   */
  type?: 'single' | 'multiple'

  /**
   * Default open items (array of item IDs)
   */
  defaultValue?: string[]

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Accordion component for collapsible content sections
 *
 * Features:
 * - Single or multiple open items
 * - Smooth animations
 * - Keyboard accessible
 * - Proper ARIA attributes
 * - Compound component pattern
 *
 * @example
 * ```tsx
 * <Accordion type="multiple" defaultValue={['item1']}>
 *   <AccordionItem value="item1">
 *     <AccordionTrigger>Question 1</AccordionTrigger>
 *     <AccordionContent>Answer 1</AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem value="item2">
 *     <AccordionTrigger>Question 2</AccordionTrigger>
 *     <AccordionContent>Answer 2</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export function Accordion({
  children,
  type = 'single',
  defaultValue = [],
  className = '',
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultValue))

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (type === 'single') {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={`divide-y divide-gray-200 border border-gray-200 rounded-lg ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemContextType {
  value: string
  isOpen: boolean
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined)

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error('AccordionTrigger and AccordionContent must be used within AccordionItem')
  }
  return context
}

interface AccordionItemProps {
  /**
   * Unique item ID
   */
  value: string

  /**
   * Item content (AccordionTrigger and AccordionContent)
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * AccordionItem component - individual accordion item
 */
export function AccordionItem({ value, children, className = '' }: AccordionItemProps) {
  const { openItems } = useAccordionContext()
  const isOpen = openItems.has(value)

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={`${className}`}>{children}</div>
    </AccordionItemContext.Provider>
  )
}

interface AccordionTriggerProps {
  /**
   * Trigger content
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * AccordionTrigger component - clickable header for accordion item
 */
export function AccordionTrigger({ children, className = '' }: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext()
  const { value, isOpen } = useAccordionItemContext()

  const triggerId = `accordion-trigger-${value}`
  const contentId = `accordion-content-${value}`

  return (
    <button
      type="button"
      id={triggerId}
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
      aria-controls={contentId}
      className={`
        flex justify-between items-center w-full
        px-4 py-3 text-left
        text-gray-900 font-medium
        hover:bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ieee-blue
        transition-colors
        ${className}
      `}
    >
      <span>{children}</span>
      <svg
        className={`h-5 w-5 text-gray-500 transform transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

interface AccordionContentProps {
  /**
   * Content to display
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * AccordionContent component - collapsible content area
 */
export function AccordionContent({ children, className = '' }: AccordionContentProps) {
  const { isOpen, value } = useAccordionItemContext()

  const contentId = `accordion-content-${value}`
  const triggerId = `accordion-trigger-${value}`

  if (!isOpen) {
    return null
  }

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={`px-4 py-3 text-gray-700 bg-gray-50 ${className}`}
    >
      {children}
    </div>
  )
}
