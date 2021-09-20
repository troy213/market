import React from 'react'
import { Product } from '../home/App'
import { useFetch } from '../../hooks/UseFetch'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Products.css'

const Products = () => {
  const productList = useFetch('http://localhost:5000')

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
          {productList.isLoading ? (
            <h1>Loading</h1>
          ) : productList.isError ? (
            <h1>Error</h1>
          ) : (
            productList.data.map((value) => {
              const { id, url, image, title, price } = value
              return (
                <Product
                  ket={id}
                  url={url}
                  image={image}
                  title={title}
                  price={price}
                />
              )
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products
