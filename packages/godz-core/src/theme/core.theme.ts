import { createStitches } from '@stitches/react'

export const { styled, css, theme } = createStitches({
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      white: 'white',

      /** Cyan */
      neutral50: '#fafafa',
      neutral100: '#f5f5f5',
      neutral200: '#e5e5e5',
      neutral300: '#d4d4d4',
      neutral400: '#a3a3a3',
      neutral500: '#737373',
      neutral600: '#525252',
      neutral700: '#404040',
      neutral800: '#262626',
      neutral900: '#171717',

      /** Cyan */
      cyan50: '#ecfeff',
      cyan100: '#cffafe',
      cyan200: '#a5f3fc',
      cyan300: '#67e8f9',
      cyan400: '#22d3ee',
      cyan500: '#06b6d4',
      cyan600: '#0891b2',
      cyan700: '#0e7490',
      cyan800: '#155e75',
      cyan900: '#164e63',

      /** Slate */
      slate50: '#f8fafc',
      slate100: '#f1f5f9',
      slate200: '#e2e8f0',
      slate300: '#cbd5e1',
      slate400: '#94a3b8',
      slate500: '#64748b',
      slate600: '#475569',
      slate700: '#334155',
      slate800: '#1e293b',
      slate900: '#0f172a',
    },
    space: {
      xxs: '4px',
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '40px',
      xxxl: '48px',
      xxxxl: '56px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      /** Pixels: 0px */
      0: '0px',
      /** Pixels: 1px */
      px: '1px',
      /** Pixels: 2px */
      0.5: '0.125rem',
      /** Pixels: 4px */
      1: '0.25rem',
      /** Pixels: 6px */
      1.5: '0.375rem',
      /** Pixels: 8px */
      2: '0.5rem',
      /** Pixels: 10px */
      2.5: '0.625rem',
      /** Pixels: 12px */
      3: '0.75rem',
      screen: '100vh',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      /** Pixels: 0px */
      none: '0px',
      /** Pixels: 2px */
      sm: '0.125rem',
      /** Pixels: 4px */
      default: '0.25rem',
      /** Pixels: 6px */
      md: '0.375rem',
      /** Pixels: 8px */
      lg: '0.5rem',
      /** Pixels: 12px */
      xl: '0.75rem',
      /** Pixels: 16px */
      '2xl': '1rem',
      /** Pixels: 24px */
      '3xl': '1.5rem',
      /** Pixels: 9999px */
      full: '9999px',
    },
    shadows: {
      /** Box Shadow */
      'shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'shadow-md':
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'shadow-lg':
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'shadow-xl':
        '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      'shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      'shadow-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      'shadow-none': '0 0 #0000',
    },
    zIndices: {},
    transitions: {
      none: 'none',
      all: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
    },
    opacity: {
      disabled: 0.3,
    },
  },
})
