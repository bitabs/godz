import React, { forwardRef } from 'react'

type Component =
  | React.ComponentClass<any>
  | React.FunctionComponent<any>
  | React.ForwardRefExoticComponent<any>

type Name = string

type ReturnType<Props, Ctx> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props & Ctx> &
    React.PropsWithRef<unknown> & { className?: string }
>

export default function createComponent<Props, Style, Ctx = unknown>(
  Component: Component,
  Components: Style,
  name?: Name
): ReturnType<Props, Ctx> {
  const component = forwardRef<HTMLElement, Props & Ctx>((props: any, ref) => (
    <Component ref={ref} styled={Components} {...props} />
  ))

  component.displayName =
    name ||
    Component.displayName ||
    Object.getPrototypeOf(Component).constructor.name

  component.defaultProps = Component.defaultProps
  component.propTypes = Component.propTypes

  return component
}
