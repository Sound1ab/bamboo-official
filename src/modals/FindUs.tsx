import * as ContentfulRichTextRenderer from '@contentful/rich-text-html-renderer'
import * as ContentfulRichTextTypes from '@contentful/rich-text-types'
import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Container } from '../components/atoms/Container'
import { Heading } from '../components/atoms/Heading'
import { ThemeProvider } from '../components/atoms/ThemeProvider'
import { ContentfulPage } from '../interfaces/contentful'

const query = graphql`
  query FindUsQuery {
    contentfulPage(slug: { eq: "find-us" }) {
      ...contentfulPage
    }
  }
`

interface Props {
  contentfulPage: ContentfulPage
}

const options = {
  renderNode: {
    [ContentfulRichTextTypes.BLOCKS.HEADING_5]: ({ content }: any) => {
      const [copy] = content
      return ReactDOMServer.renderToString(
        <ThemeProvider>
          <Heading type="h6" textTransform="lowercase" textAlign="left" marginBottom>
            {copy.value}
          </Heading>
        </ThemeProvider>,
      )
    },
    [ContentfulRichTextTypes.BLOCKS.PARAGRAPH]: ({ content }: any) => {
      const [copy] = content
      return ReactDOMServer.renderToString(<p>{copy.value}</p>)
    },
  },
}

export const FindUs = () => (
  <StaticQuery query={query}>
    {({ contentfulPage }: Props) => (
      <Container
        marginTop
        marginBottom
        dangerouslySetInnerHTML={{
          __html: ContentfulRichTextRenderer.documentToHtmlString(contentfulPage.description, options),
        }}
      />
    )}
  </StaticQuery>
)
