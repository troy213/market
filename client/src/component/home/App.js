import React from 'react'
import { connect } from 'react-redux'
import './App.css'

const App = (props) => {
  return (
    <>
      <nav></nav>

      <div className='container'>
        <section className='promo'>
          <div className='main-promo'></div>
          <div className='side-promo'>
            <div className='side-promo-item'></div>
            <div className='side-promo-item'></div>
          </div>
        </section>

        <main>
          <div className='product'></div>
          <div className='product'></div>
          <div className='product'></div>
          <div className='product'></div>
        </main>
      </div>

      <footer></footer>
    </>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
