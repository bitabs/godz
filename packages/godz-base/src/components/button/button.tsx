import React, { forwardRef, Ref } from 'react'
import {
  attachIf,
  isActionable,
  getAttributes,
  DataAttributesPrefix,
} from '@godz-base/utils'
import { ButtonProps } from './button.typings'

export const Button = forwardRef(
  (props: ButtonProps, forwardRef: Ref<HTMLButtonElement>) => {
    const { id, onFocus, onBlur, onHover, onLeave, ...rest } = props

    // components
    const { Root } = props.styled

    const tabIndex = !isActionable(props) ? -1 : props.tabIndex

    const attach = (handler?: (e: any) => void) =>
      attachIf(isActionable(props), handler)

    const handleClick = (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()

      if (props.onClick) {
        props.onClick(event)
      }
    }

    const renderLabel = () => {
      return props.label
    }

    return (
      <Root
        ref={forwardRef}
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
        {renderLabel()}
      </Root>
    )
  }
)

export default Button
