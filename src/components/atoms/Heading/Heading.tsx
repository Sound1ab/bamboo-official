import * as React from 'react'
import { colors, styled } from '../../../theme'

type headingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type textTransformType = 'lowercase' | 'uppercase' | 'none'

const Component = (
  heading: headingType,
  textTransform: textTransformType,
  marginBottom: boolean,
  color: string,
) => styled(heading as any)`
  text-transform: ${textTransform};
  margin-top: 0;
  text-rendering: optimizeLegibility;
  font-family: ${({ theme }) => theme.typography.fontFamily[heading]};
  font-size: ${({ theme }) => theme.typography.fontSize[heading]}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight[heading]};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing[heading]}px;
  line-height: ${({ theme }) => theme.typography.lineHeight[heading]};
  margin-bottom: ${({ theme }) =>
    marginBottom ? theme.typography.marginBottom[heading] : 0}px;
  color: ${color};
`

interface PropTypes {
  type?: headingType
  props?: {}
  children: React.ReactNode
  textTransform?: textTransformType
  marginBottom?: boolean
  button?: boolean
  className?: string
  color?: string
}

export const Heading = ({
  type = 'h1',
  props = {},
  children,
  textTransform = 'none',
  marginBottom = false,
  button = false,
  className = '',
  color = colors.black,
}: PropTypes) => {
  const HeadingComponent = React.createElement(
    Component(type, textTransform, marginBottom, color),
    { className },
    children,
  )
  return button ? (
    <button className={className}>{HeadingComponent}</button>
  ) : (
    HeadingComponent
  )
}
