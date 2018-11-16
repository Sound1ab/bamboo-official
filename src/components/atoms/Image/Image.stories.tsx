import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FluidImage } from './FluidImage'

storiesOf('Fluid image', module).add('All', () => {
  return (
    <FluidImage
      style={{ width: '100%', height: '560px' }}
      image="bambooproductcover2"
      title="product homepage banner"
      alt="product homepage banner"
    />
  )
})
