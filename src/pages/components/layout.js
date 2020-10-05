import React from "react"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            font-family: "DM Mono", monospace;
            font-size: 20px;
            line-height: 1.5;
            min-height: calc(100vh - 211px -58px);

            /*remove margin for main div gatsby mounts to.*/
            > div {
              margin-top: 0;
            }
            body {
              background-color: #fff;
              color: #333;
              transition: background-color 0.3s ease;

              a {
                color: #333;
              }
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }
            strong {
            }

            li {
              margin-top: 0.25rem;
            }
          }
          h2 {
            margin: 2.5rem auto 1.5rem auto;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>Joonapiirainen</title>
        <meta name="description" content="My new personal site." />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 600px;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
