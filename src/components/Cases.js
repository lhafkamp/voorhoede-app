import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Project from './Project'
import usedTech from '../usedTech'

const Cases = ({ tagsToShow }) => (
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

          if (!tagsToShow.length) {
            return <Project key={title} title={title} slug={slug} tags={tags} /> 
          } else {
            const includesTag = tagsToShow.filter(tag => tags.includes(tag))
            return includesTag.length > 0 ? <Project key={title} title={title} slug={slug} tags={tags} /> : null
          }
        })
      }}
    </Query>
    <div className="white-bg"></div>
  </div>
)

export default Cases
