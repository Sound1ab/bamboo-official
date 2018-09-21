import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { NavBar } from './NavBar'

storiesOf('NavBar', module).add('Primary', () => {
  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  )
})
