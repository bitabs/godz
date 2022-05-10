import type { CSS } from '@stitches/react'

import { css, styled, theme } from '@theme'
import { disabled } from '@styles'

/** Base styles */
export const Base = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: '$default',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  color: theme.colors.slate500,
  padding: '$xxs $xs',

  variants: {
    disabled: {
      true: disabled,
    },
  },

  '&::-moz-focus-inner': {
    borderStyle: 'none', // Remove Firefox dotted outline.
  },

  '&:hover': {
    textDecoration: 'none',
    backgroundColor: theme.colors.slate100,
  },
})

/** Contained styles */
export const Contained: CSS = {
  color: theme.colors.white,
  backgroundColor: theme.colors.slate500,
  boxShadow:
    '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  transition: theme.transitions.all,

  '&:hover': {
    backgroundColor: theme.colors.slate600,
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
}

/** Outlined styles */
export const Outlined = {
  color: 'violet',
}

/** Default styles */
export const Styles = css(Base, {
  variants: {
    contained: {
      true: Contained,
    },
    outlined: {
      true: Outlined,
    },
  },
})

export const Root = styled('button', Styles)
