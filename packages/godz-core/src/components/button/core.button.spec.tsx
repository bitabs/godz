import { render } from '@testing-library/react'
import { CoreButton } from './core.button'

describe('GodzCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreButton />)
    expect(baseElement).toBeTruthy()
  })
})
