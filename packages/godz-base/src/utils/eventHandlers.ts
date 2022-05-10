interface IsActionable {
  disabled?: boolean
  readOnly?: boolean
}

interface HandleEvent {
  onClick?: (e: React.MouseEvent) => void
  onHover?: (e: React.MouseEvent) => void
  onLeave?: (e: React.MouseEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
}

export const attachIf = (condition: boolean, callback?: (e: any) => void) => {
  return condition ? callback : undefined
}

/**
 * Determine if the input is input-able or not
 * @param formControl form control context
 * @returns {boolean} True the input is input-able
 *                    False the input is not input-able
 */
export const isActionable = (props: IsActionable) => {
  return !props.disabled && !props.readOnly
}

export const handleClick =
  (props: HandleEvent) => (event: React.MouseEvent) => {
    const { onClick } = props

    if (onClick) onClick(event)
  }

export const handleHover =
  (props: HandleEvent) => (event: React.MouseEvent) => {
    const { onHover } = props

    if (onHover) onHover(event)
  }

export const handleLeave =
  (props: HandleEvent) => (event: React.MouseEvent) => {
    const { onLeave } = props

    if (onLeave) onLeave(event)
  }

export const handleFocus =
  (props: HandleEvent) => (event: React.FocusEvent) => {
    const { onFocus } = props

    if (onFocus) onFocus(event)
  }

export const handleBlur = (props: HandleEvent) => (event: React.FocusEvent) => {
  const { onBlur } = props

  if (onBlur) onBlur(event)
}

export const handlers = (props: HandleEvent & IsActionable) => {
  const actionable = isActionable(props)

  return {
    handleClick: attachIf(actionable, handleClick(props)),
    handleHover: attachIf(actionable, handleHover(props)),
    handleLeave: attachIf(actionable, handleLeave(props)),
    handleFocus: attachIf(actionable, handleFocus(props)),
    handleBlur: attachIf(actionable, handleBlur(props)),
  }
}
