import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { css } from 'react-emotion'
import { styled } from '../../../theme'
import { Container } from '../../atoms'
import { NavBar } from './NavBar'

const LargeContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
  overflow: scroll;
`

const ScrollContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 1000px;
`

storiesOf('NavBar', module).add('Primary', () => {
  return (
    <LargeContainer>
      <NavBar />
      <Container
        className={css`
          background-color: white;
        `}
      >
        <ScrollContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sagittis diam vitae diam bibendum feugiat. Quisque mauris lacus,
            varius iaculis tempor eget, efficitur et felis. Aenean ac lectus
            felis. Vestibulum eget sollicitudin arcu. Integer eget arcu
            lobortis, hendrerit felis vel, posuere nulla. Maecenas molestie ante
            at sapien eleifend maximus. Maecenas lacinia arcu urna, et varius
            odio scelerisque id. Etiam viverra sapien felis, non volutpat sapien
            lobortis aliquet. Etiam vulputate, odio eget eleifend semper, felis
            nibh iaculis ipsum, nec dapibus libero lectus auctor nisl. Nullam
            tristique ante mauris, sit amet molestie quam accumsan euismod.{' '}
          </p>
        </ScrollContainer>
      </Container>
    </LargeContainer>
  )
})
