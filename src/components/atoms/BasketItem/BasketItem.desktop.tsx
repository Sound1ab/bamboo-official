import * as React from 'react'
import { css } from 'react-emotion'
import { styled } from '../../../theme'
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
  background-color: lightgray;
`

const DetailChild = styled('div')`
  ${childBase};
  flex: 3 1;
  flex-direction: column;
`

const QuantityChild = styled('div')`
  ${childBase};
  flex: 2 1;
`

const PriceChild = styled('div')`
  ${childBase};
  flex: 1 1;
  justify-content: flex-end;
`

const headingBase = css`
  display: inline-flex;
`

const Add = styled(Heading)`
  ${headingBase};
  margin-left: ${({ theme }) => theme.spacing.m}px;
`

const Subtract = styled(Heading)`
  ${headingBase};
  margin-right: ${({ theme }) => theme.spacing.m}px;
`

interface Props {
  id?: string
  productName?: string
  price?: number
  quantity?: number
  onAdd?: (id: string) => void
  onSubtract?: (id: string) => void
  onDelete?: (id: string) => void
}

export const BasketItemDesktop = ({
  id = '1234',
  productName = 'Product name',
  price = 0.0,
  quantity = 0,
  onAdd = (): null => null,
  onSubtract = (): null => null,
}: Props) => {
  return (
    <Wrapper>
      <ImageChild>
        <ImagePlaceholder />
      </ImageChild>
      <DetailChild>
        <Heading type="h6" marginBottom>
          {productName}
        </Heading>
        <p>{`(x${quantity})`}</p>
      </DetailChild>
      <QuantityChild>
        <Subtract type="h6" onClick={onSubtract.bind(null, id)} button>
          -
        </Subtract>
        <Heading type="h6">{quantity}</Heading>
        <Add type="h6" onClick={onAdd.bind(null, id)} button>
          +
        </Add>
      </QuantityChild>
      <PriceChild>
        <Heading type="h6">£{`${price.toFixed(2)}`}</Heading>
      </PriceChild>
    </Wrapper>
  )
}
