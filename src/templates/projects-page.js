import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Layout from '../components/Layout'

export const ProjectPageTemplate = ({
  image,
  title,
  description,
  intro,
  main,
  testimonials,
}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">{title}</h1>
        </div>
        <div className="content">
          <Projects gridItems={intro.goodies} />
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { footerData, navbarData } = data
  return (
    <Layout
      navbarType="is-primary"
      footerData={footerData}
      navbarData={navbarData}
    >
      <ProjectPageTemplate
        image={frontmatter.image}
        thumbnail={frontmatter.thumbnail}
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

export const projectPageQuery = graphql`
  query ProjectPage($slug: String!) {
    ...LayoutFragment
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        path
        image {
          childImageSharp {
            fluid(maxWidth: 400, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        intro {
          goodies {
            image {
              publicURL
            }
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 300, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            year
            role
            headline
            path
            class
            color
          }
          heading
          description
        }
      }
    }
  }
`
