import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import NotFoundPage from './NotFoundPage'

const PageRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/:projectPage" component={ProjectPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default PageRoutes
