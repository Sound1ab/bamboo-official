import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { colors } from '../../../theme'
import { Button, Heading } from '../../atoms'

storiesOf('Button', module)
  .add('Primary', () => {
    return (
      <React.Fragment>
        <Button type="primary" marginBottom>
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            Normal button
          </Heading>
        </Button>
        <Button type="primary" marginBottom>
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            A button with way too long text
          </Heading>
        </Button>
        <Button type="primary" marginBottom>
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            min width
          </Heading>
        </Button>
        <Button type="primary" doublePadding marginBottom>
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            double padding
          </Heading>
        </Button>
      </React.Fragment>
    )
  })
  .add('Secondary', () => {
    return (
      <React.Fragment>
        <Button type="secondary" marginBottom>
          <Heading type="h3" textTransform="lowercase">
            Normal button
          </Heading>
        </Button>
        <Button type="secondary" marginBottom>
          <Heading type="h3" textTransform="lowercase">
            A button with way too long text
          </Heading>
        </Button>
        <Button type="secondary" marginBottom>
          <Heading type="h3" textTransform="lowercase">
            min width
          </Heading>
        </Button>
      </React.Fragment>
    )
  })
  .add('Number', () => {
    return (
      <React.Fragment>
        <Button type="number" marginBottom>
          1
        </Button>
        <Button type="number" marginBottom>
          2
        </Button>
        <Button type="number" marginBottom>
          3
        </Button>
      </React.Fragment>
    )
  })
