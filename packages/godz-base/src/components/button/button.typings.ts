import type { CompositionProps, StyleProps } from '@bitabs/godz-types'
import type { ButtonComponents } from './button.composition'

export interface ButtonPublicProps {
  /**
   * The id of the button
   */
  id?: string
  /**
   * True if the button is in disabled state,
   * false otherwise
   */
  disabled?: boolean
  /**
   * It prevents the user from clicking
   */
  readOnly?: boolean
  /**
   * -1 if the input is not keyboard accessible,
   * index in the sequential keyboard navigation
   * otherwise
   */
  tabIndex?: number
  /**
   * Element placed before the children
   */
  start?: React.ReactNode
  /**
   * Element placed after the children
   */
  end?: React.ReactNode
  /**
   * The content of the component
   */
  children?: React.ReactNode
  /**
   * Handler when the button is clicked
   */
  onClick?: (event: React.MouseEvent) => void
  /**
   * Handler when the button loses the focus.
   */
  onBlur?: (event: React.FocusEvent) => void
  /**
   * Handler when the button gets the focus.
   */
  onFocus?: (event: React.FocusEvent) => void
  /**
   * Handler when the button is hovered
   */
  onHover?: (event: React.MouseEvent) => void
  /**
   * Handler when the button is not hovered
   */
  onLeave?: (event: React.MouseEvent) => void
}

export interface ButtonProps
  // props exposed to outside
  extends ButtonPublicProps,
    // composition definition
    CompositionProps<ButtonComponents>,
    // style definition
    StyleProps {}

export interface ButtonCoreStyle {
  type: string
  hover: boolean
}
