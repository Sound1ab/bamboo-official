import * as React from 'react'
import { css } from 'react-emotion'
import { FluidImage, Heading } from '../../atoms'
import { spacing } from '../../../theme'

interface Props {
  image: string
  headingLeft: string
  headingRight: string
}

export const Slide = ({ image, headingLeft, headingRight }: Props) => (
  <div
    className={css`
      width: 70%;
      margin: auto;
    `}
  >
    <FluidImage
      style={{
        width: '100%',
        height: spacing.xl * 3,
        margin: 'auto',
      }}
      image={image}
      title="product homepage banner"
      alt="product homepage banner"
    />
    <div
      className={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <Heading type="h4">{headingLeft}</Heading>
      <Heading type="h4">{headingRight}</Heading>
    </div>
  </div>
)
