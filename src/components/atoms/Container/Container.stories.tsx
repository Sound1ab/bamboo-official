import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { styled } from '../../../theme'
import { Container, ScrollContainer, StickyContainer } from './Container'

const LargeContainer = styled('div')`
  width: 100%;
  height: 1000px;
`

storiesOf('Container', module)
  .add('Primary', () => (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis diam vitae diam bibendum feugiat.
        Quisque mauris lacus, varius iaculis tempor eget, efficitur et felis. Aenean ac lectus felis. Vestibulum eget
        sollicitudin arcu. Integer eget arcu lobortis, hendrerit felis vel, posuere nulla. Maecenas molestie ante at
        sapien eleifend maximus. Maecenas lacinia arcu urna, et varius odio scelerisque id. Etiam viverra sapien felis,
        non volutpat sapien lobortis aliquet. Etiam vulputate, odio eget eleifend semper, felis nibh iaculis ipsum, nec
        dapibus libero lectus auctor nisl. Nullam tristique ante mauris, sit amet molestie quam accumsan euismod.
      </p>
    </Container>
  ))
  .add('ScrollContainer', () => (
    <ScrollContainer>
      <Container>
        <LargeContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis diam vitae diam bibendum feugiat.
            Quisque mauris lacus, varius iaculis tempor eget, efficitur et felis. Aenean ac lectus felis. Vestibulum
            eget sollicitudin arcu. Integer eget arcu lobortis, hendrerit felis vel, posuere nulla. Maecenas molestie
            ante at sapien eleifend maximus. Maecenas lacinia arcu urna, et varius odio scelerisque id. Etiam viverra
            sapien felis, non volutpat sapien lobortis aliquet. Etiam vulputate, odio eget eleifend semper, felis nibh
            iaculis ipsum, nec dapibus libero lectus auctor nisl. Nullam tristique ante mauris, sit amet molestie quam
            accumsan euismod.{' '}
          </p>
        </LargeContainer>
      </Container>
    </ScrollContainer>
  ))
  .add('StickyContainer', () => (
    <ScrollContainer>
      <Container>
        <StickyContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis diam vitae diam bibendum feugiat.
            Quisque mauris lacus, varius iaculis tempor eget, efficitur et felis. Aenean ac lectus felis. Vestibulum
            eget sollicitudin arcu. Integer eget arcu lobortis, hendrerit felis vel, posuere nulla. Maecenas molestie
            ante at sapien eleifend maximus. Maecenas lacinia arcu urna, et varius odio scelerisque id. Etiam viverra
            sapien felis, non volutpat sapien lobortis aliquet. Etiam vulputate, odio eget eleifend semper, felis nibh
            iaculis ipsum, nec dapibus libero lectus auctor nisl. Nullam tristique ante mauris, sit amet molestie quam
            accumsan euismod.{' '}
          </p>
        </StickyContainer>
        <LargeContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis diam vitae diam bibendum feugiat.
            Quisque mauris lacus, varius iaculis tempor eget, efficitur et felis. Aenean ac lectus felis. Vestibulum
            eget sollicitudin arcu. Integer eget arcu lobortis, hendrerit felis vel, posuere nulla. Maecenas molestie
            ante at sapien eleifend maximus. Maecenas lacinia arcu urna, et varius odio scelerisque id. Etiam viverra
            sapien felis, non volutpat sapien lobortis aliquet. Etiam vulputate, odio eget eleifend semper, felis nibh
            iaculis ipsum, nec dapibus libero lectus auctor nisl. Nullam tristique ante mauris, sit amet molestie quam
            accumsan euismod.{' '}
          </p>
        </LargeContainer>
      </Container>
    </ScrollContainer>
  ))
