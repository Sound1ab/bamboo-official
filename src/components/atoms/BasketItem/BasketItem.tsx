import * as React from 'react'
import { BasketItemDesktop, BasketItemMobile } from '../../atoms'
import { MediaQuery } from '../../utility'

interface Props {
  id?: string
  productName?: string
  price?: number
  quantity?: number
  onAdd?: (id: string) => void
  onSubtract?: (id: string) => void
  onDelete?: (id: string) => void
}

export const BasketItem = ({
  productName = 'Product name',
  id = '1234',
  price = 0.0,
  quantity = 0,
  onAdd = (): null => null,
  onSubtract = (): null => null,
  onDelete = (): null => null,
}: Props) => {
  return (
    <MediaQuery>
      {(_, isMatchMedia) =>
        React.createElement(
          isMatchMedia ? BasketItemMobile : BasketItemDesktop,
          { id, productName, price, quantity, onAdd, onSubtract, onDelete },
        )
      }
    </MediaQuery>
  )
}
