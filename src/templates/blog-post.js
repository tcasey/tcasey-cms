import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  tags,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Layout>
      <section className="section">
        {helmet ? helmet : ''}
        <div className="container content blog-container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      tags={post.frontmatter.tags}
    />
  )
}

export const blogPageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
