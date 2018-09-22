import * as React from 'react'
import { styled } from '../../../theme'

type headingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type textTransformType = 'lowercase' | 'uppercase' | 'none'

const Component = (
  heading: headingType,
  textTransform: textTransformType,
  marginBottom: boolean,
) => styled(heading as any)`
  text-transform: ${textTransform};
  margin-top: 0;
  text-rendering: optimizeLegibility;
  font-family: ${({ theme }) => theme.typography.fontFamily[heading]};
  font-size: ${({ theme }) => theme.typography.fontSize[heading]}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight[heading]};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing[heading]}px;
  line-height: ${({ theme }) => theme.typography.lineHeight[heading]};
  margin-bottom: ${({ theme }) => (marginBottom ? theme.spacing.s : 0)}px;
`

interface PropTypes {
  type?: headingType
  props?: {}
  children: React.ReactNode
  textTransform?: textTransformType
  marginBottom?: boolean
  button?: boolean
}

export const Heading = ({
  type = 'h1',
  props = {},
  children,
  textTransform = 'none',
  marginBottom = false,
  button = false,
}: PropTypes) => {
  const HeadingComponent = React.createElement(
    Component(type, textTransform, marginBottom),
    {},
    children,
  )
  return button ? <button>{HeadingComponent}</button> : HeadingComponent
}
