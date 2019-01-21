import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import NotFoundPage from './NotFoundPage'

const ProjectPage = ({ match }) => (
  <Query
    query={gql`
      {
        project(language: en, slug: "${match.params.projectPage}") {
          title
          subtitle
          excerpt
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <NotFoundPage />

      const { title, subtitle, excerpt } = data.project

      return <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{excerpt}</p>
      </div>
    }}
    
  </Query>
)

export default ProjectPage
