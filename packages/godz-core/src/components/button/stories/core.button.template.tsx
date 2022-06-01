import type { Story } from '@storybook/react'
import { CoreButton, CoreButtonProps } from '../core.button'

export const Start = () => <div>Hello</div>

export const Template: Story<CoreButtonProps> = (args) => (
  <CoreButton {...args} />
)
