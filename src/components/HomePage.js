import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Project from './Project'

const HomePage = () => (
  <div id="projects">
    <Query
      query={gql`
        {
          projects(language: en) {
            title
            slug
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return data.projects.map(({ title, slug }) => (
          <Project key={title} title={title} slug={slug} />
        ))
      }}
    </Query>
  </div>
)

export default HomePage
