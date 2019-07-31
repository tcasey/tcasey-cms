import React from 'react'
import { Link, graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

const styles = {
  container: {
    padding: '3rem 1.5rem',
  },
  image: {
    width: 240,
    height: 215,
    // marginBottom: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 8,
    position: 'absolute',
    paddingTop: 4
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: 16,
  },
  block: {
    padding: '2em 2em 2em 0',
  },
  date: {
    fontSize: 12,
    color: '#02081A',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 16,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  },
}

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { navbarData, footerData, blogData } = data

    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <section css={styles.container}>
          <div className="container content">
            <div className="column is-10">
              <div className="columns">
                <div className="container blog-container">
                  <div className="content">
                    <h1 className="has-text-weight-bold is-size-2">Blog</h1>
                  </div>
                  <div css={styles.wrapper}>
                    {blogData.edges.map(({ node: post }) => {
                      return (
                        <div key={post.id} css={styles.block}>
                          <Link to={`/${post.frontmatter.slug}`}>
                            <PreviewCompatibleImage
                              style={styles.image}
                              imageInfo={post.frontmatter.thumbnail}
                            />
                          </Link>
                          <Link
                            css={styles.title}
                            to={`/${post.frontmatter.slug}`}
                          >
                            {post.frontmatter.title}
                          </Link>
                          <br />
                          <span css={styles.date}>{post.frontmatter.date}</span>
                          <br />
                          <div css={styles.description}>
                            {post.frontmatter.description}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    ...LayoutFragment
    blogData: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 300, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
          }
        }
      }
    }
  }
`
