import { styled } from '@stitches/react'
import { render } from '@testing-library/react'

import Button from './button'

const Root = styled('button')

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button styled={{ Root }} />)
    expect(baseElement).toBeTruthy()
  })
})
