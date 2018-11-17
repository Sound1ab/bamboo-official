import { graphql, StaticQuery } from 'gatsby'
import 'modern-normalize'
import * as React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { Heading, ThemeProvider } from '../components/atoms'
import { BurgerMenu, Footer, NavBar } from '../components/molecules'
import { colors } from '../theme'
import '../theme/normalize'

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`

interface Props {
  navbarIsSticky?: boolean
  navbarIsLight?: boolean
  children: any
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export const Generic = ({
  children,
  navbarIsSticky = false,
  navbarIsLight = false,
}: Props) => (
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
                content: data.site.siteMetadata.description,
                name: 'description',
              },
              {
                content: 'gatsbyjs, gatsby, javascript, sample, something',
                name: 'keywords',
              },
            ]}
          />
          <NavBar isSticky={navbarIsSticky} isLight={navbarIsLight}>
            {(isMenuOpen, closeBurgerMenuClick) => (
              <BurgerMenu isOpen={isMenuOpen} close={closeBurgerMenuClick}>
                <div>
                  <Heading
                    type="h6"
                    color={colors.white}
                    textTransform="uppercase"
                    button
                  >
                    Find us
                  </Heading>
                </div>
                <div>
                  <Heading
                    type="h6"
                    color={colors.white}
                    textTransform="uppercase"
                    button
                  >
                    Products
                  </Heading>
                </div>
                <div>
                  <Heading
                    type="h6"
                    color={colors.white}
                    textTransform="uppercase"
                    button
                  >
                    Restaurant
                  </Heading>
                </div>
              </BurgerMenu>
            )}
          </NavBar>
          <Main>{children}</Main>
          <Footer />
        </Root>
      </ThemeProvider>
    )}
  </StaticQuery>
)
