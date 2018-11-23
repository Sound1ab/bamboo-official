const path = require(`path`)

// create pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulProduct(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    console.error(result.errors)
    throw new Error(result.errors)
  }

  const productTemplate = path.resolve(`./src/templates/Product.tsx`)

  result.data.allContentfulProduct.edges.forEach(({ node }) => {
    const { slug, id } = node

    createPage({
      path: `/products/${slug}/`,
      component: productTemplate,
      context: {
        id,
      },
    })
  })
}
