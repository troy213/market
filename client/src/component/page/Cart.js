import React, { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../home/Header'
import Footer from '../home/Footer'
import Modal from '../home/Modal'
import Axios from 'axios'
import './Cart.css'

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='cart-container'>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='checkout-message'>
          <p>
            Thank you for trying this e-commerce demo project. If there is any
            bug or error, you can send me a message through my website.
          </p>
          <br />
          <a
            href='https://triteraerlangga.com/#contact'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tritera Erlangga
          </a>
        </div>
      </Modal>
      <div>
        <Header value='' />
        <div className='cart-wrapper'>
          <div className='cart-content'>
            <h2>My Cart</h2>
            <div className='cart-content-list'>
              {props.isLoading ? (
                <h1>Loading</h1>
              ) : props.isError ? (
                <h1>Error</h1>
              ) : props.data.order_list.length > 0 ? (
                props.data.order_list.map((value) => {
                  const { order_id, name, price, image, qty } = value
                  return (
                    <CartProduct
                      key={order_id}
                      orderId={order_id}
                      name={name}
                      price={price}
                      image={image}
                      qty={qty}
                    />
                  )
                })
              ) : (
                <div className='cart-message-container'>
                  <p className='cart-message'>Cart is empty</p>
                </div>
              )}
            </div>
          </div>
          <div className='cart-subtotal-content'>
            <h2>Total</h2>
            <div>
              <p>Sub Total</p>
              <p>${props.data.total}</p>
            </div>
            <div>
              <p>Tax</p>
              <p>${props.data.total * 0.1}</p>
            </div>
            <div>
              <p>Total</p>
              <p>${props.data.total + props.data.total * 0.1}</p>
            </div>
            <button onClick={() => setIsOpen(true)}>Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const CartProduct = (props) => {
  const [qty, setQty] = React.useState(props.qty)

  const checkMaxLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }

  const qtyIncrement = () => {
    setQty(qty + 1)
    Axios.put(`https://market-tritera-erlangga.herokuapp.com/order`, {
      orderId: props.orderId,
      qty: qty + 1,
    })
  }

  const qtyDecrement = () => {
    setQty(qty - 1)
    Axios.put(`https://market-tritera-erlangga.herokuapp.com/order`, {
      orderId: props.orderId,
      qty: qty - 1,
    })
  }

  const handleChange = (value) => {
    setQty(value)
    if (qty !== null) {
      Axios.put(`https://market-tritera-erlangga.herokuapp.com/order`, {
        orderId: props.orderId,
        qty: value,
      })
      // window.location.reload()
    }
  }

  const cancelItem = () => {
    Axios.delete(
      `https://market-tritera-erlangga.herokuapp.com/order/${props.orderId}`
    )
    window.location.reload()
  }

  return (
    <>
      <div className='cart-product-container'>
        <span className='cart-product-cancel' onClick={cancelItem}>
          &times;
        </span>
        <div className='cart-product-img-container'>
          <img src={props.image} alt='products' className='cart-product-img' />
        </div>
        <div className='cart-product-desc'>
          <p>
            <strong>${props.price * qty}</strong>
          </p>
          <p>{props.name}</p>
          <div className='cart-product-qty'>
            <p>Qty</p>
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
                handleChange(Number(e.target.value.replace(/\D/, 1)))
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
        </div>
      </div>
      <hr />
    </>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
