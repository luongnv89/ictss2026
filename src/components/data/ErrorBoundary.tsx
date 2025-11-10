import { Component, ReactNode, ErrorInfo } from 'react'
import { Button } from '../ui'

interface ErrorBoundaryProps {
  /**
   * Child components to render
   */
  children: ReactNode

  /**
   * Custom fallback UI
   */
  fallback?: (error: Error, errorInfo: ErrorInfo, reset: () => void) => ReactNode

  /**
   * Callback when an error is caught
   */
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

/**
 * ErrorBoundary component for catching and handling React errors
 *
 * Features:
 * - Catches errors in child components
 * - Custom fallback UI
 * - Error reporting callback
 * - Reset functionality
 * - User-friendly error display
 *
 * @example
 * ```tsx
 * <ErrorBoundary
 *   onError={(error, errorInfo) => {
 *     console.error('Error caught:', error, errorInfo)
 *   }}
 * >
 *   <App />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo })

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  resetErrorBoundary = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render(): ReactNode {
    const { hasError, error, errorInfo } = this.state
    const { children, fallback } = this.props

    if (hasError && error) {
      // Use custom fallback if provided
      if (fallback && errorInfo) {
        return fallback(error, errorInfo, this.resetErrorBoundary)
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-600 text-center mb-6">
              We're sorry for the inconvenience. An error occurred while rendering this page.
            </p>

            {import.meta.env.DEV && error && (
              <details className="mb-4 p-4 bg-gray-50 rounded border border-gray-200">
                <summary className="cursor-pointer font-medium text-sm text-gray-700 mb-2">
                  Error Details
                </summary>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">Error:</p>
                    <pre className="text-xs text-red-600 overflow-x-auto">{error.toString()}</pre>
                  </div>
                  {errorInfo && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600">Component Stack:</p>
                      <pre className="text-xs text-gray-700 overflow-x-auto whitespace-pre-wrap">
                        {errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" onClick={this.resetErrorBoundary} className="flex-1">
                Try Again
              </Button>
              <Button variant="outline" onClick={() => window.location.reload()} className="flex-1">
                Reload Page
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return children
  }
}
