import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Item.css'

const Item = () => {
  const location = useLocation()
  const { image, title, price } = location.state

  return (
    <div className='item-container'>
      <div>
        <Header value='' />
        {/* content here */}
        <div className='item-content'>
          <div className='item-img-container'>
            <img src={image} alt='item-img' className='item-img' />
          </div>
          <div className='center'>
            <div className='item-content-desc'>
              <h3>{title}</h3>
              <p>${price}</p>
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
