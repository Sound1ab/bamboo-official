import { graphql, Link } from 'gatsby'
import * as React from 'react'
import styled, { css } from 'react-emotion'
import { Container, Heading, Lemon, Slide } from '../components/atoms'
import { FluidImage } from '../components/atoms/Image'
import { Slider } from '../components/atoms/Slider'
import { AllContentProduct } from '../interfaces/contentful'
import { Generic } from '../layouts'
import { colors, padding, spacing } from '../theme'

interface Props {
  data: {
    allContentfulProduct: AllContentProduct
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

const ProductsPage = ({ data: { allContentfulProduct } }: Props) => {
  return (
    <Generic navbarIsLight={true}>
      <FluidImage
        style={{ width: '100%', height: '560px' }}
        image="bambooproductcover2"
        title="product homepage banner"
        alt="product homepage banner"
      />
      <HomepageContainer textAlign="center">
        <Heading type="h5" textAlign="center" marginBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultrices tellus, a consectetur nibh.
          Quisque eget tristique nunc.
        </Heading>
        <Heading type="h5" textAlign="center" fontFamily="Brandon Medium" marginBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultrices tellus, a consectetur nibh.
          Quisque eget tristique nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultrices
          tellus, a consectetur nibh. Quisque eget tristique nunc.
        </Heading>
        <Heading type="h5" textAlign="center" fontFamily="Brandon Medium" marginBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit!
        </Heading>
        <div
          className={css`
            padding: ${spacing.m}px ${spacing.m}px 0 ${spacing.m}px;
          `}
        >
          <Lemon fill={colors.black} width="80px" height="80px" />
        </div>
      </HomepageContainer>
      <FluidImage
        style={{ width: '100%', height: '240px' }}
        image="bamboo-twocats2"
        title="product homepage banner"
        alt="product homepage banner"
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
