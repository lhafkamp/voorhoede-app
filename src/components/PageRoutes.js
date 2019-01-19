import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import NotFoundPage from './NotFoundPage'

const PageRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:projectPage" component={ProjectPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default PageRoutes
