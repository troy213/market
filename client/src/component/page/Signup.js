import React from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Signup.css'

const Signup = () => {
  return (
    <div className='sign-up-container'>
      <div>
        <Header value='' />
        <form className='sign-up-content'>
          <h1 className='text-center'>Sign Up</h1>
          <label htmlFor='sign-up-email'>Email</label>
          <input
            type='email'
            placeholder='email@example.com'
            id='sign-up-email'
            className='sign-up-input'
          />
          <label htmlFor='sign-up-password'>Password</label>
          <input
            type='password'
            placeholder='password'
            id='sign-up-password'
            className='sign-up-input'
          />
          <label htmlFor='sign-up-retype'>Re-type Password</label>
          <input
            type='password'
            placeholder='re-type password'
            id='sign-up-retype'
            className='sign-up-input'
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
