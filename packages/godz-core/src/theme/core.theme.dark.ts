import { createTheme } from './core.theme.light'
import { dark } from './tokens'

export const darkMode = createTheme('dark-theme', {
  colors: dark.colors,
})
