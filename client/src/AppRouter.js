import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios'

import App from './component/home/App'
import Search from './component/page/Search'
import Signup from './component/page/Signup'
import Cart from './component/page/Cart'
import Products from './component/page/Products'
import Item from './component/page/Item'
import Error from './component/page/Error'

const AppRouter = (props) => {
  useEffect(() => {
    if (localStorage.getItem('user') != null) {
      if (!props.isAuthorized) {
        const headers = {
          authorization: `Bearer ${localStorage.getItem('user')}`,
        }

        Axios.get('http://localhost:5000/auth', { headers: headers })
          .then((res) => {
            if (res.status >= 200 && res.status <= 299) {
              if (res.data.success) {
                props.onSetUser(res.data.data.email)
                props.onSetIsAuthorized(true)
                props.onSetIsLoading(false)
              }
            } else {
              props.onSetIsAuthorized(false)
              props.onSetIsLoading(true)
            }
          })
          .catch((err) => {
            if (err) localStorage.clear()
          })
      }

      if (!props.hasData) {
        const headers = {
          authorization: `Bearer ${localStorage.getItem('user')}`,
        }

        Axios.get('http://localhost:5000/order/cart', { headers: headers })
          .then((res) => {
            if (res.status >= 200 && res.status <= 299) {
              props.onSetOrderList(res.data.data)
              props.onSetIsLoading(false)
              props.onSetHasData(true)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }, [props])

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <App />
        </Route>
        <Route path='/search' exact component={Search} />
        <Route path='/signup' exact component={Signup} />
        {!props.isLoading &&
          (props.isAuthorized ? (
            <Route path='/cart' exact>
              <Cart />
            </Route>
          ) : (
            <Redirect to='/' />
          ))}
        <Route path='/products' exact component={Products} />
        <Route path='/products/:name' component={Item} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetIsAuthorized: (value) => {
      const action = { type: 'SET_IS_AUTHORIZED', payload: value }
      dispatch(action)
    },
    onSetUser: (value) => {
      const action = { type: 'SET_USER', payload: value }
      dispatch(action)
    },
    onSetError: (value) => {
      const action = { type: 'SET_ERROR', payload: value }
      dispatch(action)
    },
    onSetIsLoading: (value) => {
      const action = { type: 'SET_LOADING', payload: value }
      dispatch(action)
    },
    onSetOrderList: (value) => {
      const action = { type: 'SET_ORDERLIST', payload: value }
      dispatch(action)
    },
    onSetHasData: (value) => {
      const action = { type: 'SET_HAS_DATA', payload: value }
      dispatch(action)
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)
