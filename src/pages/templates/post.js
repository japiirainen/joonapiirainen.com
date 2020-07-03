import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <ul
      css={css`
        font-size: 0.75rem;

        li {
          list-style-type: square;
        }
      `}
    >
      <li>post by {post.frontmatter.author}</li>
      <li>{post.frontmatter.date}</li>
    </ul>

    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr;Back</ReadLink>
  </Layout>
)

export default PostTemplate
