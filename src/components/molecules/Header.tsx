import * as React from 'react'
import styled from 'react-emotion'
import { transparentize } from 'polished'
import { Link } from 'gatsby'
import { Container } from '../atoms'

const StyledHeader = styled.header`
  height: 200px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => transparentize(0.5, theme.colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

export const HomepageLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

export const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)
