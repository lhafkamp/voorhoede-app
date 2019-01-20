import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Project from './Project'
import usedTech from '../usedTech'

const Cases = () => (
  <div id="projects">
    <Query
      query={gql`
        {
          projects(language: en) {
            title
            slug
            body
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return data.projects.map(({ title, slug, body }) => {
          const tags = []
          usedTech().forEach(tech => body.includes(tech) ? tags.push(tech) : null)

          return <Project key={title} title={title} slug={slug} tags={tags} />
        })
      }}
    </Query>
    <div class="white-bg"></div>
  </div>
)

export default Cases
