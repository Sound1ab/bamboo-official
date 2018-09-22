import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { colors, styled } from '../../../theme'
import { Heading } from '../../atoms'
import { BurgerMenu } from './BurgerMenu'

const LargeContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
`

const close = (): null => null

storiesOf('BurgerMenu', module).add('Primary', () => {
  return (
    <LargeContainer>
      <BurgerMenu isOpen={true} close={close}>
        <div>
          <Heading
            type="h6"
            color={colors.white}
            textTransform="uppercase"
            button
          >
            Find us
          </Heading>
        </div>
        <div>
          <Heading
            type="h6"
            color={colors.white}
            textTransform="uppercase"
            button
          >
            Products
          </Heading>
        </div>
        <div>
          <Heading
            type="h6"
            color={colors.white}
            textTransform="uppercase"
            button
          >
            Restaurant
          </Heading>
        </div>
      </BurgerMenu>
    </LargeContainer>
  )
})
