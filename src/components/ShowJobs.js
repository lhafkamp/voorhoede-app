import React, { Component } from 'react';

import AllJobs from './AllJobs'
import CallToAction from './CallToAction'

class ShowJobs extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div id="show-jobs">
        {!this.state.show && <CallToAction onClick={this.clickHandler} />}
        <AllJobs jobs={this.props.jobs} show={this.state.show} onClick={this.clickHandler} />
      </div>
    )
  }
}

export default ShowJobs
