import { graphql } from 'gatsby'
import * as React from 'react'
import { Button, Container, Image } from '../components/atoms'
import { Restaurant } from '../layouts'
import { css } from 'react-emotion'

interface PageTemplateProps {
  data: {
    PagesJson: {
      test: string
    }
  }
}

const IndexPage = ({ data }: PageTemplateProps) => {
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
        <Image style={{ width: '200px', height: '200px' }} />
        <p>Paragraph text</p>
        <Button />
      </Container>
    </Restaurant>
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
