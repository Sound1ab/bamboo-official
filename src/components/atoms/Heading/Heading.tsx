import * as React from 'react'
import { colors, styled } from '../../../theme'

type headingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type textTransformType = 'lowercase' | 'uppercase' | 'none'
type textAlignType = 'left' | 'center' | 'right'

const Component = (
  heading: headingType,
  textTransform: textTransformType,
  textAlign: textAlignType,
  marginBottom: boolean,
  color: string,
  fontFamily: string,
) => styled(heading as any)`
  text-transform: ${textTransform};
  text-align: ${textAlign};
  margin-top: 0;
  text-rendering: optimizeLegibility;
  font-family: ${({ theme }) =>
    theme.typography.fontFamily[fontFamily || heading]};
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
  textAlign?: textAlignType
  marginBottom?: boolean
  button?: boolean
  className?: string
  color?: string
  onClick?: () => void
  fontFamily?: string
}

export const Heading = ({
  type = 'h1',
  props = {},
  children,
  textTransform = 'none',
  textAlign = 'left',
  marginBottom = false,
  button = false,
  className = '',
  color = colors.black,
  onClick,
  fontFamily,
}: PropTypes) => {
  const HeadingComponent = React.createElement(
    Component(type, textTransform, textAlign, marginBottom, color, fontFamily),
    { className },
    children,
  )
  return button ? (
    <button onClick={onClick} className={className}>
      {HeadingComponent}
    </button>
  ) : (
    HeadingComponent
  )
}
