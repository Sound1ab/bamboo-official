import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { BasketItem } from '../../atoms'

const item = {
  id: 'test',
  price: 1.23,
  productName: 'test',
  slug: 'test',
}

storiesOf('BasketItem', module).add('Primary', () => {
  return (
    <React.Fragment>
      <BasketItem id={item.id} price={item.price} productName={item.productName} slug={item.slug} />
      <BasketItem id={item.id} price={item.price} productName={item.productName} slug={item.slug} />
    </React.Fragment>
  )
})
