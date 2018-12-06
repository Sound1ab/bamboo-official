import * as React from 'react'

import { colors, spacing, styled } from '../../../theme'

const Primary = styled('button')<{ marginBottom: boolean; doublePadding: boolean }>`
  background-color: ${({ theme }) => theme.colors.brand};
  color: white;
  margin-bottom: ${({ theme, marginBottom }) => (marginBottom ? theme.spacing.xs : 0)}px;
  padding: ${({ theme, doublePadding }) => `${doublePadding ? theme.spacing.s : theme.spacing.xs}px ${spacing.m}`}px;
  text-transform: lowercase;
  min-width: ${({ theme }) => theme.spacing.m * 4}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const Secondary = styled(Primary)`
  box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.75);
  background-color: transparent;
  color: black;
  & * {
    color: black;
  }
  &:hover {
    background-color: ${colors.black};
    color: white;
    & * {
      color: white;
    }
  }
`

const Figure = styled(Secondary)<{ backgroundColor: string; color: string }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.h3};
  font-size: ${({ theme }) => theme.typography.fontSize.p}px;
  padding: 0;
  min-width: 0;
  width: ${({ theme }) => theme.spacing.m}px;
  height: ${({ theme }) => theme.spacing.m}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`

interface PropTypes {
  children?: React.ReactNode
  type?: 'primary' | 'secondary' | 'number'
  doublePadding?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  marginBottom?: boolean
  fill?: string
  color?: string
}

export const Button: React.SFC<PropTypes> = ({
  children = 'Button text',
  type = 'primary',
  doublePadding = false,
  marginBottom = false,
  onClick,
  fill,
  color,
}) => {
  let component
  switch (type) {
    case 'primary':
      component = (
        <Primary doublePadding={doublePadding} marginBottom={marginBottom} onClick={onClick}>
          {children}
        </Primary>
      )
      break
    case 'secondary':
      component = (
        <Secondary doublePadding={doublePadding} marginBottom={marginBottom} onClick={onClick}>
          {children}
        </Secondary>
      )
      break
    case 'number':
      component = (
        <Figure
          doublePadding={doublePadding}
          marginBottom={marginBottom}
          onClick={onClick}
          backgroundColor={fill ? fill : 'transparent'}
          color={color}
        >
          {children}
        </Figure>
      )
  }
  return component
}
