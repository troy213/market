import React from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Cart.css'

const Cart = () => {
  return (
    <div className='cart-container'>
      <div>
        <Header value='' />
        <div className='cart-wrapper'>
          <div className='cart-content'>
            <h2>My Cart</h2>
            <div className='cart-content-list'>
              <CartProduct
                image='/img/products/backpack/aether-70-grey-1.jpg'
                price='330'
                name='Aether 70'
                qty={1}
              />
              <CartProduct
                image='/img/products/backpack/atmos-ag-65-grey-1.jpg'
                price='300'
                name='Atmos AG 65'
                qty={1}
              />
            </div>
          </div>

          <div className='cart-subtotal-content'>
            <h2>Total</h2>
            <div>
              <p>Sub Total</p>
              <p>$0.00</p>
            </div>
            <div>
              <p>Delivery</p>
              <p>$0.00</p>
            </div>
            <div>
              <p>Total</p>
              <p>$0.00</p>
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

  const qtyIncrement = (e) => {
    if (qty < 9) {
      setQty(qty + 1)
    }
  }

  const qtyDecrement = (e) => {
    if (qty > 1) {
      setQty(qty - 1)
    }
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
