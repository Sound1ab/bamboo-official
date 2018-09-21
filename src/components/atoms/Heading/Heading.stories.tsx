import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Heading } from './Heading'

storiesOf('Heading', module).add('All', () => {
  return (
    <React.Fragment>
      <Heading>Heading 1</Heading>
      <Heading type="h2">Heading 1</Heading>
      <Heading type="h3">Heading 1</Heading>
      <Heading type="h4">Heading 1</Heading>
      <Heading type="h5">Heading 1</Heading>
      <Heading type="h6">Heading 1</Heading>
    </React.Fragment>
  )
})
