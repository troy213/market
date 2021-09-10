import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './component/home/App'
import store from './store'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <App store={store} />
      </Route>
    </Switch>
  </Router>
)

export default AppRouter
