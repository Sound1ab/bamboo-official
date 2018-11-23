import * as React from 'react'
import { BasketItemDesktop, BasketItemMobile } from '../../atoms'
import { MediaQuery } from '../../utility'
import * as Cart from '../Cart'

interface Props {
  id: string
  productName: string
  price: number
  slug: string
  quantity?: number
  onAdd?: Cart.FullItem
  onSubtract?: Cart.FullItem
  onDelete?: Cart.PartialItem
}

export const BasketItem = ({
  id,
  onAdd = (): null => null,
  quantity = 0,
  onDelete = (): null => null,
  onSubtract = (): null => null,
  price,
  productName,
  slug,
}: Props) => {
  return (
    <MediaQuery>
      {(_, isMatchMedia) =>
        React.createElement(isMatchMedia ? BasketItemMobile : BasketItemDesktop, {
          id,
          onAdd,
          onDelete,
          onSubtract,
          price,
          productName,
          quantity,
          slug,
        })
      }
    </MediaQuery>
  )
}
