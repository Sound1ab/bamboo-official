import * as React from 'react'
import { render, cleanup } from '../../../test-utils'
import { Button } from './Button'

afterEach(cleanup)

describe('Button', () => {
  it('should match a snapshot', () => {
    const test = render(<Button />)
    expect(test.baseElement).toMatchSnapshot()
  })
})
