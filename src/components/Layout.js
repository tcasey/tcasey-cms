import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { Navbar } from './NavBar'
import Overlay from './Overlay'
// import MobileNavigation from './MobileNavigation'
import Footer from './Footer'
import '../styles/all.sass'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      menu: false,
    }
  }
  toggleMenu() {
    const menu = !this.state.menu
    this.setState({ menu })
  }
  render() {
    const { children, navbarData, footerData } = this.props
    const { menu } = this.state
    return (
      <div>
        <Helmet title="Trevor Casey | JavaScript Developer" />
        <Navbar data={navbarData} menu={menu} toggleMenu={this.toggleMenu} />
        <Overlay menu={menu} toggleMenu={this.toggleMenu} />
        <main style={{ width: '100vw' }}>{children}</main>
        <Footer data={footerData} />
        {/* <MobileNavigation data={navbarData} /> */}
      </div>
    )
  }
}

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "footer" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image {
                id
                name
                publicURL
              }
              imageAlt
              tagline
            }
            copyright
            socialLinks {
              image {
                id
                name
                publicURL
              }
              imageAlt
              label
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "navbar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image {
                id
                name
                publicURL
              }
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
              linkIcon
            }
          }
        }
      }
    }
  }
`

export default TemplateWrapper
