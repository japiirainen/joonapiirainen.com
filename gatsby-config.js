/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Joonapiirainen',
        description: 'My new personal site.',
    },

    /* Your site config here */
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-use-dark-mode',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve(
                        './src/pages/components/layout.js'
                    ),
                },
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 75,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /src/,
                },
            },
        },
        `gatsby-remark-images`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 200,
                        },
                    },
                ],
            },
        },
    ],
}
