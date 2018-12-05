import * as ContentfulRichTextRenderer from '@contentful/rich-text-html-renderer'
import * as ContentfulRichTextTypes from '@contentful/rich-text-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import styled, { css } from 'react-emotion'

import { Beatroot, ChopstickSushi, Heading, Lemon, Observer, Shell, Slide, ThemeProvider } from '../components/atoms'
import { HomepageContainer } from '../components/atoms/Container/HomepageContainer'
import { Slider } from '../components/atoms/Slider'
import { AllContentfulProduct, ContentfulPage } from '../interfaces/contentful'
import { Generic } from '../layouts'
import { colors, spacing } from '../theme'

interface Props {
  data: {
    allContentfulProduct: AllContentfulProduct
    contentfulPage: ContentfulPage
  }
}

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

enum OBSERVER_TARGETS {
  BANNER = 'banner',
  TEXT_CONTAINER = 'textContainer',
  BANNER_TWO = 'bannerTwo',
  GALLERY = 'gallery',
}

const navBarIsLight: { [key: string]: boolean } = {
  [OBSERVER_TARGETS.BANNER]: true,
  [OBSERVER_TARGETS.TEXT_CONTAINER]: false,
  [OBSERVER_TARGETS.BANNER_TWO]: true,
  [OBSERVER_TARGETS.GALLERY]: false,
}

const targets = [
  OBSERVER_TARGETS.BANNER,
  OBSERVER_TARGETS.TEXT_CONTAINER,
  OBSERVER_TARGETS.BANNER_TWO,
  OBSERVER_TARGETS.GALLERY,
]

const ProductsPage = ({ data: { allContentfulProduct, contentfulPage } }: Props) => (
  <Observer targets={targets}>
    {activeElement => (
      <Generic
        navbarIsLight={navBarIsLight[activeElement]}
        floatingCatText={contentfulPage.floatingCat}
        activeElementIndex={targets.findIndex(target => target === activeElement)}
      >
        <span id={OBSERVER_TARGETS.BANNER}>
          <Img
            style={{ width: '100%', height: '560px' }}
            fluid={contentfulPage.banner.fluid}
            title="BamBoo products"
            alt="BamBoo products"
          />
        </span>
        <HomepageContainer icons={[Beatroot, ChopstickSushi]} textAlign="center" id={OBSERVER_TARGETS.TEXT_CONTAINER}>
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
        <span id={OBSERVER_TARGETS.BANNER_TWO}>
          <Img
            style={{ width: '100%', height: '240px' }}
            fluid={contentfulPage.secondaryBanner.fluid}
            title="BamBoo products"
            alt="BamBoo products"
          />
        </span>
        <HomepageContainer icons={[Shell]} id={OBSERVER_TARGETS.GALLERY}>
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
    )}
  </Observer>
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
