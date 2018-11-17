import * as React from 'react'
import styled from 'react-emotion'
import { colors, spacing } from '../../../theme'
import { Button, Heading, StickyContainer } from '../../atoms'
import { Rating } from '../index'

const Wrapper = styled(StickyContainer)<{ isStatic: boolean }>`
  max-width: ${spacing.xl * 2 + spacing.s}px;
  margin-bottom: ${spacing.xs}px;
  ${({ isStatic }) => isStatic && `position: relative`};
`

const ButtonWrapper = styled('div')`
  & * + * {
    margin-left: ${spacing.xxs}px;
  }
`

interface Prop {
  hasNoProductInformation?: boolean
  isStatic?: boolean
  quantity?: number
}

export const StickyBuyer = ({
  hasNoProductInformation = false,
  isStatic = false,
  quantity = 5,
}: Prop) => (
  <Wrapper isStatic={isStatic}>
    {!hasNoProductInformation && (
      <React.Fragment>
        <Heading type="h2" marginBottom>
          Baam Boom Sauce
        </Heading>
        <Heading type="h4" marginBottom>
          £8.90
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sagittis diam vitae diam bibendum feugiat. Quisque mauris lacus,
          varius iaculis tempor eget, efficitur et felis. Aenean ac lectus
          felis. Vestibulum eget sollicitudin arcu. Integer eget arcu lobortis,
          hendrerit felis vel, posuere nulla.
        </p>
      </React.Fragment>
    )}
    <Heading type="h6" marginBottom>
      quantity
    </Heading>
    <ButtonWrapper>
      {Array(quantity)
        .fill(1, 0)
        .map((_, i) => (
          <Button type="number" marginBottom>
            {i + 1}
          </Button>
        ))}
    </ButtonWrapper>
    <Button type="primary" doublePadding marginBottom>
      <Heading type="h3" color={colors.white} textTransform="lowercase">
        Add to basket
      </Heading>
    </Button>
    <Rating />
  </Wrapper>
)
