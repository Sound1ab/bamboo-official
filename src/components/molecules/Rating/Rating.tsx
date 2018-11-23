import * as React from 'react'
import { css } from 'react-emotion'
import { spacing, styled } from '../../../theme'
import { Button, Heading, Lemon } from '../../atoms'
import { QuantityChooser } from '../../utility'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${spacing.xs}px;
  & * + * {
    padding-left: ${spacing.xxs}px;
  }
`

interface Prop {
  reviews?: { review: string; score: number }[]
  handleSubmitRating?: () => void
  ratings?: number
  max?: number
}

export const Rating = ({ reviews, handleSubmitRating, ratings, max = 5 }: Prop) => {
  return (
    <React.Fragment>
      <Heading type="h6" textTransform="lowercase" marginBottom>
        your rating:
      </Heading>
      <Wrapper>
        <QuantityChooser>
          {({ handleMouseEnter, handleMouseLeave, handleClick, pickColor }) =>
            Array(max)
              .fill(1, 0)
              .map((v, i) => (
                <button
                  className={css`
                    flex: 1 1;
                  `}
                  key={i}
                  onMouseEnter={handleMouseEnter.bind(this, i)}
                  onMouseLeave={handleMouseLeave.bind(this, null)}
                  onClick={handleClick.bind(this, i)}
                >
                  <Lemon fill={pickColor(i)} width="28px" height="28px" />
                </button>
              ))
          }
        </QuantityChooser>
        <Heading
          className={css`
            margin-left: ${spacing.s}px;
          `}
          type="h6"
          textTransform="lowercase"
          marginBottom
        >
          ({(reviews && reviews.length) || 0} ratings)
        </Heading>
      </Wrapper>
      <Button type="secondary" onClick={handleSubmitRating}>
        rate it
      </Button>
    </React.Fragment>
  )
}
