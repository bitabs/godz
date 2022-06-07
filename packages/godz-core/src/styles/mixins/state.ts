import type { CSS } from '@theme'

/** Readonly */
export const readOnly: CSS = {
  cursor: 'default',
  userSelect: 'none',
  pointerEvents: 'none',
}

/** Base styles */
export const disabled: CSS = {
  ...readOnly,
  opacity: 0.3,
}
