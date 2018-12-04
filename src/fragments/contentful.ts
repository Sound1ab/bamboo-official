import { graphql } from 'gatsby'

export const contentfulProductFragment = graphql`
  fragment contentfulProduct on ContentfulProduct {
    id
    slug
    quantity
    price
    moreInformation {
      description
      image {
        fluid(maxWidth: 1250) {
          ...GatsbyContentfulFluid_tracedSVG
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
    floatingCat
  }
`

export const allContentfulProductFragment = graphql`
  fragment allContentfulProduct on ContentfulProductConnection {
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
        floatingCat
      }
    }
  }
`

export const contentfulPageFragment = graphql`
  fragment contentfulPage on ContentfulPage {
    slug
    title
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
        nodeType
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
    floatingCat
  }
`

export const allContentfulSocialFragment = graphql`
  fragment allContentfulSocial on ContentfulSocialConnection {
    edges {
      node {
        name
        link
      }
    }
  }
`
