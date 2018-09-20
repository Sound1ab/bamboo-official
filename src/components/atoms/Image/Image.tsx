import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import { colors } from '../../../theme'

const fluidQuery = graphql`
  query AllImage {
    imgAll: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1250) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  }
`

const findImage = (data: any, image: string) => data.imgAll.edges.find((node: any) => node.node.name === image)

interface PropTypes {
  style?: {}
  image?: string
  title?: string
  alt?: string
}

export const Image = ({ style = {}, image = 'ProductThree02', title = '', alt = '' }: PropTypes) => (
  <StaticQuery query={fluidQuery}>
    {(data: any) => (
      <Img
        style={style}
        fluid={findImage(data, image).node.childImageSharp.fluid}
        backgroundColor={colors.accent}
        title={title}
        alt={alt}
      />
    )}
  </StaticQuery>
)
