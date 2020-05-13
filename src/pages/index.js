import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

export default () => (
  <Layout>
    <h1>Hello All!</h1>
    <p>Good morning people</p>
    <Link to="/about/">about me &rArr;</Link>
  </Layout>
)
