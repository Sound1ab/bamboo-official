import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Slider } from './Slider'

storiesOf('Slider', module).add('Primary', () => {
  return (
    <React.Fragment>
      <Slider />
    </React.Fragment>
  )
})
