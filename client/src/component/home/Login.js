import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
      <h1 className='text-center'>Login</h1>
      <br />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        placeholder='email'
        className='login-input'
        id='email'
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        placeholder='password'
        className='login-input'
        id='password'
      />
      <div className='center'>
        <button className='btn btn-primary'>
          <strong>Login</strong>
        </button>
        <div>
          <a href='/signup' className='btn sign-up'>
            <strong>Sign Up</strong>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
