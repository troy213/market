import React, { useState } from 'react'
import Modal from './Modal'
import Login from './Login'
import './Header.css'

const Header = (props) => {
  const [searchValue, setSearchValue] = useState(props.value)
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

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

      <Sidenav
        active={isActive}
        onClose={() => setIsActive(false)}
        openModal={() => setIsOpen(true)}
        value={searchValue}
        handleChange={(e) => setSearchValue(e.target.value)}
        onEnter={onEnterPress}
      />

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
            <a href='/cart' className='nav-utils-desktop'>
              <i className='fa fa-shopping-cart cart'></i>
            </a>
            <div onClick={() => setIsOpen(true)} className='nav-utils-desktop'>
              <button className='btn-login'>Login</button>
            </div>
            <button
              className='nav-utils-mobile'
              onClick={() => setIsActive(!isActive)}
            >
              <i className='fa fa-bars'></i>
            </button>
          </div>
        </div>
      </nav>
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

const Sidenav = (props) => {
  return (
    <div className={`sidenav-container${props.active ? ' active' : ''}`}>
      <span className='sidenav-close' onClick={props.onClose}>
        &times;
      </span>
      <SearchBar
        value={props.value}
        handleChange={props.handleChange}
        onEnter={props.onEnter}
      />
      <div onClick={props.openModal}>
        <button>Login</button>
      </div>
      <a href='/cart'>Cart</a>
      <hr />
      <h3>Categories</h3>
      <a href='/products?categories=carrier'>Carrier</a>
      <a href='/products?categories=tent'>Tent</a>
      <a href='/products?categories=apparel'>Apparel</a>
    </div>
  )
}

export default Header
