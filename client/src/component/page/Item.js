import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Modal from '../home/Modal'
import Login from '../home/Login'
import Axios from 'axios'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Item.css'

const Item = () => {
  const location = useLocation()
  const { productId, name, price, image, description } = location.state
  const [qty, setQty] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [isLogedIn, setIsLogedIn] = useState(true)

  const checkMaxLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }

  const qtyIncrement = () => {
    if (qty < 9) {
      setQty(qty + 1)
    }
  }

  const qtyDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  const headers = {
    authorization: `Bearer ${localStorage.getItem('user')}`,
  }

  const addToCart = () => {
    Axios.post(
      'http://localhost:5000/order',
      {
        productId: productId,
        qty: qty,
        date: new Date().toISOString(),
      },
      {
        headers: headers,
      }
    )
      .then((res) => {
        if (res.data.success) setIsOpen(true)
      })
      .catch(() => {
        setIsLogedIn(false)
        setIsOpen(true)
      })
  }

  return (
    <div className='item-container'>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {isLogedIn ? (
          <div className='modal-message'>
            <p className='text-center'>
              Product added to the cart successfully
            </p>
            <br />
            <a href='/cart' className='btn-dark'>
              check cart
            </a>
          </div>
        ) : (
          <Login />
        )}
      </Modal>
      <div>
        <Header value='' />
        <div className='breadcrumb'>
          <a href='/'>Home</a>
          <b>/</b>
          <a href='/products'>Products</a>
          <b>/</b>
          <p>{name}</p>
        </div>
      </div>
      <div className='item-content'>
        <div className='item-img-container'>
          <img src={image} alt='item-img' className='item-img' />
        </div>
        <div className='center'>
          <div className='item-content-desc'>
            <h3>{name}</h3>
            <p>${price * qty}</p>
            <div className='cart-product-qty'>
              <button
                className='border-radius-left'
                onClick={qtyDecrement}
                disabled={qty < 2 ? true : false}
              >
                -
              </button>
              <input
                type='text'
                min='1'
                max='9'
                maxLength='1'
                onInput={checkMaxLength}
                value={qty}
                onChange={(e) =>
                  setQty(Number(e.target.value.replace(/\D/, 1)))
                }
              />
              <button
                className='border-radius-right'
                onClick={qtyIncrement}
                disabled={qty > 8 ? true : false}
              >
                +
              </button>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Item
