/**
 * @returns {import('@storybook/theming').Theme}
 */
export default function (opt = {}) {
  return {
    colorPrimary: '#8b5cf6',
    colorSecondary: '#219EBC',

    // UI
    appBg: '#111020',
    appContentBg: '#212133',
    appBorderColor: '#20202f',

    // Typography
    fontBase: '"Raleway", sans-serif',
    fontCode: 'monospace',

    // Text colors
    // textColor: theme.palette.text.primary,
    // textInverseColor: theme.palette.text.secondary,

    // Toolbar default and active colors
    barTextColor: '#6a6a89',
    barSelectedColor: '#8b5cf6',
    barBg: '#2d2d41',

    // Form color
    inputBg: '#2d2d41',
    inputBorder: '#20202f',
    inputTextColor: '#6a6a89',
    // inputBorderRadius: theme.shape.borderRadius,

    ...opt,
  }
}
