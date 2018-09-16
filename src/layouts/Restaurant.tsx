import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '../components/atoms'
import { Header } from '../components/molecules'
import styled from 'react-emotion'
import 'modern-normalize'
import '../theme/normalize'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  padding: ${({ theme }) => theme.spacing.m}px;
`

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export const Restaurant: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <ThemeProvider>
        <Root>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
            ]}
          />
          <Header title={data.site.siteMetadata.title} />
          <Main>{children}</Main>
        </Root>
      </ThemeProvider>
    )}
  />
)
