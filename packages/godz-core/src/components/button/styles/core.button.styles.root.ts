import { css, styled, darkMode, CSS } from '@theme'
import { disabled } from '@styles'
import { Root } from '../composition'

const base = css({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  boxSizing: 'border-box',
  color: 'inherit',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  margin: 0,
  MozAppearance: 'none',
  outline: 0,
  padding: 0,
  position: 'relative',
  textDecoration: 'none',
  userSelect: 'none',
  verticalAlign: 'middle',
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',

  '&::-moz-focus-inner': {
    borderStyle: 'none', // Remove Firefox dotted outline.
  },
})

const light: CSS = {
  '&:hover': {
    textDecoration: 'none',
    color: `$text--primary--light`,
    backgroundColor: `$sla600`,
  },

  '&:active': {
    backgroundColor: 'red',
  },
}

const dark: CSS = {
  '&:hover': {
    backgroundColor: '$white',
    color: `$text--primary--dark`,
  },

  '&:active': {
    backgroundColor: 'green',
  },
}

function variants() {
  const contained: CSS = {
    color: `$white`,
    backgroundColor: `$sla500`,
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    transition: '$all',

    '&:hover': {
      backgroundColor: `$sla600`,
      boxShadow:
        '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
  }

  const outlined: CSS = {
    padding: '$xxs $lg',
    border: `1px solid currentColor`,

    '&:hover': {
      backgroundColor: '$sla100',
      color: `$text--primary--main`,
      borderColor: '$sla500',
    },
  }

  return {
    contained: {
      true: contained,
    },
    outlined: {
      true: outlined,
    },
    disabled: {
      true: disabled,
    },
  }
}

const styles = css(base, {
  minWidth: 64,
  borderRadius: `$default`,
  padding: `$xs $md`,
  color: `$text--primary--main`,

  // variants
  variants: variants(),

  // light mode styles
  ...light,

  // dark mode styles
  [`.${darkMode} &`]: dark,
})

export default styled(Root, styles)
