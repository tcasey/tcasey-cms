import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import ReactSVG from "react-svg";
import Particles from "react-particles-js";

import Content, { HTMLContent } from "../components/Content";
import GoBack from "../components/GoBack";
import GoTo from "../components/GoTo";
import GoDown from "../components/GoDown";
import DemoiMac from "../components/DemoiMac";
import DemoiPhone from "../components/DemoiPhone";

export const ProjectTemplate = ({
  content,
  contentComponent,
  headline,
  description,
  title,
  next,
  color,
  projectClass,
  helmet,
  date,
  role,
  projectLink,
  projectPath,
  projectImage,
  demoImage,
  platform
}) => {
  const ProjectContent = contentComponent || Content;
  return (
    <section className="project-detail">
      {helmet ? helmet : ""}
      <div className="content">
        <div
          className="project-background content"
          style={{ backgroundColor: color }}
        >
          <div className="container section top project-container">
            <h1 className="has-text-weight-bold is-size-1">{title}</h1>
            <h2 className="subtitle has-text-weight-bold is-size-5">
              {headline}
            </h2>
          </div>
          <div className="container bottom" />
          <Particles
            params={{
              particles: {
                size: {
                  value: 4
                },
                number: {
                  value: 20,
                  density: {
                    enable: true
                  }
                },
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#f3f3f3",
                    blur: 5
                  }
                },
                move: {
                  enable: true,
                  speed: 4,
                  random: true
                }
              }
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0
            }}
          />
        </div>
        <div className="container">
          {/* <div className="columns">
            <div className="column section">
              <p className="is-size-5">{description}</p>
            </div>
          </div> */}
          <div className="flex-center columns flex-column center">
            {platform === "Web app" ? (
              <DemoiMac demoImage={demoImage} />
            ) : (
              <DemoiPhone demoImage={demoImage} />
            )}
            <div className="column project-description">
              <p className="is-size-5">{description}</p>
            </div>
            <div className="column">
              <h2>Year</h2>
              <span>{date}</span>
            </div>
            <div className="column">
              <h2>Responsibilty</h2>
              <span>{role}</span>
            </div>
            <div className="column content-wrapper">
              <ProjectContent content={content} />
            </div>
          </div>
          <div className="center" style={{ padding: 0, margin: 0 }}>
            <h2>Demo:</h2>
            {/* <GoDown /> */}
          </div>
          <div className="center flex-around">
            <GoBack />
            <a href={projectLink} target="_blank">
              <ReactSVG
                path={projectImage}
                className="projects-svg"
                evalScript="always"
                style={{ height: 160, width: 160, padding: 24 }}
              />
            </a>
            <GoTo link={next} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <ProjectTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      headline={post.frontmatter.headline}
      helmet={<Helmet title={`Project | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      projectClass={post.frontmatter.class}
      next={post.frontmatter.next}
      color={post.frontmatter.color}
      date={post.frontmatter.date}
      role={post.frontmatter.role}
      projectLink={post.frontmatter.link}
      projectPath={post.frontmatter.post}
      projectImage={post.frontmatter.image}
      demoImage={post.frontmatter.demoImage}
      platform={post.frontmatter.platform}
    />
  );
};

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "YYYY")
        title
        description
        color
        headline
        next
        class
        role
        link
        image
        demoImage
        platform
      }
    }
  }
`;
