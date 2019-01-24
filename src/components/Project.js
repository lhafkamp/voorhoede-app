import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ title, slug, tags }) => (
  <Link to={`cases/${slug}`} className="project">
    <p>{title}</p>
    <div>
      <ul>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </div>
  </Link>
)

export default Project
