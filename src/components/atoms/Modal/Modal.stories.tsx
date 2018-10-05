import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Modal } from './Modal'

storiesOf('Modal', module).add('All', () => {
  return (
    <React.Fragment>
      <Modal>{open => <button onClick={open}>open</button>}</Modal>
    </React.Fragment>
  )
})
