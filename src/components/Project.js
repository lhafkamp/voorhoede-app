import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ title, slug, tags }) => (
  <Link to={slug} className="project">
    <p>{title}</p>
    <ul>
      {tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  </Link>
)

export default Project
