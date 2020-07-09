import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import ReadLink from './read-link'

const PostPreview = ({ post }) => {
    return (
        <>
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
                    }
                `}
            >
                <h2>
                    <Link to={post && post.slug}>{post && post.title}</Link>
                </h2>
                <p>{post && post.excerpt}</p>
                <ReadLink to={post && post.slug}>
                    Read this post &rarr;
                </ReadLink>
            </article>
        </>
    )
}

export default PostPreview
