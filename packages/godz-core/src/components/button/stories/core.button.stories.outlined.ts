import type { Meta } from '@storybook/react'
import { CoreButton } from '../core.button'
import { Template } from './core.button.template'

export default {
  component: CoreButton,
  title: 'components/@atoms/button/outlined',
  args: {
    outlined: true,
  },
} as Meta

/** Default */
export const Default = Template.bind({})
Default.args = {
  label: 'Outlined',
}

/** Disabled */
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true,
}
