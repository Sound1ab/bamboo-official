import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'react-emotion'
import { AllContentSocial } from '../../../interfaces/contentful'
import { colors, spacing } from '../../../theme'
import { Container, Facebook, Instagram, Twitter } from '../../atoms'
import { MediaQuery } from '../../utility'

const query = graphql`
  query footerQuery {
    allContentfulSocial {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`

const TopBorderContainer = styled(Container)`
  box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.75);
  padding: ${spacing.s}px 0;
  display: flex;
  justify-content: space-between;
`

const FooterWrapper = TopBorderContainer.withComponent('footer')

const SpacedWrapper = styled('div')`
  * + * {
    margin-left: ${spacing.s}px;
  }
`

const UppercaseParagraph = styled('p')`
  text-transform: uppercase;
`

interface Data {
  allContentfulSocial: AllContentSocial
}

const findEdge = ({ edges }: AllContentSocial, name: string) => edges.find(({ node }) => node.name === name)

export const Footer = () => (
  <FooterWrapper>
    <UppercaseParagraph>© Bam • Boo 2018</UppercaseParagraph>
    <SpacedWrapper>
      <StaticQuery query={query}>
        {({ allContentfulSocial }: Data) => {
          const {
            node: { link: twitterLink },
          } = findEdge(allContentfulSocial, 'Twitter')
          const {
            node: { link: instagramLink },
          } = findEdge(allContentfulSocial, 'Instagram')
          const {
            node: { link: facebookLink },
          } = findEdge(allContentfulSocial, 'Facebook')
          return (
            <React.Fragment>
              <a href={twitterLink} target="_blank" rel="noopener">
                <Twitter fill={colors.black} width="14px" height="14px" />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener">
                <Instagram fill={colors.black} width="14px" height="14px" />
              </a>
              <a href={facebookLink} target="_blank" rel="noopener">
                <Facebook fill={colors.black} width="14px" height="14px" />
              </a>
            </React.Fragment>
          )
        }}
      </StaticQuery>
    </SpacedWrapper>
    <MediaQuery maxWidth={400}>
      {(_, isMatchMedia) => <UppercaseParagraph>{isMatchMedia ? 'T+Cs' : 'Terms and Conditions'}</UppercaseParagraph>}
    </MediaQuery>
  </FooterWrapper>
)
