import React, { Component } from 'react'

import Cases from '../Cases'
import TagButtons from '../TagButtons'

class CasesPage extends Component {
  constructor() {
    super()
    this.state = {
      selectedTags: []
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    const { selectedTags } = this.state
    const add = [...selectedTags, e.target.value]
    const remove = selectedTags.filter(selected => selected !== e.target.value)

    this.setState({
      selectedTags: e.target.checked ? add : remove
    })
  }

  render() {
    return (
      <section id="cases-page">
        <article>
          <h1>Take a look at what we worked with</h1>
          <div className="yellow-bg"></div>
        </article>
        <TagButtons onClick={this.clickHandler} />
        <Cases tagsToShow={this.state.selectedTags} />
      </section>
    );
  }
}

export default CasesPage
