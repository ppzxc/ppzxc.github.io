import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout style={{
    padding: "0",
    magin: "0"
  }}>
    <SEO title="Home" />
    <Posting data={data} />

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "avenir",
        background: "#9DC8C8"
      }}
    >
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div
            key={frontmatter.id}
            style={{
              margin: "5px",
              padding: "5px",
              boxSizing: "border-box",
              width: "50%",
              // border: "solid #58C9B9 1px",
              border: "solid #519D9E 1px",
              background: "#519D9E",
              display: "inline-block"
            }}
          >
            <Link
              to={frontmatter.slug}
              style={{
                color: "white",
                textDecoration: "none",
                position: "relative",
                alignItems: "center"
              }}>
              <div>
                {frontmatter.title}
              </div>
              {/*<div style={{*/}
              {/*  position: "relative",*/}
              {/*  width: "400px",*/}
              {/*  height: "200px"*/}
              {/*}}*/}
              {/*>*/}
              {/*  {frontmatter.title}*/}
              {/*</div>*/}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
