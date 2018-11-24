import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import styled, { css } from 'react-emotion'
import { Container, Heading, Lemon, Slide } from '../components/atoms'
import { Slider } from '../components/atoms/Slider'
import { AllContentPage, AllContentProduct } from '../interfaces/contentful'
import { Generic } from '../layouts'
import { colors, padding, spacing } from '../theme'

interface Props {
  data: {
    allContentfulProduct: AllContentProduct
    contentfulPage: AllContentPage
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

const ProductsPage = ({ data: { allContentfulProduct, contentfulPage } }: Props) => {
  console.log('contentfulPage', contentfulPage)
  return (
    <Generic navbarIsLight={true}>
      <Img
        style={{ width: '100%', height: '560px' }}
        fluid={contentfulPage.banner.fluid}
        title="BamBoo products"
        alt="BamBoo products"
      />
      <HomepageContainer textAlign="center">
        {contentfulPage.description.content.map(({ content }) => {
          const [copy] = content
          const { marks, value } = copy
          const isBold = marks.find(mark => mark.type === 'bold')
          return isBold ? (
            <Heading type="h5" textAlign="center" marginBottom>
              {value}
            </Heading>
          ) : (
            <Heading type="h5" textAlign="center" fontFamily="Brandon Medium" marginBottom>
              {value}
            </Heading>
          )
        })}
        <div
          className={css`
            padding: ${spacing.m}px ${spacing.m}px 0 ${spacing.m}px;
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
              <Slide image={node.image[0].fluid} headingLeft="test" headingRight="test" />
            </Link>
          ))}
        </Slider>
      </HomepageContainer>
    </Generic>
  )
}

export const query = graphql`
  query ProductsPageQuery {
    contentfulPage(slug: { eq: "products" }) {
      slug
      description {
        nodeType
        content {
          content {
            marks {
              type
            }
            value
            nodeType
          }
        }
      }
      banner {
        fluid(maxWidth: 1250) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      secondaryBanner {
        fluid(maxWidth: 1250) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allContentfulProduct {
      edges {
        node {
          id
          productName {
            internal {
              content
            }
          }
          price
          slug
          image {
            fluid(maxWidth: 1250) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductsPage
