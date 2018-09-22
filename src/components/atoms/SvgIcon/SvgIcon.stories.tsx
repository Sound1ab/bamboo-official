import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { colors } from '../../../theme'
import {
  Beatroot,
  Cat,
  CatWithStick,
  ChopstickSushi,
  Close,
  Crumbs,
  Crumbs2,
  Crumbs3,
  Facebook,
  GalleryLeftButton,
  GalleryRightButton,
  Grapefruit,
  Instagram,
  Kaleidoscope,
  KaleidoscopeWithLogo,
  Leaf,
  Lemon,
  Logo,
  Menu,
  Pie,
  Prawn,
  Ricebowl,
  Shell,
  ShoppingCart,
  Strawberry,
  Twitter,
} from '../../atoms'

storiesOf('SvgIcon', module)
  .add('Brand', () => (
    <React.Fragment>
      <Cat fill={colors.black} width="50px" height="50px" />
      <CatWithStick fill={colors.black} width="50px" height="50px" />
      <Logo fill={colors.black} width="50px" height="50px" />
    </React.Fragment>
  ))
  .add('Social', () => (
    <React.Fragment>
      <Facebook fill={colors.black} width="50px" height="50px" />
      <Instagram fill={colors.black} width="50px" height="50px" />
      <Twitter fill={colors.black} width="50px" height="50px" />
    </React.Fragment>
  ))
  .add('UI', () => (
    <React.Fragment>
      <Close fill={colors.black} width="50px" height="50px" />
      <Menu fill={colors.black} width="50px" height="50px" />
      <ShoppingCart fill={colors.black} width="50px" height="50px" />
    </React.Fragment>
  ))
  .add('Gallery', () => (
    <React.Fragment>
      <GalleryRightButton fill={colors.black} width="50px" height="50px" />
      <GalleryLeftButton fill={colors.black} width="50px" height="50px" />
    </React.Fragment>
  ))
  .add('Homepage', () => (
    <React.Fragment>
      <Kaleidoscope fill={colors.black} width="50px" height="50px" />
      <KaleidoscopeWithLogo fill={colors.black} width="50px" height="50px" />
    </React.Fragment>
  ))
  .add('Other', () => (
    <React.Fragment>
      <Beatroot fill={colors.black} width="50px" height="50px" />
      <ChopstickSushi fill={colors.black} width="50px" height="50px" />
      <Crumbs fill={colors.black} width="50px" height="50px" />
      <Crumbs2 fill={colors.black} width="50px" height="50px" />
      <Crumbs3 fill={colors.black} width="50px" height="50px" />
      <Grapefruit fill={colors.black} width="50px" height="50px" />
      <Leaf fill={colors.black} width="50px" height="50px" />
      <Lemon fill={colors.black} width="50px" height="50px" />
      <Pie fill={colors.black} width="50px" height="50px" />
      <Prawn fill={colors.black} width="50px" height="50px" />
      <Ricebowl fill={colors.black} width="50px" height="50px" />
      <Shell fill={colors.black} width="50px" height="50px" />
      <Strawberry fill={colors.black} width="50px" height="50px" />
    </React.Fragment>
  ))
