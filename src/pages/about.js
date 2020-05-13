import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>I am Joona Piirainen</p>
    <Link to="/">&lArr; home</Link>
  </Layout>
)
