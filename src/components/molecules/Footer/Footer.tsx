import * as React from 'react'
import styled from 'react-emotion'
import { colors, spacing } from '../../../theme'
import { Container, Facebook, Instagram, Twitter } from '../../atoms'
import { MediaQuery } from '../../utility'

const TopBorderContainer = styled(Container)`
  box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.75);
  padding: ${spacing.s}px 0;
  display: flex;
  justify-content: space-between;
`

const SpacedWrapper = styled('div')`
  * + * {
    margin-left: ${spacing.s}px;
  }
`

const UppercaseParagraph = styled('p')`
  text-transform: uppercase;
`

export const Footer = () => (
  <TopBorderContainer>
    <UppercaseParagraph>© Bam • Boo 2018</UppercaseParagraph>
    <SpacedWrapper>
      <Twitter fill={colors.black} width="14px" height="14px" />
      <Instagram fill={colors.black} width="14px" height="14px" />
      <Facebook fill={colors.black} width="14px" height="14px" />
    </SpacedWrapper>
    <MediaQuery maxWidth={400}>
      {(_, isMatchMedia) => (
        <UppercaseParagraph>
          {isMatchMedia ? 'T+Cs' : 'Terms and Conditions'}
        </UppercaseParagraph>
      )}
    </MediaQuery>
  </TopBorderContainer>
)
