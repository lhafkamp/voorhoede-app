import React from 'react'

const Tag = ({ onClick, tag }) => (
  <React.Fragment>
    <input id={`tag-${tag}`} onClick={onClick} type="checkbox" value={tag} />
    <label htmlFor={`tag-${tag}`}>{tag}</label>
  </React.Fragment>
)

export default Tag
