import * as React from 'react'
import { graphql } from 'gatsby'
import { Restaurant } from '../layouts'
import { Container } from '../components/atoms'

interface PageTemplateProps {
  data: {
    PagesJson: {
      test: string
    }
  }
}

const IndexPage = ({ data }: PageTemplateProps) => {
  console.log('data', data)
  return (
    <Restaurant>
      <Container>
        <h1>Heading h1</h1>
        <h2>Heading h2</h2>
        <h3>Heading h3</h3>
        <h4>Heading h4</h4>
        <h5>Heading h5</h5>
        <h6>Heading h6</h6>
        <p>Paragraph text</p>
        <p>Paragraph text</p>
      </Container>
    </Restaurant>
  )
}

export const query = graphql`
  query IndexQuery {
    PagesJson {
      test
    }
  }
`

export default IndexPage
