import type { Story } from '@storybook/react'
import { CoreButton, CoreButtonProps } from '../core.button'

export const Template: Story<CoreButtonProps> = (args) => (
  <CoreButton {...args} />
)
