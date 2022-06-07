import { addDecorator } from '@storybook/react'
import { themes } from '@storybook/theming'
import { light, dark } from './theme'
import { WithTheme } from '../src/providers'

addDecorator((story) => <WithTheme>{story()}</WithTheme>)

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, ...dark() },
    // Override the default light theme
    light: { ...themes.normal, ...light() },
  },
}
