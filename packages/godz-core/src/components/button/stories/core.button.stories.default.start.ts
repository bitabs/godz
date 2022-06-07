import type { Meta } from '@storybook/react'
import { CoreButton } from '../core.button'
import { Template } from './core.button.template'

export default {
  component: CoreButton,
  title: 'components/@atoms/button/default',
  args: {
    children: 'Submit',
  },
} as Meta

/** Default */
export const Start = Template.bind({})
Start.args = {
  start: 'Hello',
}
