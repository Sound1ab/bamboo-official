import * as React from 'react'
import { styled } from '../../../theme'

const StyledButton = styled('button')`
  padding: ${({ theme }) => theme.spacing.m}px;
  background-color: ${({ theme }) => theme.colors.brand};
  border: none;
  color: white;
`

interface PropTypes {
  children?: React.ReactNode
}

export const Button: React.SFC<PropTypes> = ({ children = 'Button text' }) => <StyledButton>{children}</StyledButton>
