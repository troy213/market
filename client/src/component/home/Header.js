import React, { useState } from 'react'
import Modal from './Modal'
import Login from './Login'
import avatar from '../../assets/avatar-default.jpg'

const Header = (props) => {
  const [searchValue, setSearchValue] = useState(props.value)
  const [isOpen, setIsOpen] = useState(false)

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      window.location.href = `/search?query=${e.target.value}`
    }
  }

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Login />
      </Modal>

      <nav className='nav'>
        <div className='nav-container'>
          <a href='/'>
            <h1 className='logo'>Logo</h1>
          </a>
          <input
            type='text'
            className='search-bar'
            name='search'
            placeholder='search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={onEnterPress}
          />
          <div className='nav-utils'>
            <i className='fa fa-search search'></i>
            <i className='fa fa-shopping-cart cart'></i>
            <div className='user' onClick={() => setIsOpen(true)}>
              <img src={avatar} alt='avatar' className='avatar' />
              <strong>Login</strong>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
