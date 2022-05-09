import type { CompositionProps, StyleProps } from '@bitabs/godz-types'
import type { ButtonComponents } from './button.composition'

export interface ButtonPublicProps {
  /**
   * The id of the button
   */
  id?: string
  /**
   * The label of the button
   */
  label?: string
  /**
   * Handler when the button is clicked
   */
  onClick?: (event: React.MouseEvent) => void
  /**
   * Handler when the button loses the focus.
   */
  onBlur?: (event: React.FocusEvent) => void
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
