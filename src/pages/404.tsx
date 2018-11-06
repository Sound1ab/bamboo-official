import { Link } from 'gatsby'
import * as React from 'react'
import { Container } from '../components/atoms'
import { Product } from '../layouts'

const NotFoundPage = () => (
  <Product>
    <Container>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </Container>
  </Product>
)

export default NotFoundPage
