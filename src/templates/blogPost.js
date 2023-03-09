import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

function blogPost({ data }) {
  return (
    <div>
      <img
        src={data.post.postImage.fluid.src}
        alt={data.post.postImage.title}
      ></img>
      <h1>{data.post.postTitle}</h1>
      <h3
        dangerouslySetInnerHTML={{
          __html: data.post.postContent.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default blogPost