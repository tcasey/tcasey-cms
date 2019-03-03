const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    // Filter out the footer, and navbar so we don't create pages for those
    const postOrPage = posts.filter(edge => {
      if (edge.node.frontmatter.templateKey === 'navbar') {
        return false
      } else if (edge.node.frontmatter.templateKey === 'footer') {
        return false
      } else {
        return true
      }
    })

    postOrPage.forEach(edge => {
      let component, pathName
      if (edge.node.frontmatter.templateKey === 'home-page') {
        pathName = '/'
        component = path.resolve(`src/pages/index.js`)
      } else {
        pathName = edge.node.frontmatter.path || edge.node.fields.slug
        component = path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        )
      }

      const id = edge.node.id
      createPage({
        path: pathName,
        tags: edge.node.frontmatter.tags,
        component,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
