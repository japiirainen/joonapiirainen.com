exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("failed to create posts", result.error)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component:
        post.frontmatter.slug === "contact"
          ? require.resolve(`./src/pages/templates/simple.js`)
          : require.resolve("./src/pages/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
