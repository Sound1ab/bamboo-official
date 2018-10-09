import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { BasketItem } from '../../atoms'

storiesOf('BasketItem', module).add('Primary', () => {
  return (
    <React.Fragment>
      <BasketItem />
      <BasketItem />
    </React.Fragment>
  )
})
