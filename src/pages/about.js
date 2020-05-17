import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

export default () => (
  <Layout>
    <h1>About me:</h1>
    <p>I am Joona Pirainen, a 22 years old guy from Southern-Finland.</p>
    <p>Currently interested in software engineering and crossfit. </p>
    <Link to="/">&lArr; home</Link>
  </Layout>
)
