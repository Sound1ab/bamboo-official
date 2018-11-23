import Img from 'gatsby-image'
import * as React from 'react'
import { css } from 'react-emotion'
import { Heading } from '../Heading'

interface Props {
  image: any
  headingLeft: string
  headingRight: string
}

const resizeEvent = () => {
  window.dispatchEvent(new Event('resize'))
}

export const Slide = ({ image, headingLeft, headingRight }: Props) => (
  <div
    className={css`
      width: 70%;
      margin: auto;
    `}
  >
    <Img fluid={image} onLoad={resizeEvent} />
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
