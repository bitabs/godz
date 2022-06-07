import * as Stitches from '@stitches/react'
import { light } from './tokens'

/** theme entrypoint */
export const {
  styled,
  css,
  theme: lightMode,
  createTheme,
  config,
} = Stitches.createStitches({
  /** defines different view-ports */
  media: light.media,

  theme: {
    /** colors palette */
    colors: light.colors,

    /** spaces */
    space: light.spaces,

    /** typography */
    fonts: light.typography.types,
    fontSizes: light.typography.sizes,
    fontWeights: light.typography.weights,

    /** line heights */
    lineHeights: light.lineHeights,

    /** border */
    borderWidths: light.border.sizes,
    borderStyles: light.border.styles,

    /** letter spacings */
    letterSpacings: light.letterSpacings,

    /** sizes */
    sizes: light.sizes,

    /** radius sizes */
    radii: light.radius.sizes,

    /** shadows */
    shadows: light.shadows,

    /** z-indexes */
    zIndices: light.zIndex.sizes,

    /** transitions */
    transitions: light.transitions,

    /** opacity */
    opacity: light.opacity.states,
  },
})

export type CSS = Stitches.CSS<typeof config>
