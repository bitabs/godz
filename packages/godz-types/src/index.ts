import type { ComponentProps } from '@stitches/react'
import type {
  CssComponent,
  StyledComponent,
} from '@stitches/react/types/styled-component'
import React from 'react'

export interface StyleProps {
  className?: string
}

export type Element<
  // The Component from whose props are derived
  C extends keyof JSX.IntrinsicElements
> = StyledComponent<C | CssComponent<C>, any, any, any>

export interface CompositionProps<C = Record<string, unknown>> {
  styled: C
}

export type Component<
  // The Component from whose props are derived
  C extends ComponentProps<unknown>,
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
