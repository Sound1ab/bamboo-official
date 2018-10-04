import * as React from 'react'
import { css } from 'react-emotion'
import { colors, styled } from '../../../theme'
import { Heading, Logo, Menu, page, ShoppingCart, sticky } from '../../atoms'

const FlexContainer = styled('nav')`
  ${page};
  ${sticky};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const columnBase = css`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LeftColumn = styled('div')`
  ${columnBase};
  justify-content: flex-start;
`

const CenterColumn = styled('div')`
  ${columnBase};
  justify-content: center;
`

const RightColumn = styled('div')`
  ${columnBase};
  justify-content: flex-end;
  & * + * {
    margin-left: ${({ theme }) => theme.spacing.m}px;
  }
`

const MobileButton = styled('button')`
  display: none;
  @media (max-width: 420px) {
    display: block;
  }
`

const DesktopHeading = styled(Heading)`
  display: block;
  @media (max-width: 420px) {
    display: none;
  }
`

const LogoWrapper = styled('div')`
  width: 80px;
  height: 80px;
  @media (min-width: 420px) {
    width: 124px;
    height: 124px;
  }
`

interface Props {
  children?: (isMenuOpen: boolean, closeBurgerMenuClick: () => void) => void
}

interface State {
  isMenuOpen: boolean
}

export class NavBar extends React.Component<Props, State> {
  public state = {
    isMenuOpen: false,
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.children(this.state.isMenuOpen, this.closeBurgerMenuClick)}
        <FlexContainer>
          <LeftColumn>
            <MobileButton onClick={this.openBurgerMenuClick}>
              <Menu fill={colors.black} width={'28px'} height={'28px'} />
            </MobileButton>
            <DesktopHeading type="h4" textTransform="uppercase" button>
              Products
            </DesktopHeading>
          </LeftColumn>
          <CenterColumn>
            <LogoWrapper>
              <Logo fill={colors.black} />
            </LogoWrapper>
          </CenterColumn>
          <RightColumn>
            <DesktopHeading type="h4" textTransform="lowercase" button>
              find us
            </DesktopHeading>
            <button>
              <ShoppingCart fill={colors.black} width="28px" height="28px" />
            </button>
          </RightColumn>
        </FlexContainer>
      </React.Fragment>
    )
  }

  private openBurgerMenuClick = () => {
    this.setState({
      isMenuOpen: true,
    })
  }

  private closeBurgerMenuClick = () => {
    this.setState({
      isMenuOpen: false,
    })
  }
}
