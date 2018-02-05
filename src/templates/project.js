import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Helmet from "react-helmet";
import Link from "gatsby-link";

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  title,
  next,
  color,
  projectClass,
  helmet,
  date,
  role,
  projectLink,
  projectPath
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
          </div>
          <div className="container bottom">
            <div className="columns is-flex" style={{ width: "100%" }}>
              <div className="column">
                <h5>Responisibilty</h5>
                <span>{role}</span>
              </div>
              <div className="column is-one-quarter-mobile">
                <h5>Year</h5>
                <span>{date}</span>
              </div>
              <div className="column is-one-quarter-mobile link">
                <h5>Project</h5>
                <span>
                  <Link to={projectLink}>Demo</Link>
                </span>
              </div>
              {/* <div className="column">
                <h5>Share</h5>
                <span>{date}</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column section">
              {/* <ProjectContent content={content} /> */}
              <h2 className="has-text-weight-bold is-size-2">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <h3 className="center">
            Checkout my next{" "}
            <Link to={next} className={projectClass}>
              project
            </Link>
          </h3>
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
      helmet={<Helmet title={`Project | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      projectClass={post.frontmatter.class}
      next={post.frontmatter.next}
      color={post.frontmatter.color}
      date={post.frontmatter.date}
      role={post.frontmatter.role}
      projectLink={post.frontmatter.link}
      projectPath={post.frontmatter.post}
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
        next
        class
        role
        link
      }
    }
  }
`;
