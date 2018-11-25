import { Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import { css } from 'react-emotion'
import { styled } from '../../../theme'
import * as Cart from '../Cart'
import { Heading } from '../Heading'

const Wrapper = styled('div')`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s}px 0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.75);
  & div + div {
    margin-left: ${({ theme }) => theme.spacing.xs}px;
  }
`

const childBase = css`
  display: flex;
`

const ImageChild = styled('div')`
  ${childBase};
  flex: 0 1 auto;
`

const ImagePlaceholder = styled('div')`
  position: relative;
  width: ${({ theme }) => theme.spacing.l}px;
  height: ${({ theme }) => theme.spacing.m * 3}px;
  background-color: white;
`

const DetailChild = styled('div')`
  ${childBase};
  flex: 3 1;
  flex-direction: column;
`

const QuantityChild = styled('div')`
  ${childBase};
  flex: 2 1;
  flex-direction: row;
  align-items: flex-start;
`

const PriceChild = styled('div')`
  ${childBase};
  flex: 1 1;
  justify-content: flex-end;
`

const Add = styled(Heading)`
  margin-left: ${({ theme }) => theme.spacing.m}px;
`

const Subtract = styled(Heading)`
  margin-right: ${({ theme }) => theme.spacing.m}px;
`

interface Props {
  id?: string
  productName?: string
  slug?: string
  price?: number
  quantity?: number
  onAdd?: Cart.FullItem
  onSubtract?: Cart.FullItem
  onDelete?: Cart.PartialItem
  image?: any
}

export const BasketItemDesktop = ({
  id,
  onAdd = (): null => null,
  onSubtract = (): null => null,
  productName,
  price,
  quantity = 0,
  slug,
  image,
}: Props) => {
  return (
    <Wrapper>
      <ImageChild>
        <ImagePlaceholder>
          <Img fluid={image} style={{ width: '100%', height: '100%' }} imgStyle={{ objectFit: 'contain' }} />
        </ImagePlaceholder>
      </ImageChild>
      <DetailChild>
        <Link to={`/products/${slug}`}>
          <Heading type="h6" marginBottom>
            {productName}
          </Heading>
        </Link>
        <p>{`(x${quantity})`}</p>
      </DetailChild>
      <QuantityChild>
        <Subtract type="h6" onClick={onSubtract.bind(null, { id, quantity: 1, price })} button>
          -
        </Subtract>
        <Heading type="h6">{quantity}</Heading>
        <Add type="h6" onClick={onAdd.bind(null, { id, quantity: 1, price })} button>
          +
        </Add>
      </QuantityChild>
      <PriceChild>
        <Heading type="h6">£{`${price.toFixed(2)}`}</Heading>
      </PriceChild>
    </Wrapper>
  )
}
