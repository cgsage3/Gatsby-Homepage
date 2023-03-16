import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEOHead from "../components/head"

export default function Post(props) {
  const { post } = props.data

    console.log(post)
  return (
    <Layout>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{post.title}</Heading>
          {post.image && (
            <GatsbyImage
              alt={post.image.alt}
              image={getImage(post.image.gatsbyImageData)}
              
            />
          )}           
          <div
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
                     
        </Container>
      </Box>
    </Layout>
  )
}
export const Head = (props) => {
  const { post } = props.data
  return <SEOHead {...post} />
}
export const query = graphql`
  query PostContent($id: String!) {
    post(id: { eq: $id }) {
      id
      title
      slug
      image {
        id
        url
        alt
        gatsbyImageData
      }
      html
    }
  }
`
