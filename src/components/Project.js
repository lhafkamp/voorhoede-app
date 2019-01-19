import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ title, slug }) => (
  <Link to={slug} className="project">
    <p>{title}</p>
  </Link>
)

export default Project
