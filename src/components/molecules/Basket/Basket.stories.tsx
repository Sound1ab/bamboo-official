import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Basket } from './Basket'

storiesOf('Basket', module).add('Primary', () => {
  return (
    <React.Fragment>
      <Basket />
    </React.Fragment>
  )
})
