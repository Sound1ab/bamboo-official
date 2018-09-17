import React from 'react'
import 'modern-normalize'
import { ThemeProvider } from '../src/components/atoms/ThemeProvider'
import { configure, addDecorator } from '@storybook/react'
import { Wrapper } from './Wrapper'
import '../src/theme/normalize'

addDecorator(story => {
  const Theme = React.createElement(ThemeProvider, {}, story())
  return React.createElement(Wrapper, {}, Theme)
})

const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
