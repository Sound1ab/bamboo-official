import React from 'react'
import 'modern-normalize'
import { ThemeProvider } from '../src/components/atoms/ThemeProvider'
import { configure, addDecorator } from '@storybook/react'
import styled from 'react-emotion'
import '../src/theme/normalize'

const Wrapper = styled('div')`
  position: absolute;
  padding: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

addDecorator(story => (
  <Wrapper>
    <ThemeProvider>{story()}</ThemeProvider>
  </Wrapper>
))

const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
