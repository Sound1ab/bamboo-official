import * as React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { colors, spacing, styled } from '../../../theme'
import { Close, Logo, ShoppingCart } from '../../atoms/SvgIcon'

const styles = {
  bmBurgerBars: {},
  bmBurgerButton: {},
  bmCross: {
    left: `${spacing.xs}px`,
    right: 'auto',
    top: `${spacing.xs}px`,
  },
  bmCrossButton: {
    left: `${spacing.xs}px`,
    right: 'auto',
    top: `${spacing.xs}px`,
  },
  bmItem: {
    boxShadow: 'inset 0 -2px 0px 0px rgba(255, 255, 255, 0.8)',
    padding: `${spacing.xs}px`,
    textAlign: 'center',
    width: '100%',
  },
  bmItemList: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  bmMenu: {
    background: colors.black,
    fontSize: '1.15em',
    padding: `${spacing.s * 5}px ${spacing.s * 3}px`,
  },
  bmMorphShape: {},
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const BaseButton = styled('button')`
  position: absolute;
  padding: 0 0 !important;
  box-shadow: inset 0 0 0 0 !important;
  display: inline-block !important;
  width: auto !important;
`

const CenterButton = styled(BaseButton)`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const RightButton = styled(BaseButton)`
  top: ${spacing.xs}px;
  right: ${spacing.xs}px;
`

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  width?: string
}

export const BurgerMenu = ({
  children,
  isOpen = false,
  width = '375px',
}: Props) => (
  <Menu
    styles={styles}
    width={width}
    isOpen={isOpen}
    customBurgerIcon={false}
    customCrossIcon={<Close fill={colors.white} width="28px" height="28px" />}
  >
    <CenterButton>
      <Logo fill={colors.white} width="60px" height="60px" />
    </CenterButton>
    <RightButton>
      <ShoppingCart fill={colors.white} width="22px" height="22px" />
    </RightButton>
    {children}
  </Menu>
)
