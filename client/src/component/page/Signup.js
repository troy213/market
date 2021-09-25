import React, { useState } from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import Axios from 'axios'
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retype, setRetype] = useState('')
  const [emailVal, setEmailVal] = useState(false)
  const [emailValMsg, setEmailValMsg] = useState('')
  const [passVal, setPassVal] = useState(false)
  const [passValMsg, setPassValMsg] = useState('')
  const [rePassVal, setRePassVal] = useState(false)
  const [rePassValMsg, setRePassValMsg] = useState('')

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  const signUp = () => {
    if (email && password && retype) {
      if (validateEmail(email) && password === retype) {
        Axios.post('http://localhost:5000/user', {
          email: email,
          password: password,
        })
          .then(() => {
            alert('Sign Up Done')
          })
          .catch(() => {
            alert('Something went wrong')
          })
      }
    }

    // check email validation either blank or wrong format
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

    // check retype password validation
    if (retype) {
      if (password !== retype) {
        setRePassValMsg(`your password didn't match`)
        setRePassVal(true)
      } else {
        setRePassVal(false)
      }
    } else {
      setRePassValMsg('retype password is required')
      setRePassVal(true)
    }
  }

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      signUp()
    }
  }

  return (
    <div className='sign-up-container'>
      <div>
        <Header value='' />
      </div>
      <div className='sign-up-content'>
        <h1 className='text-center'>Sign Up</h1>
        <label htmlFor='sign-up-email'>Email</label>
        <input
          type='email'
          placeholder='example@mail.com'
          id='sign-up-email'
          className={emailVal ? 'sign-up-input danger' : 'sign-up-input'}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          maxLength='255'
          onKeyDown={onEnterPress}
          required
        />
        {emailVal ? <p className='sign-up-validation'>{emailValMsg}</p> : <></>}
        <label htmlFor='sign-up-password'>Password</label>
        <input
          type='password'
          placeholder='password'
          id='sign-up-password'
          className={passVal ? 'sign-up-input danger' : 'sign-up-input'}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          maxLength='255'
          onKeyDown={onEnterPress}
          required
        />
        {passVal ? <p className='sign-up-validation'>{passValMsg}</p> : <></>}
        <label htmlFor='sign-up-retype'>Re-type Password</label>
        <input
          type='password'
          placeholder='re-type password'
          id='sign-up-retype'
          className={rePassVal ? 'sign-up-input danger' : 'sign-up-input'}
          name='retype'
          onChange={(e) => setRetype(e.target.value)}
          value={retype}
          maxLength='255'
          onKeyDown={onEnterPress}
          required
        />
        {rePassVal ? (
          <p className='sign-up-validation'>{rePassValMsg}</p>
        ) : (
          <></>
        )}
        <button className='btn btn-primary' onClick={signUp}>
          Submit
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
