import * as React from 'react'
import { styled } from '../../../theme'

const Base = styled('button')`
  font-family: ${({ theme }) => theme.typography.fontFamily.h3};
  font-size: ${({ theme }) => theme.typography.fontSize.h3}px;
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.m}px`};
  text-transform: lowercase;
  min-width: ${({ theme }) => theme.spacing.l * 3}px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`

const Primary = styled(Base)`
  background-color: ${({ theme }) => theme.colors.brand};
  border: none;
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const Secondary = styled(Base)`
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.75);
  border: none;
  color: white;
  &:hover {
    background-color: transparent;
    color: black;
  }
`

const Figure = styled(Secondary)`
  font-family: ${({ theme }) => theme.typography.fontFamily.h3};
  font-size: ${({ theme }) => theme.typography.fontSize.p}px;
  padding: 0;
  min-width: 0;
  width: ${({ theme }) => theme.spacing.m}px;
  height: ${({ theme }) => theme.spacing.m}px;
`

interface PropTypes {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'number'
}

export const Button: React.SFC<PropTypes> = ({ children = 'Button text', variant = 'primary' }) => {
  let component
  switch (variant) {
    case 'primary':
      component = <Primary>{children}</Primary>
      break
    case 'secondary':
      component = <Secondary>{children}</Secondary>
      break
    case 'number':
      component = <Figure>{children}</Figure>
      break
  }
  return component
}
