import { Element } from '@bitabs/godz-types'
import { ButtonPublicProps } from './button.typings'

export interface ButtonComponents {
  Root: Element<'button', ButtonPublicProps>
  Start: Element<'div'>
  End: Element<'div'>
}
