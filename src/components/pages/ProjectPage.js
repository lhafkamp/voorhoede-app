import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import ShowJobs from '../ShowJobs'
import NotFoundPage from './NotFoundPage'

const ProjectPage = ({ match }) => (
  <Query
    query={gql`
      {
        project(language: en, slug: "${match.params.projectPage}") {
          title
          body
        }
        jobs(language: en) {
          title
          url
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <NotFoundPage />

      const { title, body } = data.project
      const { jobs } = data

      return (
        <div id="project-page">
          <article>
            <h1>{title}</h1>
            <div class="yellow-bg"></div>
          </article>
          <div className="project-body">
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
          <ShowJobs jobs={jobs} />
        </div>
      )
    }}
    
  </Query>
)

export default ProjectPage
