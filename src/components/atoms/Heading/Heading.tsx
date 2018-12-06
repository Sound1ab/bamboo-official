import * as React from 'react'
import styled from 'react-emotion'

type headingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type textTransformType = 'lowercase' | 'uppercase' | 'none'
type textAlignType = 'left' | 'center' | 'right'

interface Props {
  button?: boolean
  textTransform?: textTransformType
  textAlign?: textAlignType
  fontFamily?: string
  type: headingType
  marginBottom?: boolean
  marginTop?: boolean
  color?: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
  transition?: boolean
}

const StyledHeading = styled('h1')<Props>`
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  text-rendering: optimizeLegibility;
  font-family: ${({ theme, fontFamily, type }) => theme.typography.fontFamily[fontFamily || type]};
  font-size: ${({ theme, type }) => theme.typography.fontSize[type]}px;
  font-weight: ${({ theme, type }) => theme.typography.fontWeight[type]};
  letter-spacing: ${({ theme, type }) => theme.typography.letterSpacing[type]}px;
  line-height: ${({ theme, type }) => theme.typography.lineHeight[type]};
  margin-bottom: ${({ theme, type, marginBottom }) => (marginBottom ? theme.typography.marginBottom[type] : 0)}px;
  margin-top: ${({ theme, type, marginTop }) => (marginTop ? theme.typography.marginBottom[type] : 0)}px;
  color: ${({ color }) => color};
  transition: ${({ transition = false }) => (transition ? `all 0.5s ease-in-out;` : ``)};
`

let Base: any

export const Heading = (props: Props) => {
  if (!Base) {
    Base = StyledHeading.withComponent(props.type) as any
  }
  return props.button ? (
    <button onClick={props.onClick}>
      <Base {...props} />
    </button>
  ) : (
    <Base {...props} />
  )
}
