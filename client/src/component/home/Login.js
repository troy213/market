import React, { useState } from 'react'
import Axios from 'axios'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [emailVal, setEmailVal] = useState(false)
  const [emailValMsg, setEmailValMsg] = useState('')
  const [password, setPassword] = useState('')
  const [passVal, setPassVal] = useState(false)
  const [passValMsg, setPassValMsg] = useState('')

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  const signIn = () => {
    if (email && password) {
      if (validateEmail(email)) {
        Axios.post('http://localhost:5000/user/login', {
          email: email,
          password: password,
        })
          .then((res) => {
            if (res.data.success) {
              localStorage.setItem('user', res.data.data)
              window.location.reload()
            }
          })
          .catch(() => {
            alert('something went wrong')
          })
      }
    }

    // check email validation
    if (email) {
      if (!validateEmail(email)) {
        setEmailValMsg('your email is invalid')
        setEmailVal(true)
      } else {
        setEmailVal(false)
      }
    } else {
      setEmailValMsg('email is required')
      setEmailVal(true)
    }

    // check password validation
    if (password) {
      setPassVal(false)
    } else {
      setPassValMsg('password is required')
      setPassVal(true)
    }
  }

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      signIn()
    }
  }

  return (
    <div className='login-container'>
      <h1 className='text-center'>Login</h1>
      <br />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        placeholder='email'
        className={emailVal ? 'login-input danger' : 'login-input'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id='email'
        onKeyDown={onEnterPress}
      />
      {emailVal ? <p className='login-validation'>{emailValMsg}</p> : <></>}
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        placeholder='password'
        className={passVal ? 'login-input danger' : 'login-input'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id='password'
        onKeyDown={onEnterPress}
      />
      {passVal ? <p className='login-validation'>{passValMsg}</p> : <></>}
      <div className='center'>
        <button className='btn btn-primary' onClick={signIn}>
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
