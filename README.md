# Bam Boo London

Commercial site for Bam Boo restaurant built using Gatsby as a static site generator.

## Development

Storybook: `yarn storybook`

Gatsby Development: `gatsby start`

Gatsby Build: `gatsby build`

Lint: `yarn lint`

Test: `yarn test`

## Preview Links

[Staging](http://bamboo-staging.s3-website.eu-west-2.amazonaws.com/products/)

[Master](http://bamboo-master.s3-website.eu-west-2.amazonaws.com/products/)

## CircleCI

[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) provided by [CircleCI](https://circleci.com/) when either
Master or Staging receives a push or PR.

## Storybook

[Storybook](https://storybook.js.org/) has been used to prototype the component library. During development, this can
be access at `http://localhost:9000`.

##### GraphQL Limitations

Due to some limitation between Gatsby and Storybook. Any component using GraphQL cannot be rendered in Storybook.
[This](https://github.com/gatsbyjs/gatsby/issues/633) Github issue thread can provide more information on the issue.

## Typescript

[Typescript](https://www.typescriptlang.org/) is used throughout the project to provide static type checking. Any new
files or components should therefore use the extensions `.ts` or `.tsx`.

## GraphQL

[GraphQL](https://graphql.org/) is a query language to query API data of any kind. Gatsby retrieves all remote data at
compile time and then leverages GraphQL as the mechanism to deliver the data to our client side components. One major
benefit of this is all our data is available immediately on page load however, the drawback is that whenever content
changes, the entire site must be regenerated to pull in the new data. This process will be explained further in the
section about Contentful.

##### GraphiQL

GraphiQL is a client side playground to test run GraphQL queries. It can be accessed at
`http://localhost:8000/___graphql`.

## Contentful

All content on the site is dynamically generated using [Contentful's](https://www.contentful.com/) powerful model
based API system. As described in the GraphQL section, this content is pulled into the site at compile time and
therefore the site must be rebuilt whenever changes to the content are made. To perform the regeneration, an
automatic webhook is setup that will trigger a rebuild on CirleCI whenever changes are published on Contentful. This
process can take up to 5 minutes to complete.

## Stripe

[Stripe](https://stripe.com/gb) is an embeddable payment service. This is currently configured on the Front End but
requires further server side configuration

## Gatsby Node

All product pages within the site are programmatically generated. This is configured in `gatsby-node.js` and setup to
run at compile time.

## Gatsby Config

## Design

##### Atomic Design

##### Styled Components

## Environment Variables
