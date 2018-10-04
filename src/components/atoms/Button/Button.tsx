import * as React from 'react'
import { css, cx } from 'react-emotion'
import { colors, spacing, styled, typography } from '../../../theme'

const Primary = (doublePadding: boolean, marginBottom: boolean) => styled(
  'button',
)`
  background-color: ${({ theme }) => theme.colors.brand};
  color: white;
  margin-bottom: ${({ theme }) => (marginBottom ? theme.spacing.xs : 0)}px;
  padding: ${({ theme }) =>
    `${doublePadding ? theme.spacing.s : theme.spacing.xs}px ${spacing.m}`}px;
  text-transform: lowercase;
  min-width: ${({ theme }) => theme.spacing.m * 4}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const Secondary = css`
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

const Figure = css`
  font-family: ${typography.fontFamily.h3};
  font-size: ${typography.fontSize.p}px;
  padding: 0;
  min-width: 0;
  width: ${spacing.m}px;
  height: ${spacing.m}px;
`

interface PropTypes {
  children?: React.ReactNode
  type?: 'primary' | 'secondary' | 'number'
  doublePadding?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  marginBottom?: boolean
}

export const Button: React.SFC<PropTypes> = ({
  children = 'Button text',
  type = 'primary',
  doublePadding = false,
  marginBottom = false,
  onClick,
}) => {
  let component
  const PrimaryComponent = React.createElement(
    Primary(doublePadding, marginBottom),
    {
      onClick,
    },
    children,
  )
  switch (type) {
    case 'primary':
      component = PrimaryComponent
      break
    case 'secondary':
      component = React.cloneElement(PrimaryComponent, {
        className: Secondary,
      })
      break
    case 'number':
      component = React.cloneElement(PrimaryComponent, {
        className: cx(Secondary, Figure),
      })
      break
  }
  return component
}
