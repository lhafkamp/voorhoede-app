import React from 'react'
import { Route, Switch } from 'react-router-dom'

import IntroPage from './IntroPage'
import CasesPage from './CasesPage'
import ProjectPage from './ProjectPage'
import NotFoundPage from './NotFoundPage'

const PageRoutes = () => (
  <Switch>
    <Route exact path="/" component={IntroPage} />
    <Route exact path="/cases" component={CasesPage} />
    <Route path="/cases/:projectPage" component={ProjectPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default PageRoutes
