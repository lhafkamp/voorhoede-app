import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Case from './Case'
import usedTech from '../usedTech'
import Loading from './Loading'

const Cases = ({ tagsToShow }) => (
  <div id="cases">
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
        if (loading) return <Loading />
        if (error) return <p>Error</p>

        return data.projects.map(({ title, slug, body }) => {
          const tags = []
          usedTech().forEach(tech => body.includes(tech) ? tags.push(tech) : null)

          if (!tagsToShow.length) {
            return <Case key={title} title={title} slug={slug} tags={tags} /> 
          } else {
            const includesTag = tagsToShow.filter(tag => tags.includes(tag))
            return includesTag.length > 0 ? <Case key={title} title={title} slug={slug} tags={tags} /> : null
          }
        })
      }}
    </Query>
  </div>
)

export default Cases
