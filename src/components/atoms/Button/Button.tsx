import * as React from 'react'
import { styled } from '../../../theme'

const Base = styled('button')`
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.m}px`};
  text-transform: lowercase;
  min-width: ${({ theme }) => theme.spacing.m * 4}px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`

const Primary = styled(Base)`
  background-color: ${({ theme }) => theme.colors.brand};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const Secondary = styled(Base)`
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.75);
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
  type?: 'primary' | 'secondary' | 'number'
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const Button: React.SFC<PropTypes> = ({
  children = 'Button text',
  type = 'primary',
  onClick,
}) => {
  let component
  switch (type) {
    case 'primary':
      component = <Primary onClick={onClick}>{children}</Primary>
      break
    case 'secondary':
      component = <Secondary onClick={onClick}>{children}</Secondary>
      break
    case 'number':
      component = <Figure onClick={onClick}>{children}</Figure>
      break
  }
  return component
}
