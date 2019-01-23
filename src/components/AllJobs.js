import React from 'react'

import BasicButton from './BasicButton'

const AllJobs = ({ jobs, show, onClick }) => (
  <article className={`jobs ${show ? 'show' : 'hide'}`}>
    <h2>Join our team!</h2>
    <div>
      {jobs.map(job => <BasicButton key={job.title} text={job.title} link={job.url} />)}
    </div>
    <span className="basic-button" onClick={onClick}>x</span>
  </article>
)

export default AllJobs
