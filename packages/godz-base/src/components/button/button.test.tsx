import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import * as mock from './button.mock'
import Button from './button'

afterEach(cleanup)

function renderButton<T extends HTMLElement = HTMLElement>(Component: any) {
  const { props } = Component

  const propsWithTestId = {
    ...props,
    'data-testid': 'button',
    styled: mock.Context,
  }

  const result = render(React.cloneElement(Component, propsWithTestId))

  return {
    ...result,
    button: screen.queryByTestId('button') as T,
    start: screen.queryByTestId('button-start'),
    icon: screen.queryByTestId('button-icon'),
  }
}

describe('Button', () => {
  it('should render successfully', () => {
    const { button, start } = renderButton(<Button />)
    expect(button).not.toBeNull()
    expect(start).toBeNull()
  })
  it('should render successfully', () => {
    const Test = () => <div />
    const { start } = renderButton(<Button start={<Test />} />)
    expect(start).not.toBeNull()
  })
})
