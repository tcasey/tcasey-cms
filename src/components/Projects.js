import React from "react";
import Link from "gatsby-link";
import ReactSVG from "react-svg";

const ProjectGrid = ({ gridItems }) => (
  <div className="projects">
    {gridItems.map(item => (
      <article>
        <Link to={item.path} key={item.path}>
          <div
            className="content"
            style={{
              border: "1px solid #eaecee",
              padding: "2em 4em",
              margin: "2em 0 2em 0",
              position: "relative"
            }}
          >
            <div className="project-text">
              <div style={{ fontSize: "x-large" }}>
                {item.title || "project"}
              </div>
              <div>{item.role || "All the Things"}</div>
              <div>Produced in {item.year || "NaN"}.</div>
            </div>
            <div
              style={{
                height: "100px",
                width: "100%"
              }}
            />
            <div className="projects-image-container">
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
              <ReactSVG
                path={item.image}
                className="projects-svg"
                evalScript="always"
                style={{ height: 120, width: 180 }}
              />
              {/* <img className="projects-image" src={item.image} /> */}
            </div>
          </div>
        </Link>
      </article>
    ))}
  </div>
);

export default ProjectGrid;
