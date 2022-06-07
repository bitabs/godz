/**
 * @returns {import('@storybook/theming').Theme}
 */
export default function (opt = {}) {
  return {
    colorSecondary: '#8b5cf6',

    // UI
    appBg: 'white',
    appContentBg: 'white',

    // Typography
    fontBase: '"Raleway", sans-serif',
    fontCode: 'monospace',

    // Text colors
    // textColor: theme.palette.text.primary,
    // textInverseColor: theme.palette.text.secondary,

    // Toolbar default and active colors
    // barTextColor: theme.palette.text.secondary,
    // barSelectedColor: theme.palette.secondary.main,
    // barBg: theme.palette.background.default,

    // Form color
    // inputBg: 'transparent',
    // inputBorder: 'silver',
    // inputTextColor: theme.palette.text.primary,
    // inputBorderRadius: theme.shape.borderRadius,

    ...opt,
  }
}
