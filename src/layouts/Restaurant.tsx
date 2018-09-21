import { graphql, StaticQuery } from 'gatsby'
import 'modern-normalize'
import * as React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { ThemeProvider } from '../components/atoms'
import { Header } from '../components/molecules'
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
`

interface StaticQueryProps {
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
  >
    {(data: StaticQueryProps) => (
      <ThemeProvider>
        <Root>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              {
                name: 'keywords',
                content: 'gatsbyjs, gatsby, javascript, sample, something',
              },
            ]}
          />
          <Header title={data.site.siteMetadata.title} />
          <Main>{children}</Main>
        </Root>
      </ThemeProvider>
    )}
  </StaticQuery>
)
