import * as ContentfulRichTextRenderer from '@contentful/rich-text-html-renderer'
import * as ContentfulRichTextTypes from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import { Container, Heading, ThemeProvider } from '../components/atoms'
import { ContentfulPage } from '../interfaces/contentful'
import { Generic } from '../layouts'

interface Props {
  data: {
    contentfulPage: ContentfulPage
  }
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

const Basket = ({ data: { contentfulPage } }: Props) => (
  <Generic navbarIsSticky>
    <Container>
      <Heading type="h2" textTransform="lowercase" textAlign="center" marginBottom marginTop>
        {contentfulPage.title}
      </Heading>
    </Container>
    <Container
      dangerouslySetInnerHTML={{
        __html: ContentfulRichTextRenderer.documentToHtmlString(contentfulPage.description, options),
      }}
    />
  </Generic>
)

export const query = graphql`
  query TermsPageQuery {
    contentfulPage(slug: { eq: "terms-and-conditions" }) {
      ...contentfulPage
    }
  }
`

export default Basket
