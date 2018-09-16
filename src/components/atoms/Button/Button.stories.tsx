import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Button } from './Button'

storiesOf('Button', module)
  .add('Primary', () => {
    return (
      <React.Fragment>
        <Button variant="primary">Normal button</Button>
        <Button variant="primary">A button with way too long text</Button>
        <Button variant="primary">min width</Button>
      </React.Fragment>
    )
  })
  .add('Secondary', () => {
    return (
      <React.Fragment>
        <Button variant="secondary">Normal button</Button>
        <Button variant="secondary">A button with way too long text</Button>
        <Button variant="secondary">min width</Button>
      </React.Fragment>
    )
  })
  .add('Number', () => {
    return (
      <React.Fragment>
        <Button variant="number">1</Button>
        <Button variant="number">2</Button>
        <Button variant="number">3</Button>
      </React.Fragment>
    )
  })
