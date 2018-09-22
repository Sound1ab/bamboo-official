import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Heading } from './Heading'

storiesOf('Heading', module).add('All', () => {
  return (
    <React.Fragment>
      <Heading>Heading 1</Heading>
      <Heading type="h2" marginBottom>
        Heading 2
      </Heading>
      <Heading type="h3" marginBottom>
        Heading 3
      </Heading>
      <Heading type="h4" marginBottom>
        Heading 4
      </Heading>
      <Heading type="h5" marginBottom>
        Heading 5
      </Heading>
      <Heading type="h6" marginBottom>
        Heading 6
      </Heading>
    </React.Fragment>
  )
})
