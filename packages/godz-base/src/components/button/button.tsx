import { forwardRef, Ref } from 'react'
import { ButtonProps } from './button.typings'

export const Button = forwardRef(
  (props: ButtonProps, forwardRef: Ref<HTMLButtonElement>) => {
    const { Root } = props.styled

    const renderLabel = () => {
      return props.label
    }

    return (
      <Root ref={forwardRef} id={props.id}>
        {renderLabel()}
      </Root>
    )
  }
)

export default Button
