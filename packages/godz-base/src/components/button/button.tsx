import React from 'react'
import {
  attachIf,
  isActionable,
  getAttributes,
  DataAttributesPrefix,
} from '@godz-base/utils'
import { ButtonProps } from './button.typings'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { id, styled, onFocus, onBlur, onHover, onLeave, ...rest } = props

    const { Root, Start, End } = styled

    const tabIndex = !isActionable(props) ? -1 : props.tabIndex

    const attach = (handler?: (e: any) => void) => {
      return attachIf(isActionable(props), handler)
    }

    const handleClick = (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()

      if (props.onClick) {
        props.onClick(event)
      }
    }

    const renderStart = () => {
      return props.start && <Start>{props.start}</Start>
    }

    const renderEnd = () => {
      return props.end && <End>{props.end}</End>
    }

    return (
      <Root
        ref={ref}
        id={props.id}
        tabIndex={tabIndex}
        onClick={attach(handleClick)}
        onFocus={attach(props.onFocus)}
        onBlur={attach(props.onBlur)}
        onMouseEnter={attach(props.onHover)}
        onMouseLeave={attach(props.onLeave)}
        {...getAttributes(props, DataAttributesPrefix)}
        {...rest}
      >
        {renderStart()}
        {props.children}
        {renderEnd()}
      </Root>
    )
  }
)

export default Button
