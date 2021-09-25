import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)
