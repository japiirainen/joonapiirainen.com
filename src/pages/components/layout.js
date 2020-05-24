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
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            background-color: #f5f6fa;
            margin: 0;
            color: #555;
            font-family: "DM Mono", monospace;
            font-size: 20px;
            line-height: 1.5;
            min-height: calc(100vh - 211px -58px);

            /*remove margin for main div gatsby mounts to.*/
            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }
            strong {
              color: #222;
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
          width: 550px;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
