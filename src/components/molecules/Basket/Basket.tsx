import * as React from 'react'
import { styled } from '../../../theme'
import { BasketItem, Button, Container, Heading } from '../../atoms'

const PriceWrapper = styled('div')`
  padding: ${({ theme }) => theme.spacing.m}px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const CheckoutWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`

interface BasketItem {
  id: string
  productName: string
  price: number
  quantity: number
}

interface Props {
  basketItems: BasketItem[]
}

interface State {
  basket: BasketItem[]
}

export class Basket extends React.Component<Props, State> {
  public static defaultProps = {
    basketItems: [
      {
        id: '1234',
        price: 1.33,
        productName: 'test productName',
        quantity: 2,
      },
      {
        id: '999',
        price: 1.33,
        productName: 'test productName',
        quantity: 2,
      },
    ],
  }

  public state = {
    basket: this.props.basketItems,
  }

  public render() {
    return (
      <Container>
        <Heading
          type="h2"
          textTransform="lowercase"
          textAlign="center"
          marginBottom
        >
          Your Basket
        </Heading>
        {this.state.basket.map((item: BasketItem) => (
          <BasketItem
            key={item.productName}
            id={item.id}
            price={item.price}
            productName={item.productName}
            quantity={item.quantity}
            onAdd={this.add()}
            onSubtract={this.subtract()}
            onDelete={this.delete()}
          />
        ))}
        <PriceWrapper>
          <Heading type="h6" marginBottom>
            VAT: £5.56
          </Heading>
          <Heading type="h6">
            total incl. VAT: £{this.getTotal().toFixed(2)}
          </Heading>
        </PriceWrapper>
        <CheckoutWrapper>
          <Button type="secondary" doublePadding>
            <Heading type="h4">check out</Heading>
          </Button>
        </CheckoutWrapper>
      </Container>
    )
  }

  private getTotal() {
    const inflatedTotal = this.state.basket.reduce(
      (total, item) => total + item.price * item.quantity * 100,
      0,
    )
    return inflatedTotal / 100
  }

  private add() {
    return (id: string) => {
      const updatedBasket = this.state.basket.map(
        (item: BasketItem) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      )
      this.setState({
        basket: updatedBasket,
      })
    }
  }

  private subtract() {
    return (id: string) => {
      const updatedBasket = this.state.basket.map(
        (item: BasketItem) =>
          item.id === id
            ? { ...item, quantity: item.quantity === 0 ? 0 : item.quantity - 1 }
            : item,
      )
      this.setState({
        basket: updatedBasket,
      })
    }
  }

  private delete() {
    return (id: string) => {
      const updatedBasket = this.state.basket.filter(
        (item: BasketItem) => item.id !== id,
      )
      this.setState({
        basket: updatedBasket,
      })
    }
  }
}
