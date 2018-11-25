'use strict'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'BamBoo',
    description: 'The official site for BamBoo restaurant and retailer.',
    siteUrl: '',
    author: {
      name: 'Phillip Parker',
      url: 'https://phillipparker.io',
      email: 'info@phillipparker.io',
    },
  },
  plugins: [
    'gatsby-plugin-stripe-checkout',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: '#e97f89',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bam Boo`,
        short_name: `Bam Boo`,
        start_url: `/`,
        background_color: '#000',
        theme_color: '#e97f89',
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    { resolve: 'gatsby-plugin-offline', options: { cacheId: `bam-boo.com` } },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://bam-boo.com',
      },
    },
  ],
}
