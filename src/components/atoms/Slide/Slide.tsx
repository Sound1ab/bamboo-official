import * as React from 'react'
import { css } from 'react-emotion'
import { spacing } from '../../../theme'
import { FluidImage, Heading } from '../../atoms'

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
        height: spacing.xl * 3,
        margin: 'auto',
        width: '100%',
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
