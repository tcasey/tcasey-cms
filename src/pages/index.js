import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { get } from 'lodash'
import Script from 'react-load-script'
import ProjectGrid from '../components/Projects'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const HomePageTemplate = ({
  // image,
  // title,
  // description,
  // intro,
  // main,
  // testimonials,
  goodies,
}) => {
  const data = goodies.filter((i, index) => index < 3)

  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <ProjectGrid gridItems={data} />
        </div>
      </div>
    </section>
  )
}

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      scrollY: 0,
    }
  }
  handleScroll(e) {
    this.setState({ scrollY: e.currentTarget.scrollY })
  }
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const {
      data: { footerData, navbarData, homePageData, projectData },
    } = this.props
    const { frontmatter } = homePageData.edges[0].node
    const { goodies } = projectData.edges[0].node.frontmatter.intro
    const { scrollY } = this.state

    return (
      <Layout
        navbarType="is-light"
        footerData={footerData}
        navbarData={navbarData}
      >
        <Hero scrollY={scrollY} />
        <div className="container content">
          <div className="container section is-mobile home-container">
            <div>
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                Some of my Latest Work
              </h2>
              <HomePageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                description={frontmatter.description}
                intro={frontmatter.intro}
                goodies={goodies}
              />
              {/* <p>{description}</p> */}
              <div className="flex-center">
                <Link to="/projects" className="btn-gradient">
                  More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query HomePage {
    ...LayoutFragment
    ...ProjectFragment
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export { HomePageTemplate, HomePage }
