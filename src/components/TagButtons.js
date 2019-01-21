import React from 'react'
import usedTech from '../usedTech'

import Tag from './Tag'

const TagButtons = ({ onClick }) => (
  <div className="tag-buttons">
    <p>Filter on tech: </p>
    <div>
      {usedTech().map(tech => <Tag onClick={onClick} key={tech} tag={tech} />)}
    </div>
  </div>
)

export default TagButtons
