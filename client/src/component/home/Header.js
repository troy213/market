import React, { useState } from 'react'
import Modal from './Modal'
import Login from './Login'
import avatar from '../../assets/avatar-default.jpg'
import './Header.css'

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
            <h1 className='logo'>Outstore</h1>
          </a>
          <div className='search-bar-desktop'>
            <SearchBar
              value={searchValue}
              handleChange={(e) => setSearchValue(e.target.value)}
              onEnter={onEnterPress}
            />
          </div>
          <div className='nav-utils'>
            <a href='/cart'>
              <i className='fa fa-shopping-cart cart'></i>
            </a>
            <div className='user' onClick={() => setIsOpen(true)}>
              <img src={avatar} alt='avatar' className='avatar' />
              <strong>Login</strong>
            </div>
          </div>
        </div>
      </nav>
      <div className='search-bar-mobile'>
        <div className='center'>
          <SearchBar
            value={searchValue}
            handleChange={(e) => setSearchValue(e.target.value)}
            onEnter={onEnterPress}
          />
        </div>
      </div>
    </>
  )
}

const SearchBar = (props) => {
  return (
    <input
      type='text'
      className='search-bar'
      name='search'
      placeholder='search'
      value={props.value}
      onChange={props.handleChange}
      onKeyDown={props.onEnter}
    />
  )
}

export default Header
