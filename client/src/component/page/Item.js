import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Item.css'

const Item = () => {
  const location = useLocation()
  const { image, title, price } = location.state
  const [qty, setQty] = React.useState(1)

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
    <div className='item-container'>
      <div>
        <Header value='' />
        <div className='item-content'>
          <div className='item-img-container'>
            <img src={image} alt='item-img' className='item-img' />
          </div>
          <div className='center'>
            <div className='item-content-desc'>
              <h3>{title}</h3>
              <p>${price}</p>
              <div className='cart-product-qty'>
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
              <button>Add to Cart</button>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatum vel sed ea vitae doloremque nemo quia impedit
                numquam, mollitia odit eius et at rem laborum, quidem id eum
                ipsa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Item
