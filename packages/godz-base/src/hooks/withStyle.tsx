import React, { forwardRef } from 'react'

export function withStyle<P, S, C = unknown>(
  Component:
    | React.ComponentClass<any>
    | React.FunctionComponent<any>
    | React.ForwardRefExoticComponent<any>,
  Components: S,
  name?: string
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P & C> &
    React.PropsWithRef<unknown> & { className?: string }
> {
  const component = forwardRef<HTMLElement, P & C>((props: any, ref) => (
    <Component ref={ref} {...props} styled={Components} />
  ))

  component.displayName =
    name ||
    Component.displayName ||
    Object.getPrototypeOf(Component).constructor.name

  component.defaultProps = Component.defaultProps
  component.propTypes = Component.propTypes

  return component
}
