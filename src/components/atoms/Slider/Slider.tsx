import Carousel from 'nuka-carousel'
import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../../../theme'
import { GalleryLeftButton, GalleryRightButton } from '../SvgIcon'

const Button = styled('button')`
  border: none;
  background-color: transparent;
  line-height: 0;
`

const LeftControls = ({ previousSlide }: { previousSlide: any }) => (
  <Button onClick={previousSlide}>
    <GalleryLeftButton fill={colors.black} width="50px" height="50px" />
  </Button>
)

const RightControls = ({ nextSlide }: { nextSlide: any }) => (
  <Button onClick={nextSlide}>
    <GalleryRightButton fill={colors.black} width="50px" height="50px" />
  </Button>
)

const BottomControls = () => <div />

export const Slider = () => (
  <Carousel
    wrapAround
    renderBottomCenterControls={BottomControls}
    renderCenterLeftControls={LeftControls}
    renderCenterRightControls={RightControls}
  >
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
  </Carousel>
)
