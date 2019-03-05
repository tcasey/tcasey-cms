import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  tags,
  slug,
  discussUrl,
}) => {
  const PostContent = contentComponent || Content
  return (
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
            <div
              style={{
                marginTop: `2rem`,
                fontWeight: '600',
                textTransform: 'uppercase',
                fontSize: 14,
              }}
            >
              <a href={discussUrl} target="_blank" rel="noopener noreferrer">
                Discuss on Twitter
              </a>
            </div>
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
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data
  const { slug } = post.frontmatter
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://www.tcasey.me/${slug}`
  )}`

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        slug={slug}
        discussUrl={discussUrl}
      />
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
