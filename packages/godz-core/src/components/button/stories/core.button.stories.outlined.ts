import type { Meta } from '@storybook/react'
import { CoreButton, CoreButtonPublicProps } from '../core.button'
import { Template } from './core.button.template'

export default {
  component: CoreButton,
  title: 'components/@atoms/button/outlined',
  args: {
    children: 'Submit',
    outlined: true,
  } as Partial<CoreButtonPublicProps>,
} as Meta

/** Default */
export const Default = Template.bind({})
Default.args = {}

/** Disabled */
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
