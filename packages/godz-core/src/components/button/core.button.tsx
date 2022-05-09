// @packages: components
import {
  /** Types */
  Button,
  ButtonPublicProps,
  ButtonComponents,
  /** hooks */
  withStyle,
} from '@bitabs/godz-base'

// @styles
import Styles from './styles'

export type CoreButtonPublicProps = ButtonPublicProps
export type CoreButtonProps = CoreButtonPublicProps

export const CoreButton = withStyle<ButtonPublicProps, ButtonComponents>(
  Button /** Component we want to manipulate */,
  Styles /** The styles we want to aggregate */,
  'CoreButton' /** The name we want to apply */
)
