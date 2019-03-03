// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { graphql } from 'gatsby'
// import NavBar from '../components/NavBar'
// import Footer from '../components/Footer'
// import Overlay from '../components/Overlay'
// import './all.sass'

// export default class TemplateWrapper extends Component {
//   constructor(props) {
//     super(props)
//     this.toggleMenu = this.toggleMenu.bind(this)
//     this.state = {
//       menu: false,
//     }
//   }
//   toggleMenu() {
//     const menu = !this.state.menu
//     this.setState({ menu })
//   }
//   render() {
//     const { children } = this.props
//     const { menu } = this.state
//     return (
//       <div>
//         <Helmet title="Trevor Casey | JavaScript Developer" />
//         <NavBar menu={menu} toggleMenu={this.toggleMenu} />
//         <Overlay menu={menu} toggleMenu={this.toggleMenu} />
//         <main style={{ width: '100vw' }}>{children()}</main>
//         <Footer />
//       </div>
//     )
//   }
// }
// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// }

// export const query = graphql`
//   fragment LayoutFragment on Query {
//     ...ProjectFragment
//     homePageData: allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "home-page" } } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             templateKey
//             intro {
//               heading
//               blurbs {
//                 icon
//                 title
//                 description
//               }
//             }
//             form {
//               title
//               text
//             }
//           }
//         }
//       }
//     }
//     footerData: allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "footer" } } }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             logoImage {
//               image {
//                 childImageSharp {
//                   fluid(maxWidth: 400, quality: 92) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//               imageAlt
//               tagline
//             }
//             copyright
//             socialLinks {
//               image {
//                 childImageSharp {
//                   fluid(maxWidth: 400, quality: 92) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//               imageAlt
//               label
//               linkURL
//             }
//           }
//         }
//       }
//     }
//     navbarData: allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "navbar" } } }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             logoImage {
//               image {
//                 childImageSharp {
//                   fluid(maxWidth: 400, quality: 92) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//             menuItems {
//               label
//               linkType
//               linkURL
//               linkIcon
//             }
//           }
//         }
//       }
//     }
//   }
// `
