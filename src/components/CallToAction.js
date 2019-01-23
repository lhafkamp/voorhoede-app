import React from 'react'

const CallToAction = ({ onClick }) => (
  <article className="call-to-action">
    <p>Want to join us?</p>
    <span onClick={onClick} className="basic-button">Let's do this!</span>
  </article>
)

export default CallToAction
