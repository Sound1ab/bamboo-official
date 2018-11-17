import * as React from 'react'
import styled, { css } from 'react-emotion'
import { spacing } from '../../../theme'

export const relative = css`
  position: relative;
`

export const scroll = css`
  overflow: scroll;
`

export const sticky = css`
  position: sticky;
  top: 0;
  z-index: 10;
`

export const fixed = css`
  position: fixed;
  top: 0;
  z-index: 10;
`

export const page = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 0 0;
  width: 90%;
`

export const Container = styled('section')<{
  textAlign?: string
  isContainerSticky?: boolean
  marginBottom?: boolean
}>`
  ${relative};
  ${page};
  ${({ textAlign = 'left' }) => `text-align: ${textAlign}`};
  ${({ isContainerSticky }) =>
    isContainerSticky && `padding-right: ${spacing.xl * 2 + spacing.s}px;`};
  ${({ marginBottom = false }) =>
    marginBottom && `margin-bottom: ${spacing.s}px`};
`

export const ImageTextContainer = ({
  firstChild,
  secondChild,
  marginBottom = false,
}: {
  firstChild: any
  secondChild: any
  marginBottom?: boolean
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
    <div>{firstChild}</div>
    <div
      className={css`
        margin-left: ${spacing.xs}px;
      `}
    >
      {secondChild}
    </div>
  </div>
)

export const StickyContainer = styled('div')`
  ${sticky};
`

export const ScrollContainer = styled('div')`
  ${relative};
  ${scroll};
`
