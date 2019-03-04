import React from 'react'
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
    <Layout>
      <section className="section section--gradient">
        <div className="container projects-container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          <div className="content">
            <Projects gridItems={intro.goodies} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ProjectPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
    />
  )
}

export const projectPageQuery = graphql`
  query ProjectPage($slug: String!) {
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
            title
            year
            role
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
