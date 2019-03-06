import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import ReactSVG from 'react-svg'

const styles = {
  title: {
    fontSize: 24,
  },
  role: {
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: 2,
    fontWeight: 600,
  },
  year: {
    fontSize: 12,
    fontWeight: 800,
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
        {this.props.gridItems.map(item => (
          <article style={smallStyle} key={item.path}>
            <Link to={`/${item.path}`}>
              <div
                className={`content ${item.class}`}
                style={{
                  border: '1px solid #eaecee',
                  padding: '2em 4em',
                  margin: '2em 0 2em 0',
                  position: 'relative',
                }}
              >
                <div className="project-text">
                  <span css={styles.role}>{item.role || 'All the Things'}</span>
                  <span css={styles.title}>{item.title || 'project'}</span>
                  <span css={styles.year}>
                    Produced in {item.year || 'NaN'}.
                  </span>
                </div>
                <div
                  style={{
                    height: '100px',
                    width: '100%',
                  }}
                />
                <div className="projects-image-container">
                  {this.props.small ? null : (
                    <svg
                      className="icon-big-arrow-right"
                      width="50px"
                      height="20px"
                      viewBox="0 0 29.3 5.8"
                      enableBackground="new 0 0 29.3 5.8"
                    >
                      <path
                        className="st0"
                        fill="#fff"
                        d="M25.8 0l-.6.8 1.9 1.6h-27.1v1h27.1l-1.9 1.6.6.8 3.5-2.9z"
                      />
                    </svg>
                  )}
                  <div>
                    <ReactSVG
                      path={item.image.publicURL}
                      className="projects-svg"
                      evalScript="always"
                      style={{ height: 120, width: 180 }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
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
    }
  }
`
