import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import ShowJobs from '../ShowJobs'
import Loading from '../Loading'
import NotFoundPage from './NotFoundPage'

class CasesZoomPage extends React.Component {
  constructor() {
    super()
    this.decompressImages = this.decompressImages.bind(this)
  }

  decompressImages() {
    const images = document.querySelectorAll('.cases-body img')
    
    images.forEach(img => {
      const lastChar = img.src[img.src.length -1]
      if (!isNaN(lastChar)) {
        img.src += '0'
      }
    })
  }

  render() {
    return (
      <Query
          query={gql`
            {
              project(language: en, slug: "${this.props.match.params.projectPage}") {
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
          if (loading) return <Loading />
          if (error) return <NotFoundPage />

          const { title, body } = data.project
          const { jobs } = data

          return (
            <div id="cases-zoom-page">
              <article>
                <h1>{title}</h1>
                <div className="yellow-bg"></div>
              </article>
              <div className="cases-body">
                <div ref={this.decompressImages} dangerouslySetInnerHTML={{ __html: body }}></div>
              </div>
              <ShowJobs jobs={jobs} />
            </div>
          )
        }}
      </Query>
    )
  }
}

export default CasesZoomPage
