import React, { useState } from 'react'
import { Product } from '../home/App'
import { useFetch } from '../../hooks/UseFetch'
import { useLocation } from 'react-router-dom'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Products.css'

const Products = () => {
  const search = useLocation().search
  const name = new URLSearchParams(search).get('categories')
  const productList = useFetch(
    `${
      name
        ? 'http://localhost:5000/product?categories=' + name
        : 'http://localhost:5000/product'
    }`
  )

  return (
    <div className='products-container'>
      <div>
        <Header value='' />
        <div className='products-content'>
          <div className='products-content-title'>
            <h3>All Products</h3>
            <div className='products-content-sort'>
              <p>showing {productList.data.length} results</p>
              <select name='sort' id='sort'>
                <option value='default'>Default Sort</option>
                <option value='lowToHigh'>Price: low to high</option>
                <option value='highToLow'>Price: high to low</option>
              </select>
            </div>
          </div>
          <div className='center'>
            <div className='products-content-list'>
              {productList.isLoading ? (
                <h1>Loading</h1>
              ) : productList.isError ? (
                <h1>Error</h1>
              ) : (
                productList.data.map((value) => {
                  const { product_id, name, price, image, url, description } =
                    value
                  return (
                    <Product
                      key={product_id}
                      productId={product_id}
                      name={name}
                      price={price}
                      image={image}
                      url={url}
                      description={description}
                    />
                  )
                })
              )}
              <div className='content-fill'></div>
              <div className='content-fill'></div>
              <div className='content-fill'></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Products
