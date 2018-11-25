import * as ContentfulRichTextRenderer from '@contentful/rich-text-html-renderer'
import * as ContentfulRichTextTypes from '@contentful/rich-text-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import styled, { css } from 'react-emotion'
import { Container, Heading, Lemon, Slide, ThemeProvider, ChopstickSushi, Beatroot, Leaf } from '../components/atoms'
import { Slider } from '../components/atoms/Slider'
import { AllContentfulProduct, ContentfulPage } from '../interfaces/contentful'
import { Generic } from '../layouts'
import { colors, padding, spacing } from '../theme'

interface Props {
  data: {
    allContentfulProduct: AllContentfulProduct
    contentfulPage: ContentfulPage
  }
}

const HomepageContainer = styled(Container)`
  padding: ${padding.xxl.vertical}px ${padding.xxl.horizontal}px;
  @media (max-width: 800px) {
    padding: ${padding.m.vertical}px ${padding.m.horizontal}px;
  }
  @media (max-width: 400px) {
    padding: ${padding.s.vertical}px ${padding.s.horizontal}px;
  }
`

const options = {
  renderNode: {
    [ContentfulRichTextTypes.BLOCKS.HEADING_5]: ({ content }: any) => {
      const [copy] = content
      const { marks, value } = copy
      const isBold = marks.find((mark: { type: string }) => mark.type === 'bold')
      return ReactDOMServer.renderToString(
        <ThemeProvider>
          {isBold ? (
            <Heading type="h5" textAlign="center" marginBottom>
              {value}
            </Heading>
          ) : (
            <Heading type="h5" textAlign="center" fontFamily="Brandon Medium" marginBottom>
              {value}
            </Heading>
          )}
        </ThemeProvider>,
      )
    },
  },
}

const ArtContainer = styled('div')<{ top?: number; left?: number; right?: number }>`
  position: absolute;
  ${({ top }) => `top: ${top}px`};
  ${({ left }) => `left: ${left}px`};
  ${({ right }) => `right: ${right}px`};
`

const ProductsPage = ({ data: { allContentfulProduct, contentfulPage } }: Props) => (
  <Generic navbarIsLight={true}>
    <ArtContainer top={900} left={0}>
      <ChopstickSushi fill={colors.black} width="250px" height="250px" />
    </ArtContainer>
    <ArtContainer top={550} right={0}>
      <Beatroot fill={colors.black} width="150px" height="150px" />
    </ArtContainer>
    <ArtContainer top={1200} right={0}>
      <Leaf fill={colors.black} width="100px" height="100px" />
    </ArtContainer>
    <Img
      style={{ width: '100%', height: '560px' }}
      fluid={contentfulPage.banner.fluid}
      title="BamBoo products"
      alt="BamBoo products"
    />
    <HomepageContainer textAlign="center">
      <span
        dangerouslySetInnerHTML={{
          __html: ContentfulRichTextRenderer.documentToHtmlString(contentfulPage.description, options),
        }}
      />
      <div
        className={css`
          padding: ${spacing.m}px ${spacing.m}px 0 ${spacing.m}px;
          text-align: center;
        `}
      >
        <Lemon fill={colors.black} width="80px" height="80px" />
      </div>
    </HomepageContainer>
    <Img
      style={{ width: '100%', height: '240px' }}
      fluid={contentfulPage.secondaryBanner.fluid}
      title="BamBoo products"
      alt="BamBoo products"
    />
    <HomepageContainer>
      <Slider>
        {allContentfulProduct.edges.map(({ node }) => (
          <Link to={`/products/${node.slug}`}>
            <Slide
              image={node.image[0].fluid}
              headingLeft={node.productName.internal.content}
              headingRight={node.price}
            />
          </Link>
        ))}
      </Slider>
    </HomepageContainer>
  </Generic>
)

export const query = graphql`
  query ProductsPageQuery {
    contentfulPage(slug: { eq: "products" }) {
      ...contentfulPage
    }
    allContentfulProduct {
      ...allContentfulProduct
    }
  }
`

export default ProductsPage
