import * as React from 'react'

import { Svg } from './Svg.styles'

interface PropTypes {
  fill: string
  width: string
  height: string
}

export const Menu = (props: PropTypes) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </Svg>
)
