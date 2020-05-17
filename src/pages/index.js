import React from "react"
import Layout from "./components/layout"
import PostPreview from "./components/post-preview"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
          date
        }
        excerpt
      }
    }
  }
`

export default data => {
  const posts = data.data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    excerpt: post.excerpt,
  }))

  return (
    <Layout>
      <h3>
        Welcome to my new minimalistic website! You can read my blog below&darr;
      </h3>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
