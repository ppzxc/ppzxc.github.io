import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import DefaultCss from "./default.css"
import GithubMarkDown from "./github-markdown.css"

export default function Template({ data }) {
  // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1
            style={{
              borderBottom: `dotted 2px #ff6633`,
              display: `table`,
              marginLeft: `auto`,
              marginRight: `auto`,
              textIndent: `0`,
              textAlign: `center`,
          }}>
            <p/>
            {frontmatter.title}
          </h1>
          <h2
            style={{
              textAlign: `center`,
            }}
          >
            {frontmatter.date}
          </h2>
          <div
            style={GithubMarkDown}
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        slug
        title
      }
    }
  }
`

// const Template = ({ data, }) => {
//   const { markdownRemark } = data;
//   const { title, date } = markdownRemark.frontmatter;
//   const { html, timeToRead } = markdownRemark;
//
//   console.log(data)
//
//   return (
//     <div>
//       <div className="post-wrapper">
//         <div>{title}</div>
//         <div>
//           <p>{date}.</p>
//           <p>{timeToRead} min read.</p>
//         </div>
//         <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
//       </div>
//     </div>
//   )
// }
//
// export default Template
