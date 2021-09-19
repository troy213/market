import React from 'react'
import { Product } from '../home/App'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Products.css'

const Products = () => {
  return (
    <div className='products-container'>
      <div>
        <Header value='' />
      </div>
      <div className='products-content'>
        <div className='products-content-title'>
          <h3>All Products</h3>
          <div className='products-content-sort'>
            <p>showing 1 of 100 results</p>
            <select name='sort' id='sort'>
              <option value='default'>Default Sort</option>
              <option value='lowToHigh'>Price: low to high</option>
              <option value='highToLow'>Price: high to low</option>
            </select>
          </div>
        </div>
        <div className='products-content-list'>
          <Product
            url='aether-70'
            image='/img/products/backpack/aether-70-grey-1.jpg'
            title='Aether 70'
            price='330'
          />
          <Product
            url='atmos-ag-65'
            image='/img/products/backpack/atmos-ag-65-grey-1.jpg'
            title='Atmos AG 65'
            price='300'
          />
          <Product
            url='kajka-75'
            image='/img/products/backpack/kajka-75-1.jpg'
            title='Kajka 75'
            price='450'
          />
          <Product
            url='aircontact-70'
            image='/img/products/backpack/aircontact-pro-70+15-1.png'
            title='Aircontact Pro 70+15'
            price='300'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products
