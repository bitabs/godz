import type { Meta } from '@storybook/react'
import { CoreButton } from '../core.button'
import { Template } from './button.template'

export default {
  component: CoreButton,
  title: 'Button',
} as Meta

/** Primary */
export const Primary = Template.bind({})
Primary.args = {
  label: 'Testing',
}
