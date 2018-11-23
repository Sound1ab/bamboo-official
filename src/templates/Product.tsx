import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import { css } from 'react-emotion'
import { ImageTextContainer } from '../components/atoms/Container'
import { Container, Heading, Ricebowl, sticky } from '../components/atoms/index'
import { StickyBuyer } from '../components/molecules'
import { MediaQuery } from '../components/utility'
import { AllContentProduct, ContentProduct } from '../interfaces/contentful'
import { Generic } from '../layouts'
import { colors, spacing } from '../theme'

interface Props {
  navbarIsSticky?: boolean
  data: {
    contentfulProduct: ContentProduct
    allContentfulProduct: AllContentProduct
  }
}

const MAX_WIDTH_MEDIA = 600

const Product = ({ navbarIsSticky = true, data: { contentfulProduct, allContentfulProduct } }: Props) => (
  <Generic navbarIsSticky={navbarIsSticky}>
    <MediaQuery maxWidth={MAX_WIDTH_MEDIA}>
      {(_, isMatchMedia) => (
        <React.Fragment>
          {isMatchMedia && (
            <Container>
              <Heading type="h2" marginBottom>
                {contentfulProduct.productName.internal.content}
              </Heading>
              <Heading type="h4" marginBottom>
                £{contentfulProduct.price}
              </Heading>
            </Container>
          )}
          <Container
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: stretch;
            `}
            marginBottom
          >
            <div
              className={css`
                flex: 1;
              `}
            >
              <Img fluid={contentfulProduct.image[0].fluid} />
              {isMatchMedia && (
                <StickyBuyer
                  reviews={contentfulProduct.reviews}
                  description={contentfulProduct.productDescription.internal.content}
                  heading={contentfulProduct.productName.internal.content}
                  productId={contentfulProduct.id}
                  price={contentfulProduct.price}
                  isStatic
                  hasNoProductInformation
                />
              )}
              {!isMatchMedia && (
                <React.Fragment>
                  <div
                    className={css`
                      padding: ${spacing.m}px;
                      text-align: center;
                    `}
                  >
                    <Ricebowl fill={colors.black} width="80px" height="80px" />
                  </div>
                  {contentfulProduct.moreInformation.map((moreInformation, index) => (
                    <ImageTextContainer
                      key={moreInformation.description}
                      reverse={index % 2 === 0}
                      firstChild={<Img fluid={moreInformation.image.fluid} />}
                      secondChild={<div>{moreInformation.description}</div>}
                      marginBottom
                    />
                  ))}
                </React.Fragment>
              )}
            </div>
            {!isMatchMedia && (
              <div
                className={css`
                  flex: 0 0 ${spacing.xl * 2 + spacing.s}px;
                  margin-left: ${spacing.m}px;
                `}
              >
                <div
                  className={css`
                    ${sticky};
                    top: 124px;
                  `}
                >
                  <StickyBuyer
                    reviews={contentfulProduct.reviews}
                    description={contentfulProduct.productDescription.internal.content}
                    heading={contentfulProduct.productName.internal.content}
                    productId={contentfulProduct.id}
                    price={contentfulProduct.price}
                    isStatic
                  />
                </div>
              </div>
            )}
          </Container>
          <Container>
            <div
              className={css`
                padding: ${spacing.m}px;
                text-align: center;
              `}
            >
              <Ricebowl fill={colors.black} width="80px" height="80px" />
            </div>
          </Container>
          <Container
            className={css`
              display: flex;
              flex-wrap: nowrap;
              & > div {
                flex: 1;
              }
              & > div:not(:last-child) {
                margin: 0 ${spacing.m}px 0 0;
              }
              @media (max-width: ${MAX_WIDTH_MEDIA}px) {
                flex-wrap: wrap;
                & > div {
                  flex: 1 1 100%;
                }
                & > div:not(:last-child) {
                  margin: 0 0 ${spacing.m}px 0;
                }
              }
            `}
            marginBottom
          >
            {allContentfulProduct.edges
              .filter(({ node }) => node.id !== contentfulProduct.id)
              .map(({ node }) => (
                <div key={node.slug}>
                  <Link to={`/products/${node.slug}`}>
                    <Img fluid={node.image[0].fluid} />
                    <div
                      className={css`
                        display: flex;
                        justify-content: space-between;
                        margin-top: ${spacing.xs}px;
                      `}
                    >
                      <span>{node.productName.internal.content}</span>
                      <span>£{node.price}</span>
                    </div>
                  </Link>
                </div>
              ))}
          </Container>
        </React.Fragment>
      )}
    </MediaQuery>
  </Generic>
)

export default Product

export const pageQuery = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      slug
      quantity
      price
      moreInformation {
        description
        image {
          fluid(maxWidth: 1250) {
            src
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      reviews {
        review
        score
      }
      productName {
        internal {
          content
        }
      }
      productDescription {
        internal {
          content
        }
      }
      image {
        fluid(maxWidth: 1250) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allContentfulProduct(limit: 3, sort: { fields: [createdAt], order: DESC }) {
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
