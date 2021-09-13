import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './component/home/App'
import Search from './component/page/Search'
import Signup from './component/page/Signup'
import Cart from './component/page/Cart'
import Products from './component/page/Products'
import store from './store'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <App store={store} />
      </Route>
      <Route path='/search' component={Search} />
      <Route path='/signup' component={Signup} />
      <Route path='/cart' component={Cart} />
      <Route path='/products' component={Products} />
    </Switch>
  </Router>
)

export default AppRouter
