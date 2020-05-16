import React from "react"
import Layout from "./components/layout"
import PostPreview from "./components/post-preview"
import usePosts from "./hooks/use-posts"

export default () => {
const posts = usePosts();

return (
  <Layout>
    <h1>waveicons</h1>
    <p>Welcome to my new minimalistic website! You can read my blog below (downarrow)</p>
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} />
    ))}
  </Layout>
)
}
