import React from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import { connect } from 'react-redux'

const Error = (props) => {
  const errorContainer = {
    margin: '0 auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  }

  const textStyle = {
    fontWeight: 'bolder',
    fontSize: '3rem',
    textAlign: 'center',
    color: '#314052',
  }

  return (
    <div style={errorContainer}>
      <div>
        <Header value='' />
      </div>
      {props.isLoading && !props.isGuest ? (
        <h1 style={textStyle}>Loading...</h1>
      ) : (
        <h1 style={textStyle}>404 Not Found</h1>
      )}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)
