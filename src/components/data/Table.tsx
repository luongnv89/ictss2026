import { ReactNode, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react'

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /**
   * Table content
   */
  children: ReactNode

  /**
   * Whether to show striped rows
   */
  striped?: boolean

  /**
   * Whether to show hover effect on rows
   */
  hoverable?: boolean

  /**
   * Whether to add borders
   */
  bordered?: boolean

  /**
   * Table size
   */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Table component for displaying tabular data
 *
 * Features:
 * - Striped rows
 * - Hoverable rows
 * - Bordered cells
 * - Multiple sizes
 * - Responsive design (horizontal scroll on small screens)
 * - Semantic HTML
 *
 * @example
 * ```tsx
 * <Table striped hoverable>
 *   <TableHead>
 *     <TableRow>
 *       <TableHeader>Name</TableHeader>
 *       <TableHeader>Email</TableHeader>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export function Table({
  children,
  striped = false,
  hoverable = false,
  bordered = false,
  size = 'md',
  className = '',
  ...props
}: TableProps) {
  const sizeClasses = {
    sm: '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 text-sm',
    md: '[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3',
    lg: '[&_th]:px-6 [&_th]:py-4 [&_td]:px-6 [&_td]:py-4 text-lg',
  }

  return (
    <div className="overflow-x-auto">
      <table
        className={`
          w-full text-left
          ${sizeClasses[size]}
          ${bordered ? 'border border-gray-300' : ''}
          ${striped ? '[&_tbody_tr:nth-child(even)]:bg-gray-50' : ''}
          ${hoverable ? '[&_tbody_tr]:hover:bg-gray-100 [&_tbody_tr]:transition-colors' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}

/**
 * TableHead component
 */
export function TableHead({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={`bg-gray-50 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </thead>
  )
}

/**
 * TableBody component
 */
export function TableBody({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={`divide-y divide-gray-200 ${className}`} {...props}>
      {children}
    </tbody>
  )
}

/**
 * TableFooter component
 */
export function TableFooter({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot className={`bg-gray-50 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </tfoot>
  )
}

/**
 * TableRow component
 */
export function TableRow({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={className} {...props}>
      {children}
    </tr>
  )
}

/**
 * TableHeader component (th)
 */
export function TableHeader({
  children,
  className = '',
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className={`font-semibold text-gray-900 text-left ${className}`} {...props}>
      {children}
    </th>
  )
}

/**
 * TableCell component (td)
 */
export function TableCell({
  children,
  className = '',
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={`text-gray-700 ${className}`} {...props}>
      {children}
    </td>
  )
}
