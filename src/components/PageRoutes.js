import React from 'react'
import { Route, Switch } from 'react-router-dom'

import IntroPage from './pages/IntroPage'
import CasesPage from './pages/CasesPage'
import CasesZoomPage from './pages/CasesZoomPage'
import NotFoundPage from './pages/NotFoundPage'

const PageRoutes = () => (
  <Switch>
    <Route exact path="/" component={IntroPage} />
    <Route exact path="/cases" component={CasesPage} />
    <Route path="/cases/:projectPage" component={CasesZoomPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default PageRoutes
