import * as React from 'react'
import { styled } from '../../../theme'

export const Container = styled('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 90%;
  padding: ${({ theme }) => theme.spacing.xs}px 0;
`
