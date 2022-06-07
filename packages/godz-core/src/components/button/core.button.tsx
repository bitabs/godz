// @core
import * as Base from '@bitabs/godz-base'

// @styles
import styles from './styles'

export interface CoreButtonPublicProps extends Base.ButtonPublicProps {
  outlined?: boolean
  contained?: boolean
}

export type CoreButtonProps = CoreButtonPublicProps

export const CoreButton = Base.createComponent<
  CoreButtonPublicProps,
  Base.ButtonComponents
>(
  Base.Button /** Actual component */,
  styles /** Main styles */,
  'CoreButton' /** Name of the component */
)
