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

export interface CoreButtonPublicProps extends ButtonPublicProps {
  outlined?: boolean
  contained?: boolean
}

export type CoreButtonProps = CoreButtonPublicProps

export const CoreButton = withStyle<CoreButtonPublicProps, ButtonComponents>(
  Button /** Component we want to manipulate */,
  Styles /** The styles we want to aggregate */,
  'CoreButton' /** The name we want to apply */
)
