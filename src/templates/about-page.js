import React from 'react'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  image,
}) => {
  const PageContent = contentComponent || Content
  return (
    <section className="section section--gradient">
      <div className="container about-container">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">{title}</h1>
        </div>
        {image && <PreviewCompatibleImage imageInfo={image} />}
        <div className="columns">
          <div className="column">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout navbarType="is-primary">
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 400, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
