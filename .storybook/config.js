import React from 'react'
import { ThemeProvider } from '../src/components/atoms/ThemeProvider'
import { configure, addDecorator } from '@storybook/react'

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)

const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
