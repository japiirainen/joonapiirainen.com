import React from "react"
import Layout from "./components/layout"
import PostPreview from "./components/post-preview"
import usePosts from "./hooks/use-posts"

export default () => {
  const posts = usePosts()

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
