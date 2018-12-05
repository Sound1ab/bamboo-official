import * as React from 'react'
import { css } from 'react-emotion'

import { spacing } from '../../../theme'

const firstChildElement = ({ firstChild }: { firstChild: any }) => <div key="firstChild">{firstChild}</div>
const secondChildElement = ({ secondChild }: { secondChild: any }) => (
  <div
    key="secondChild"
    className={css`
      margin-left: ${spacing.xs}px;
    `}
  >
    {secondChild}
  </div>
)

export const ImageTextContainer = ({
  firstChild,
  secondChild,
  marginBottom = false,
  reverse = false,
}: {
  firstChild: any
  secondChild: any
  marginBottom?: boolean
  reverse?: boolean
}) => (
  <div
    className={css`
      display: flex;
      justify-content: space-around;
      align-items: stretch;
      ${marginBottom && `margin-bottom: ${spacing.s}px`};
      & > div {
        flex: 1 1;
      }
    `}
  >
    {reverse
      ? [firstChildElement({ firstChild }), secondChildElement({ secondChild })]
      : [secondChildElement({ secondChild }), firstChildElement({ firstChild })]}
  </div>
)
