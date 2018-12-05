import * as React from 'react'
import styled from 'react-emotion'

import { colors, spacing } from '../../../theme'
import { MediaQuery } from '../../utility'
import { page, relative } from './styles'

const ArtContainer = styled('div')<{ top?: number; left?: number; right?: number; bottom?: number }>`
  position: absolute;
  ${({ top }) => `top: ${top}px`};
  ${({ left }) => `left: ${left}px`};
  ${({ right }) => `right: ${right}px`};
  ${({ bottom }) => `bottom: ${bottom}px`};
`

export const Section = styled('section')<{
  textAlign?: string
  isContainerSticky?: boolean
  marginBottom?: boolean
  marginTop?: boolean
}>`
  ${relative};
  ${page};
  ${({ textAlign = 'left' }) => `text-align: ${textAlign}`};
  ${({ isContainerSticky }) => isContainerSticky && `padding-right: ${spacing.xl * 2 + spacing.s}px;`};
  ${({ marginBottom = false }) => marginBottom && `margin-bottom: ${spacing.s}px`};
  ${({ marginTop = false }) => marginTop && `margin-top: ${spacing.s}px`};
`

const RandomIcon = ({
  Icon,
  top,
  left,
  bottom,
  right,
  dimensions,
}: {
  Icon: any
  top?: number
  left?: number
  bottom?: number
  right?: number
  dimensions: number
}) => (
  <ArtContainer top={top} left={left} bottom={bottom} right={right}>
    <Icon fill={colors.black} height={`${dimensions}px`} width={`${dimensions}px`} />
  </ArtContainer>
)

interface Props {
  children?: any
  id?: string
  className?: string
  textAlign?: string
  isContainerSticky?: boolean
  marginBottom?: boolean
  marginTop?: boolean
  icons?: any[]
  dangerouslySetInnerHTML?: any
}

export const Container = ({
  children,
  id,
  className,
  dangerouslySetInnerHTML,
  textAlign,
  isContainerSticky,
  marginBottom,
  marginTop,
  icons,
}: Props) => (
  <Section
    id={id}
    className={className}
    textAlign={textAlign}
    isContainerSticky={isContainerSticky}
    marginBottom={marginBottom}
    marginTop={marginTop}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
  >
    {icons && (
      <MediaQuery maxWidth={400}>
        {(_, isMatchMedia) =>
          !isMatchMedia && (
            <React.Fragment>
              {icons[0] && <RandomIcon Icon={icons[0]} dimensions={100} top={0} right={0} />}
              {icons[1] && <RandomIcon Icon={icons[1]} dimensions={120} bottom={0} left={-50} />}
            </React.Fragment>
          )
        }
      </MediaQuery>
    )}
    {children}
  </Section>
)
