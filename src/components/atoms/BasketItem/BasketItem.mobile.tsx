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

const PriceChild = styled('div')`
  ${childBase};
  flex: 1 1;
  flex-direction: column;
  align-items: flex-end;
`

const QuantityChild = styled('div')`
  ${childBase};
  flex: 2 1;
  justify-content: flex-end;
  align-items: flex-end;
`

const headingBase = css`
  display: inline-flex;
`

const Add = styled(Heading)<{ onClick: (e: React.MouseEvent) => void }>`
  ${headingBase};
  margin-left: ${({ theme }) => theme.spacing.m}px;
`

const Subtract = styled(Heading)<{ onClick: (e: React.MouseEvent) => void }>`
  ${headingBase};
  margin-right: ${({ theme }) => theme.spacing.m}px;
`

const Delete = styled('a')`
  margin-top: auto;
`

interface Props {
  id?: string
  productName?: string
  price?: number
  slug?: string
  quantity?: number
  onAdd?: Cart.FullItem
  onSubtract?: Cart.FullItem
  onDelete?: Cart.PartialItem
  image?: any
}

interface State {
  isEditing: boolean
}

export class BasketItemMobile extends React.Component<Props, State> {
  public static defaultProps = {
    onAdd: (): null => null,
    onDelete: (): null => null,
    onSubtract: (): null => null,
    quantity: 0,
  }

  public state = {
    isEditing: false,
  }

  public render() {
    const { id, productName, price, quantity, onAdd, onSubtract, onDelete, slug, image } = this.props
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
          {this.state.isEditing && (
            <Delete href="javascript:" onClick={onDelete.bind(null, { id })}>
              delete
            </Delete>
          )}
        </DetailChild>
        <PriceChild>
          <Heading type="h6" marginBottom>
            £{`${price.toFixed(2)}`}
          </Heading>
          <a href="javascript:" onClick={this.toggleEdit()}>
            <span>{this.state.isEditing ? 'cancel' : 'edit'}</span>
          </a>
          {this.state.isEditing && (
            <QuantityChild>
              <Subtract type="h6" onClick={onSubtract.bind(null, { id, quantity: 1, price })} button>
                -
              </Subtract>
              <Heading type="h6">{quantity}</Heading>
              <Add type="h6" onClick={onAdd.bind(null, { id, quantity: 1, price })} button>
                +
              </Add>
            </QuantityChild>
          )}
        </PriceChild>
      </Wrapper>
    )
  }

  private toggleEdit() {
    return () => this.setState({ isEditing: !this.state.isEditing })
  }
}
