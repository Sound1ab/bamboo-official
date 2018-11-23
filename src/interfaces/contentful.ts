export interface ContentProduct {
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
}

export interface AllContentProduct {
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
    }
  }[]
}
