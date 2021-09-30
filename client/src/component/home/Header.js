import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import './Header.css'

const Header = (props) => {
  const [searchValue, setSearchValue] = useState(props.value)
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const path = useLocation().pathname

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      window.location.href = `/search?query=${e.target.value}`
    }
  }

  const signOut = () => {
    props.onSetIsAuthorized(false)
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Login />
      </Modal>

      <Sidenav
        active={isActive}
        isAuthorized={props.isAuthorized}
        signOut={signOut}
        onClose={() => setIsActive(false)}
        openModal={() => setIsOpen(true)}
        value={searchValue}
        handleChange={(e) => setSearchValue(e.target.value)}
        onEnter={onEnterPress}
        sideCartQty={props.data.order_list.length}
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
            {props.isAuthorized ? (
              <>
                <a href='/cart' className='nav-utils-desktop'>
                  {props.data.order_list.length > 0 && path !== '/cart' ? (
                    <i
                      className='fa fa-shopping-cart cart'
                      data-qty={props.data.order_list.length}
                    ></i>
                  ) : (
                    <i className='fa fa-shopping-cart cart'></i>
                  )}
                </a>
                <button
                  onClick={signOut}
                  className='nav-utils-desktop btn-login'
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className='nav-utils-desktop btn-login'
              >
                Login
              </button>
            )}
            <button
              className='nav-utils-mobile'
              onClick={() => setIsActive(!isActive)}
            >
              {props.data.order_list.length > 0 && path !== '/cart' ? (
                <i className='fa fa-bars notification'></i>
              ) : (
                <i className='fa fa-bars'></i>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className='navlink-container'>
        <div className='navlink'>
          <div className='navlink-content'>
            <a href='/products' className='navlink-link'>
              All Products
            </a>
            <a href='/products?categories=carrier' className='navlink-link'>
              Carrier
            </a>
            <a href='/products?categories=tent' className='navlink-link'>
              Tent
            </a>
            <a href='/products?categories=apparel' className='navlink-link'>
              Apparel
            </a>
          </div>
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

const Sidenav = (props) => {
  const path = useLocation().pathname

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
      {props.isAuthorized ? (
        <>
          <div onClick={props.signOut} className='sidenav-log-btn'>
            <button>Logout</button>
          </div>
          <a href='/cart'>
            {props.sideCartQty > 0 && path !== '/cart' ? (
              <p data-side-qty={props.sideCartQty}>Cart</p>
            ) : (
              <p>Cart</p>
            )}
          </a>
        </>
      ) : (
        <div onClick={props.openModal} className='sidenav-log-btn'>
          <button>Login</button>
        </div>
      )}

      <hr />
      <h3>Categories</h3>
      <a href='/products'>All Products</a>
      <a href='/products?categories=carrier'>Carrier</a>
      <a href='/products?categories=tent'>Tent</a>
      <a href='/products?categories=apparel'>Apparel</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetIsAuthorized: (value) => {
      const action = { type: 'SET_IS_AUTHORIZED', payload: value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
