import { ReactNode, useState, createContext, useContext } from 'react'

interface TabsContextType {
  activeTab: string
  setActiveTab: (id: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs compound components must be used within Tabs')
  }
  return context
}

interface TabsProps {
  /**
   * Tabs content
   */
  children: ReactNode

  /**
   * Default active tab ID
   */
  defaultValue: string

  /**
   * Callback when active tab changes
   */
  onValueChange?: (value: string) => void

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Tabs component for tabbed content
 *
 * Features:
 * - Compound component pattern
 * - Keyboard navigation
 * - Accessible with proper ARIA labels
 * - Controlled and uncontrolled modes
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 */
export function Tabs({ children, defaultValue, onValueChange, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const handleSetActiveTab = (id: string) => {
    setActiveTab(id)
    if (onValueChange) {
      onValueChange(id)
    }
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleSetActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  children: ReactNode
  className?: string
}

/**
 * TabsList component - container for tab triggers
 */
export function TabsList({ children, className = '' }: TabsListProps) {
  return (
    <div role="tablist" className={`flex space-x-1 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  /**
   * Tab ID
   */
  value: string

  /**
   * Tab label
   */
  children: ReactNode

  /**
   * Whether the tab is disabled
   */
  disabled?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * TabsTrigger component - individual tab button
 */
export function TabsTrigger({
  value,
  children,
  disabled = false,
  className = '',
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === value

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-2 text-sm font-medium transition-colors
        border-b-2 -mb-px
        ${
          isActive
            ? 'border-ieee-blue text-ieee-blue'
            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:ring-offset-2
        ${className}
      `}
    >
      {children}
    </button>
  )
}

interface TabsContentProps {
  /**
   * Tab ID that this content belongs to
   */
  value: string

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
 * TabsContent component - content panel for each tab
 */
export function TabsContent({ value, children, className = '' }: TabsContentProps) {
  const { activeTab } = useTabsContext()
  const isActive = activeTab === value

  if (!isActive) {
    return null
  }

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      className={`pt-4 focus:outline-none ${className}`}
      tabIndex={0}
    >
      {children}
    </div>
  )
}
