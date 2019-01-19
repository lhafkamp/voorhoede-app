import React from 'react'

const BasicButton = (props) => (
  <a href={props.link} className="basic-button">{props.text}</a>
)

export default BasicButton
