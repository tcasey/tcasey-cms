import React from 'react'
import Link from 'gatsby-link'

const ProjectGrid = ({ gridItems }) => (
  <div className="projects">
    {gridItems.map(item => (
      <Link
        to={item.path}
        key={item.path}
      >
        <div
          className="content"
          style={{ border: '1px solid #eaecee', padding: '2em 4em', margin: '2em 0 2em 0' }}
        >
          <h3>
            {item.title || 'project'}
          </h3>
            <p>{item.role || 'All the Things'}</p>
            <p>Produced in {item.year || 'NaN'}.</p>
          <div className="projects-image-container">
            <div>→</div>
            <img className="projects-image" src={item.image} />
          </div>
        </div>
        </Link>
     ))}
  </div>
)

export default ProjectGrid
