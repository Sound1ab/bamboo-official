import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { colors } from '../../../theme'
import { Button, Heading } from '../../atoms'

storiesOf('Button', module)
  .add('Primary', () => {
    return (
      <React.Fragment>
        <Button type="primary">
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            Normal button
          </Heading>
        </Button>
        <Button type="primary">
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            A button with way too long text
          </Heading>
        </Button>
        <Button type="primary">
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            min width
          </Heading>
        </Button>
      </React.Fragment>
    )
  })
  .add('Secondary', () => {
    return (
      <React.Fragment>
        <Button type="secondary">
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            Normal button
          </Heading>
        </Button>
        <Button type="secondary">
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            A button with way too long text
          </Heading>
        </Button>
        <Button type="secondary">
          <Heading type="h3" color={colors.white} textTransform="lowercase">
            min width
          </Heading>
        </Button>
      </React.Fragment>
    )
  })
  .add('Number', () => {
    return (
      <React.Fragment>
        <Button type="number">1</Button>
        <Button type="number">2</Button>
        <Button type="number">3</Button>
      </React.Fragment>
    )
  })
