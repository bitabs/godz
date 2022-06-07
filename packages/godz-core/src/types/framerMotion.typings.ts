import type { ReactHTML } from 'react'
import type { ForwardRefComponent, HTMLMotionProps } from 'framer-motion'
import type {
  CssComponent,
  StyledComponent,
} from '@stitches/react/types/styled-component'

// export type FramerElement<
//   E extends HTMLElement,
//   P extends keyof ReactHTML
// > = StyledComponent<
//   ForwardRefComponent<E, HTMLMotionProps<P>> | CssComponent<P>,
//   any,
//   any,
//   any
// >

export type FramerElement = StyledComponent<any, any, any, any>
