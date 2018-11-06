import * as React from 'react'
import styled, { css } from 'react-emotion'

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

export const Container = styled('section')`
  ${relative};
  ${page};
`

export const StickyContainer = styled('div')`
  ${sticky};
`

export const ScrollContainer = styled('div')`
  ${relative};
  ${scroll};
`
