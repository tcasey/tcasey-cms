import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ReactSVG from 'react-svg'

import Content, { HTMLContent } from '../components/Content'
import GoBack from '../components/GoBack'
import GoTo from '../components/GoTo'
import DemoiMac from '../components/DemoiMac'
import DemoiPhone from '../components/DemoiPhone'
import Layout from '../components/Layout'

export const ProjectTemplate = ({
  content,
  contentComponent,
  headline,
  description,
  title,
  next,
  color,
  // projectClass,
  helmet,
  date,
  role,
  projectLink,
  // projectPath,
  projectImage,
  demoImage,
  platform,
}) => {
  const ProjectContent = contentComponent || Content
  return (
    <section className="project-detail">
      {helmet ? helmet : ''}
      <div className="content">
        <div
          className="project-background content"
          style={{ backgroundColor: color }}
        >
          <div className="container section top project-container">
            <h1 className="has-text-weight-bold is-size-1">{title}</h1>
            <h2 className="subtitle has-text-weight-bold is-size-5">
              {headline}
            </h2>
          </div>
          <div className="container bottom" />
        </div>
        <div className="container">
          {/* <div className="columns">
            <div className="column section">
              <p className="is-size-5">{description}</p>
            </div>
          </div> */}
          <div className="flex-center columns flex-column center">
            {platform === 'Web app' ? (
              <DemoiMac demoImage={demoImage} />
            ) : (
              <DemoiPhone demoImage={demoImage} />
            )}
            <div className="column project-description">
              <p className="is-size-5">{description}</p>
            </div>
            <div className="column">
              <h2>Year</h2>
              <span>{date}</span>
            </div>
            <div className="column">
              <h2>Responsibilty</h2>
              <span>{role}</span>
            </div>
            <div className="column content-wrapper">
              <ProjectContent content={content} />
            </div>
          </div>
          <div className="center" style={{ padding: 0, margin: 0 }}>
            <h2>Demo:</h2>
            {/* <GoDown /> */}
          </div>
          <div className="center flex-around">
            <GoBack />
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <ReactSVG
                path={projectImage}
                className="projects-svg"
                evalScript="always"
                style={{ height: 160, width: 160, padding: 24 }}
              />
            </a>
            <GoTo link={next} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        headline={post.frontmatter.headline}
        helmet={<Helmet title={`Project | ${post.frontmatter.title}`} />}
        title={post.frontmatter.title}
        projectClass={post.frontmatter.class}
        next={post.frontmatter.next}
        color={post.frontmatter.color}
        date={post.frontmatter.date}
        role={post.frontmatter.role}
        projectLink={post.frontmatter.link}
        projectPath={post.frontmatter.post}
        projectImage={post.frontmatter.image.publicURL}
        demoImage={
          post.frontmatter.demoImage && post.frontmatter.demoImage.publicURL
        }
        platform={post.frontmatter.platform}
      />
    </Layout>
  )
}

export const projectQuery = graphql`
  query ProjectByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        date(formatString: "YYYY")
        title
        description
        color
        headline
        next
        class
        role
        link
        image {
          publicURL
        }
        demoImage {
          publicURL
        }
        platform
      }
    }
  }
`
