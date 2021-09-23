import React, { useState } from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import Axios from 'axios'
import { useFetch } from '../../hooks/UseFetch'
import './Cart.css'

const Cart = () => {
  const userId = 1
  const orderList = useFetch(`http://localhost:5000/order/${userId}`)
  const [subTotal, setSubTotal] = useState(0)

  React.useEffect(() => {
    setSubTotal(
      orderList.data.reduce((accumulator, { price, qty }) => {
        return accumulator + price * qty
      }, 0)
    )
  }, [orderList.data, orderList])

  return (
    <div className='cart-container'>
      <div>
        <Header value='' />
        <div className='cart-wrapper'>
          <div className='cart-content'>
            <h2>My Cart</h2>
            <div className='cart-content-list'>
              {orderList.isLoading ? (
                <h1>Loading</h1>
              ) : orderList.isError ? (
                <h1>Error</h1>
              ) : (
                orderList.data.map((value) => {
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
              )}
            </div>
          </div>
          <div className='cart-subtotal-content'>
            <h2>Total</h2>
            <div>
              <p>Sub Total</p>
              <p>${subTotal}</p>
            </div>
            <div>
              <p>Delivery</p>
              <p>$0</p>
            </div>
            <div>
              <p>Total</p>
              <p>${subTotal}</p>
            </div>
            <button>Checkout</button>
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
    Axios.put(`http://localhost:5000/order`, {
      orderId: props.orderId,
      qty: props.qty + 1,
    })
    window.location.reload()
  }

  const qtyDecrement = () => {
    Axios.put(`http://localhost:5000/order`, {
      orderId: props.orderId,
      qty: props.qty - 1,
    })
    window.location.reload()
  }

  return (
    <>
      <div className='cart-product-container'>
        <span className='cart-product-cancel'>&times;</span>
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
            <button className='border-radius-left' onClick={qtyDecrement}>
              -
            </button>
            <input
              type='number'
              min='1'
              max='9'
              maxLength='1'
              onInput={checkMaxLength}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              disabled
            />
            <button className='border-radius-right' onClick={qtyIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Cart
