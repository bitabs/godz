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
export const Default = Template.bind({})
Default.args = {}

/** Disabled */
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
