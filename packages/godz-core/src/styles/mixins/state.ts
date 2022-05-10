import { CSS } from '@stitches/react'
import { css, theme } from '@theme'

/** Readonly */
export const readOnly: CSS = {
  cursor: 'default',
  userSelect: 'none',
  pointerEvents: 'none',
}

/** Base styles */
export const disabled: CSS = {
  ...readOnly,
  opacity: theme.opacity.disabled,
}
