import React from 'react'

const Project = ({ title, slug }) => (
  <a href={slug} className="project">
    <p>{title}</p>
  </a>
)

export default Project
