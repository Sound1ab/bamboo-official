import * as React from 'react'
import styled from 'react-emotion'
import { colors, spacing } from '../../../theme'
import { Button, Heading, StickyContainer } from '../../atoms'

const Wrapper = styled(StickyContainer)`
  max-width: ${spacing.xl * 2}px;
  padding: ${spacing.xs}px;
`

const ButtonWrapper = styled('div')`
  & * + * {
    margin-left: ${spacing.xxs}px;
  }
`

interface Prop {
  quantity?: number
}

export const StickyBuyer = ({ quantity = 5 }: Prop) => (
  <Wrapper>
    <Heading type="h2" marginBottom>
      Baam Boom Sauce
    </Heading>
    <Heading type="h4" marginBottom>
      £8.90
    </Heading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis
      diam vitae diam bibendum feugiat. Quisque mauris lacus, varius iaculis
      tempor eget, efficitur et felis. Aenean ac lectus felis. Vestibulum eget
      sollicitudin arcu. Integer eget arcu lobortis, hendrerit felis vel,
      posuere nulla.
    </p>
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
    <Button type="primary" doublePadding>
      <Heading type="h3" color={colors.white} textTransform="lowercase">
        Add to basket
      </Heading>
    </Button>
  </Wrapper>
)
