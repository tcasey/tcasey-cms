import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Color } from '../constants'

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
    paddingTop: 4,
  },
  date: {
    fontSize: 12,
    color: Color.BLACK,
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
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: 16,
  },
  block: {
    padding: '2em 2em 2em 0',
  },
  overlay: {
    width: 240,
    height: 215,
    backgroundColor: 'rgba(0, 0, 0, .035)',
    position: 'absolute',
    zIndex: 99,
    borderRadius: 4,
  },
}
// className={css(styles.container)}
export default class ProjectGrid extends Component {
  render() {
    const smallStyle = this.props.smallio
      ? {
          maxWidth: '360px',
          position: 'relative',
          float: 'left',
          paddingRight: '20px',
        }
      : null

    return (
      <div className="projects">
        <div css={styles.wrapper}>
          {this.props.gridItems.map(item => (
            <Link to={`/${item.path}`} key={`${item.path}-${item.title}`}>
              <div css={styles.block}>
                <>
                  <div css={styles.overlay} />
                  {item.thumbnail && (
                    <PreviewCompatibleImage
                      style={styles.image}
                      imageInfo={item.thumbnail}
                    />
                  )}
                </>
                <span css={styles.title}>{item.title}</span>
                <br />
                <span css={styles.date}>{item.year}</span>
                <br />
                <div css={styles.description}>{item.headline}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export const query = graphql`
  fragment ProjectFragment on Query {
    projectData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "projects-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            image {
              publicURL
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
    }
  }
`
