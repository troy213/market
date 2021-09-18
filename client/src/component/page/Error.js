import React from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'

const Error = () => {
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
      <h1 style={textStyle}>404 Not Found</h1>
      <Footer />
    </div>
  )
}

export default Error
