import type * as Stitches from '@stitches/react'
import type {
  CssComponent,
  StyledComponent,
} from '@stitches/react/types/styled-component'
import { ForwardRefExoticComponent } from 'react'

export interface StyleProps {
  className?: string
}

// export type Element<
//   // The Component from whose props are derived
//   C extends keyof JSX.IntrinsicElements
// > = StyledComponent<C | CssComponent<C>, MotionProps, any, any>

export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements

export type Element<E extends IntrinsicElementsKeys, P = any> = StyledComponent<
  ForwardRefExoticComponent<any> | CssComponent<E>,
  P | any,
  any,
  any
>

export interface CompositionProps<C = Record<string, unknown>> {
  styled?: C
}

export type Component<
  // The Component from whose props are derived
  C extends Stitches.ComponentProps<unknown>,
  // The other props added by the template
  O extends object = Record<string, unknown>,
  // The props that are made optional by .attrs
  A extends keyof unknown = never
> = StyledComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<C> & React.RefAttributes<any>
  >,
  O & StyleProps,
  A
>
