interface PaginationProps {
  /**
   * Current page (1-indexed)
   */
  currentPage: number

  /**
   * Total number of pages
   */
  totalPages: number

  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void

  /**
   * Number of page buttons to show (excluding first, last, and ellipsis)
   */
  siblingCount?: number

  /**
   * Whether to show first/last page buttons
   */
  showFirstLast?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Pagination component for navigating through pages
 *
 * Features:
 * - Previous/Next navigation
 * - Direct page selection
 * - First/Last page buttons
 * - Ellipsis for large page counts
 * - Accessible with keyboard navigation
 * - Responsive design
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={totalPages}
 *   onPageChange={(page) => setCurrentPage(page)}
 *   siblingCount={1}
 *   showFirstLast
 * />
 * ```
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  className = '',
}: PaginationProps) {
  // Generate array of page numbers to display
  const generatePageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = []

    // Always show first page
    pages.push(1)

    // Calculate range around current page
    const leftSibling = Math.max(2, currentPage - siblingCount)
    const rightSibling = Math.min(totalPages - 1, currentPage + siblingCount)

    // Add left ellipsis if needed
    if (leftSibling > 2) {
      pages.push('ellipsis')
    }

    // Add pages around current page
    for (let i = leftSibling; i <= rightSibling; i++) {
      pages.push(i)
    }

    // Add right ellipsis if needed
    if (rightSibling < totalPages - 1) {
      pages.push('ellipsis')
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pages = generatePageNumbers()
  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
  }

  const buttonClass = (isActive: boolean = false, isDisabled: boolean = false) => `
    px-3 py-2 text-sm font-medium rounded-md
    transition-colors
    ${
      isActive
        ? 'bg-ieee-blue text-white'
        : isDisabled
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-gray-700 hover:bg-gray-100'
    }
    focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:ring-offset-2
  `

  return (
    <nav
      className={`flex items-center justify-center space-x-1 ${className}`}
      aria-label="Pagination"
    >
      {/* First Page Button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageChange(1)}
          disabled={!canGoPrevious}
          className={buttonClass(false, !canGoPrevious)}
          aria-label="Go to first page"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        className={buttonClass(false, !canGoPrevious)}
        aria-label="Go to previous page"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400" aria-hidden="true">
              ...
            </span>
          )
        }

        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={buttonClass(page === currentPage)}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      })}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!canGoNext}
        className={buttonClass(false, !canGoNext)}
        aria-label="Go to next page"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Last Page Button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={!canGoNext}
          className={buttonClass(false, !canGoNext)}
          aria-label="Go to last page"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </nav>
  )
}
