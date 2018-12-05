import { Link } from 'gatsby'
import * as React from 'react'
import { css } from 'react-emotion'

import { FindUs } from '../../../modals'
import { colors, styled } from '../../../theme'
import { fixed, Heading, Logo, Menu, Modal, page, ShoppingCart, sticky } from '../../atoms'
import * as Cart from '../../atoms/Cart'
import { StickyCat } from '../../molecules'

const FlexContainer = styled('nav')<{ isSticky: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  ${page};
  ${({ isSticky }) => (isSticky ? sticky : fixed)};
  z-index: 11;
`

const columnBase = css`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  & * {
    transition: all 1s ease-in-out;
  }
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
  isLight?: boolean
  isSticky?: boolean
  floatingCatText?: string[]
  activeElementIndex?: number
}

interface State {
  isMenuOpen: boolean
}

export class NavBar extends React.Component<Props, State> {
  public static defaultProps = {
    isLight: false,
    isSticky: false,
  }

  public state = {
    isMenuOpen: false,
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.children(this.state.isMenuOpen, this.closeBurgerMenuClick)}
        <FlexContainer isSticky={this.props.isSticky}>
          <LeftColumn>
            {this.props.floatingCatText && (
              <StickyCat
                activeElementIndex={this.props.activeElementIndex}
                text={this.props.floatingCatText}
                color={this.props.isLight ? colors.white : colors.black}
              />
            )}
            <MobileButton onClick={this.openBurgerMenuClick}>
              <Menu fill={this.props.isLight ? colors.white : colors.black} width={'28px'} height={'28px'} />
            </MobileButton>
            <Link to="/products/">
              <DesktopHeading
                type="h4"
                textTransform="uppercase"
                color={this.props.isLight ? colors.white : colors.black}
              >
                Products
              </DesktopHeading>
            </Link>
          </LeftColumn>
          <CenterColumn>
            <LogoWrapper>
              <Logo fill={this.props.isLight ? colors.white : colors.black} />
            </LogoWrapper>
          </CenterColumn>
          <RightColumn>
            <Modal modalChildren={<FindUs />}>
              {open => (
                <button onClick={open}>
                  <DesktopHeading
                    type="h4"
                    textTransform="lowercase"
                    color={this.props.isLight ? colors.white : colors.black}
                  >
                    find us
                  </DesktopHeading>
                </button>
              )}
            </Modal>
            <Cart.CartContext.Consumer>
              {({ numberOfItemsInCart }) => (
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  <Link to="/basket/">
                    <button>
                      <ShoppingCart
                        fill={this.props.isLight ? colors.white : colors.black}
                        width="28px"
                        height="28px"
                      />
                    </button>
                  </Link>
                  <span
                    className={css`
                      position: absolute;
                      top: 0;
                      left: 0;
                      color: ${this.props.isLight ? colors.white : colors.black};
                    `}
                  >
                    {numberOfItemsInCart ? numberOfItemsInCart : ''}
                  </span>
                </div>
              )}
            </Cart.CartContext.Consumer>
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
