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

const Add = styled(Heading)`
  ${headingBase};
  margin-left: ${({ theme }) => theme.spacing.m}px;
`

const Subtract = styled(Heading)`
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
  quantity?: number
  onAdd?: (id: string) => void
  onSubtract?: (id: string) => void
  onDelete?: (id: string) => void
}

interface State {
  isEditing: boolean
}

export class BasketItemMobile extends React.Component<Props, State> {
  public static defaultProps = {
    id: '1234',
    onAdd: (): null => null,
    onDelete: (): null => null,
    onSubtract: (): null => null,
    price: 0,
    productName: 'Product name',
    quantity: 0,
  }

  public state = {
    isEditing: false,
  }

  public render() {
    const {
      id,
      productName,
      price,
      quantity,
      onAdd,
      onSubtract,
      onDelete,
    } = this.props
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
          {this.state.isEditing && (
            <Delete href="javascript:" onClick={onDelete.bind(null, id)}>
              delete
            </Delete>
          )}
        </DetailChild>
        <PriceChild>
          <Heading type="h6" marginBottom>
            £{`${price.toFixed(2)}`}
          </Heading>
          <a href="javascript:" onClick={this.toggleEdit()}>
            {this.state.isEditing ? 'cancel' : 'edit'}
          </a>
          {this.state.isEditing && (
            <QuantityChild>
              <Subtract type="h6" onClick={onSubtract.bind(null, id)} button>
                -
              </Subtract>
              <Heading type="h6">{quantity}</Heading>
              <Add type="h6" onClick={onAdd.bind(null, id)} button>
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
