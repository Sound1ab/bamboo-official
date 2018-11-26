import { graphql } from 'gatsby'
import * as React from 'react'

import { BasketItem, Button, Container, Heading } from '../components/atoms'
import * as Cart from '../components/atoms/Cart'
import { AllContentfulProduct } from '../interfaces/contentful'
import { Generic } from '../layouts'
import { styled } from '../theme'

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

interface Props {
  data: {
    allContentfulProduct: AllContentfulProduct
  }
}

const Basket = (props: Props) => (
  <Generic navbarIsSticky>
    <Container>
      <Heading type="h2" textTransform="lowercase" textAlign="center" marginBottom marginTop>
        Your Basket
      </Heading>
      <Cart.CartContext.Consumer>
        {({ cartItems, deleteFromCart, subtractFromCart, addToCart, cartTotal, checkout }) => (
          <React.Fragment>
            {cartItems.map(({ id, quantity }) => {
              const [item] = props.data.allContentfulProduct.edges.filter(
                contentfulProduct => contentfulProduct.node.id === id,
              )
              return (
                <BasketItem
                  key={item.node.id}
                  id={item.node.id}
                  price={item.node.price}
                  productName={item.node.productName.internal.content}
                  quantity={quantity}
                  slug={item.node.slug}
                  image={item.node.image[0].fluid}
                  onAdd={addToCart}
                  onSubtract={subtractFromCart}
                  onDelete={deleteFromCart}
                />
              )
            })}
            <PriceWrapper>
              <Heading type="h6">Total: £{cartTotal}</Heading>
            </PriceWrapper>
            <CheckoutWrapper>
              <Button onClick={checkout} type="secondary" doublePadding marginBottom>
                <Heading type="h4">check out</Heading>
              </Button>
            </CheckoutWrapper>
          </React.Fragment>
        )}
      </Cart.CartContext.Consumer>
    </Container>
  </Generic>
)

export const query = graphql`
  query BasketPageQuery {
    allContentfulProduct {
      ...allContentfulProduct
    }
  }
`

export default Basket
