import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'react-emotion'
import { Heading } from '../Heading'
import { Slider } from './Slider'

const SubtextWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`

storiesOf('Slider', module).add('Primary', () => {
  return (
    <Slider>
      <div>
        <img
          width="100%"
          height="420px"
          src={require('../../../assets/images/ProductFour01.jpg')}
        />
        <SubtextWrapper>
          <Heading type="h4">Left hand heading</Heading>
          <Heading type="h4">Right hand heading</Heading>
        </SubtextWrapper>
      </div>

      <img
        width="100%"
        height="420px"
        src={require('../../../assets/images/ProductFour01.jpg')}
      />
      <img
        width="100%"
        height="420px"
        src={require('../../../assets/images/ProductFour01.jpg')}
      />
    </Slider>
  )
})
