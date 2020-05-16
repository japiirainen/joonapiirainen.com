import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadLink from "./read-link"

const PostPreview = ({ post }) => (
<article
    css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 1rem;
        padding-bottom: 1rem;

        :first-of-type {
            margin-top: 2rem;
            
        }

        a {
            text-decoration: underline;
            text-decoration-style: dashed;
            color: #222;
            
        }
    `}
>
<h2><Link to={post.slug}>{post.title}</Link></h2>
<p>{post.excerpt}</p>
<ReadLink to={post.slug}>Read this post &rarr;</ReadLink>
</article>
)

export default PostPreview