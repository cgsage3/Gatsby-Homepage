import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEOHead from "../components/head"

export default function Page(props) {
  const { page } = props.data

    console.log(page)

  return (
    <Layout>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          {page.image && (
            <GatsbyImage
              alt={page.image.alt}
              image={getImage(page.image.gatsbyImageData)}
              
            />
          )}            
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}
export const Head = (props) => {
  const { page } = props.data
  return <SEOHead {...page} />
}
export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
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
