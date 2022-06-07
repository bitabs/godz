import { create } from '@storybook/theming'

export const createTheme = ({ theme, options = {}, asStorybookTheme = true }) =>
  asStorybookTheme ? create(theme(options)) : theme(options)
