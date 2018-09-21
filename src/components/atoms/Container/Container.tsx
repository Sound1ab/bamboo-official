import * as React from 'react'
import { styled } from '../../../theme'

const Wrapper = styled('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 100%;
  background-color: pink;
  padding: ${({ theme }) => theme.spacing.m}px;
`

interface ContainerProps {
  children?: React.ReactNode
}

export const Container: React.SFC<ContainerProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)
