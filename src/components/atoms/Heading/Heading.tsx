import * as React from 'react'
import { styled } from '../../../theme'

type headingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Component = (heading: headingType) => styled(heading as any)`
  margin-top: 0;
  text-rendering: optimizeLegibility;
  font-family: ${({ theme }) => theme.typography.fontFamily[heading]};
  font-size: ${({ theme }) => theme.typography.fontSize[heading]}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight[heading]};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing[heading]}px;
  line-height: ${({ theme }) => theme.typography.lineHeight[heading]};
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`

interface PropTypes {
  type?: headingType
  props?: {}
  children: React.ReactNode
}

export const Heading = ({ type = 'h1', props = {}, children }: PropTypes) =>
  React.createElement(Component(type), {}, children)
