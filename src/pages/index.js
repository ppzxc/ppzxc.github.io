import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Posting data={data}/>

    {/*<h1>Hi people</h1>*/}
    {/*<p>Welcome to your new Gatsby site.</p>*/}
    {/*<p>Now go build something great.</p>*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
    {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
    {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
  </Layout>
)

const Posting = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "avenir"
    }}>
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div
            key={frontmatter.slug}
            style={{ marginBottom: "1rem" }}
          >
            <Link to={frontmatter.slug}>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql
  `
  query HomepageQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    } 
  }
`

export default IndexPage
