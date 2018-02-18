import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import ReactSVG from "react-svg";
import Content, { HTMLContent } from "../components/Content";
import GoBack from "../components/GoBack";
import GoTo from "../components/GoTo";

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
  projectImage
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
          <div className="container section top">
            <h1 className="has-text-weight-bold is-size-1">{title}</h1>
            <p className="subtitle has-text-weight-bold ">{headline}</p>
          </div>
          <div className="container bottom">
            {/* <div className="columns is-flex" style={{ width: "100%" }}>
              <div className="column">
                <h5>Responsibilty</h5>
                <span>{role}</span>
              </div>
              <div className="column is-one-quarter-mobile">
                <h5>Year</h5>
                <span>{date}</span>
              </div>
              <div className="column is-one-quarter-mobile link">
                <h5>Project</h5>
                <span>
                  <a href={projectLink}>Demo</a>
                </span>
              </div>
              <div className="column">
                <h5>Share</h5>
                <span>{date}</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column section">
              {/* <ProjectContent content={content} /> */}
              {/* <h2 className="has-text-weight-bold is-size-2">{title}</h2> */}
              <p>{description}</p>
            </div>
          </div>
          <div className="center columns flex-column">
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
      }
    }
  }
`;
