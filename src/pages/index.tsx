import { graphql } from 'gatsby'
import * as React from 'react'
import { Button, Container } from '../components/atoms'
import { Image } from '../components/atoms/Image'
import { Product } from '../layouts'

interface PageTemplateProps {
  data: {
    PagesJson: {
      test: string
    }
  }
}

const IndexPage = ({ data }: PageTemplateProps) => {
  return (
    <Product>
      <Image
        style={{ width: '100%', height: '560px' }}
        image="bambooproductcover2"
        title="product homepage banner"
        alt="product homepage banner"
      />
      <Container>
        <p>Paragraph text</p>
        <Button />
      </Container>
    </Product>
  )
}

export const query = graphql`
  query IndexPageQuery {
    pagesJson {
      test
    }
  }
`

export default IndexPage
