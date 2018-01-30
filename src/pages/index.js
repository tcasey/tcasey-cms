import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Script from "react-load-script";
import Group from "../components/Group";
import ProjectGrid from "../components/Projects";

export const HomePageTemplate = ({
  image,
  title,
  description,
  intro,
  main,
  testimonials
}) => {
  const data = intro.goodies.filter((i, index) => index < 2);

  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <ProjectGrid gridItems={data} small />
        </div>
      </div>
    </section>
  );
};

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
  }
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    console.log(frontmatter);
    return (
      <section className="section is-medium">
        <div className="container content">
          <div className="columns">
            <div className="column">
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                Some of my Latest Work
              </h2>
              <HomePageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                description={frontmatter.description}
                intro={frontmatter.intro}
              />
              {/* <p>{description}</p> */}
            </div>
          </div>
        </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container" />
      </section>
    );
  }
}

export const homePageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { path: { eq: "/projects" } }) {
      frontmatter {
        title
        path
        image
        description
        intro {
          goodies {
            image
            title
            year
            role
            path
          }
          heading
          description
        }
      }
    }
  }
`;
