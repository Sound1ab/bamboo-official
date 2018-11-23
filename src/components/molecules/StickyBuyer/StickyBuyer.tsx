import * as React from 'react'
import styled from 'react-emotion'
import { colors, spacing } from '../../../theme'
import { Button, CartContext, Heading, StickyContainer } from '../../atoms'
import { QuantityChooser } from '../../utility'
import { Rating } from '../index'

const Wrapper = styled(StickyContainer)<{ isStatic: boolean }>`
  max-width: ${spacing.xl * 2 + spacing.s}px;
  margin-bottom: ${spacing.xs}px;
  ${({ isStatic }) => isStatic && `position: relative`};
`

const ButtonWrapper = styled('div')`
  & * + * {
    padding-left: ${spacing.xxs}px;
  }
`

interface Prop {
  reviews?: { review: string; score: number }[]
  heading: string
  productId: string
  description: string
  price: number
  hasNoProductInformation?: boolean
  isStatic?: boolean
}

export const StickyBuyer = ({
  reviews,
  heading,
  description,
  productId,
  price,
  hasNoProductInformation = false,
  isStatic = false,
}: Prop) => (
  <Wrapper isStatic={isStatic}>
    {!hasNoProductInformation && (
      <React.Fragment>
        <Heading type="h2" marginBottom>
          {heading}
        </Heading>
        <Heading type="h4" marginBottom>
          £{price}
        </Heading>
        <p>{description}</p>
      </React.Fragment>
    )}
    <Heading type="h6" marginBottom>
      quantity
    </Heading>
    <QuantityChooser>
      {({ handleMouseEnter, handleMouseLeave, handleClick, pickColor, selectedValue }) => (
        <React.Fragment>
          <ButtonWrapper>
            {Array(5)
              .fill(1, 0)
              .map((_, i) => (
                <span
                  key={i}
                  onMouseEnter={handleMouseEnter.bind(this, i)}
                  onMouseLeave={handleMouseLeave.bind(this, null)}
                  onClick={handleClick.bind(this, i)}
                >
                  <Button
                    type="number"
                    marginBottom
                    fill={pickColor(i, 'black', 'black', 'transparent')}
                    color={pickColor(i, 'white', 'white', 'black')}
                  >
                    {i + 1}
                  </Button>
                </span>
              ))}
          </ButtonWrapper>
          <CartContext.Consumer>
            {({ replaceInCart }) => (
              <Button
                onClick={replaceInCart.bind(null, {
                  id: productId,
                  price,
                  quantity: selectedValue + 1,
                })}
                type="primary"
                doublePadding
                marginBottom
              >
                <Heading type="h3" color={colors.white} textTransform="lowercase">
                  Add to basket
                </Heading>
              </Button>
            )}
          </CartContext.Consumer>
        </React.Fragment>
      )}
    </QuantityChooser>
    <Rating reviews={reviews} />
  </Wrapper>
)
