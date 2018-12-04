export interface ContentfulProduct {
  id: string
  slug: string
  quantity: number
  price: number
  moreInformation: {
    description: string
    image: {
      fluid: object
    }
  }[]
  reviews?: {
    review: string
    score: number
  }[]
  productName: {
    internal: {
      content: string
    }
  }
  productDescription: {
    internal: {
      content: string
    }
  }
  image: [
    {
      fluid: object
    }
  ]
  floatingCat: string[]
}

export interface AllContentfulProduct {
  edges: {
    node: {
      id: string
      slug: string
      productName: {
        internal: {
          content: string
        }
      }
      price: number
      image: [
        {
          fluid: object
        }
      ]
      floatingCat: string[]
    }
  }[]
}

export interface AllContentfulSocial {
  edges: {
    node: {
      name: string
      link: string
    }
  }[]
}

export interface ContentfulPage {
  slug: string
  title: string
  description: {
    content: {
      content: {
        marks: { type: string }[]
        value: string
      }[]
    }[]
  }
  banner: {
    fluid: object
  }
  secondaryBanner: {
    fluid: object
  }
  floatingCat: string[]
}
