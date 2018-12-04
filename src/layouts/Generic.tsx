import 'modern-normalize'

import { graphql, Link, StaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'

import { Heading, ThemeProvider } from '../components/atoms'
import * as Cart from '../components/atoms/Cart'
import { BurgerMenu, Footer, NavBar } from '../components/molecules'
import { colors } from '../theme'

if (typeof window !== 'undefined') {
  require(`intersection-observer`)
}

require('../theme/normalize')

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
  floatingCatText?: string[]
  activeElementIndex?: number
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
  floatingCatText,
  activeElementIndex,
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
                name: 'The official site for Bam Boo London',
              },
              {
                content: 'Bam Boo, Products, Restaurant, London',
                name: 'keywords',
              },
            ]}
          />
          <Cart.Cart>
            {() => (
              <React.Fragment>
                <NavBar
                  isSticky={navbarIsSticky}
                  isLight={navbarIsLight}
                  floatingCatText={floatingCatText}
                  activeElementIndex={activeElementIndex}
                >
                  {(isMenuOpen, closeBurgerMenuClick) => (
                    <BurgerMenu isOpen={isMenuOpen} close={closeBurgerMenuClick}>
                      {/*<div>*/}
                      {/*<Heading type="h6" color={colors.white} textTransform="uppercase" button>*/}
                      {/*Find us*/}
                      {/*</Heading>*/}
                      {/*</div>*/}
                      <div>
                        <Link to="/products">
                          <Heading type="h6" color={colors.white} textTransform="uppercase" button>
                            Products
                          </Heading>
                        </Link>
                      </div>
                      <div>
                        <Link to="/">
                          <Heading type="h6" color={colors.white} textTransform="uppercase" button>
                            Restaurant
                          </Heading>
                        </Link>
                      </div>
                    </BurgerMenu>
                  )}
                </NavBar>
                <Main>{children}</Main>
              </React.Fragment>
            )}
          </Cart.Cart>
          <Footer />
        </Root>
      </ThemeProvider>
    )}
  </StaticQuery>
)
