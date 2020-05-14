import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"
import PostPreview from "./components/post-preview"
import usePosts from "./hooks/use-posts"

export default () => {
const posts = usePosts();

return (
  <Layout>
    <h1>Hello All!</h1>
    <p>Good morning people</p>
    <Link to="/about/">about me &rArr;</Link>
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} />
    ))}
  </Layout>
)
}
