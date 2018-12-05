import * as React from 'react'
import styled from 'react-emotion'

import { padding } from '../../../theme'
import { Container } from './Container'

export const HomepageContainer = styled(Container)`
  padding: ${padding.xxl.vertical}px ${padding.xxl.horizontal}px;
  @media (max-width: 800px) {
    padding: ${padding.m.vertical}px ${padding.m.horizontal}px;
  }
  @media (max-width: 400px) {
    padding: ${padding.s.vertical}px ${padding.s.horizontal}px;
  }
`
