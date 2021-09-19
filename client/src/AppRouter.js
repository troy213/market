import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './component/home/App'
import Search from './component/page/Search'
import Signup from './component/page/Signup'
import Cart from './component/page/Cart'
import Products from './component/page/Products'
import Item from './component/page/Item'
import Error from './component/page/Error'
import store from './store'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <App store={store} />
      </Route>
      <Route path='/search' exact component={Search} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/products' exact component={Products} />
      <Route path='/products/:name' component={Item} />
      <Route path='*' component={Error} />
    </Switch>
  </Router>
)

export default AppRouter
