import React, { useState, useEffect } from 'react'
import { Product } from '../home/App'
import useFetch from '../../hooks/UseFetch'
import { useLocation } from 'react-router-dom'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Products.css'

const Products = () => {
  const [selectSort, setSelectSort] = useState('default')
  const search = useLocation().search
  const categories = new URLSearchParams(search).get('categories')
  const sort = new URLSearchParams(search).get('sort')

  const productList = useFetch(
    `${
      categories && sort
        ? 'https://market-tritera-erlangga.herokuapp.com/product?categories=' +
          categories +
          '&sort=' +
          sort
        : categories
        ? 'https://market-tritera-erlangga.herokuapp.com/product?categories=' +
          categories
        : sort
        ? 'https://market-tritera-erlangga.herokuapp.com/product?sort=' + sort
        : 'https://market-tritera-erlangga.herokuapp.com/product'
    }`
  )

  const handleSort = (value) => {
    setSelectSort(value)
    if (value === 'default') {
      window.location.href = `${
        categories ? '/products?categories=' + categories : '/products'
      }`
    }
    if (value === 'lowToHigh') {
      window.location.href = `${
        categories
          ? '/products?categories=' + categories + '&sort=asc'
          : '/products?sort=asc'
      }`
    }
    if (value === 'highToLow') {
      window.location.href = `${
        categories
          ? '/products?categories=' + categories + '&sort=desc'
          : '/products?sort=desc'
      }`
    }
  }

  useEffect(() => {
    switch (sort) {
      case 'asc':
        setSelectSort('lowToHigh')
        break
      case 'desc':
        setSelectSort('highToLow')
        break
      default:
        setSelectSort('default')
        break
    }
  }, [sort])

  return (
    <div className='products-container'>
      <div>
        <Header value='' />
        <div className='breadcrumb'>
          <a href='/'>Home</a>
          <b>/</b>
          <p>Products</p>
        </div>
        <div className='products-content'>
          <div className='products-content-title'>
            <h3>All Products</h3>
            <div className='products-content-sort'>
              <p>showing {productList.data.length} results</p>
              <select
                name='sort'
                id='sort'
                onChange={(e) => handleSort(e.target.value)}
                value={selectSort}
              >
                <option value='default'>Default Sort</option>
                <option value='lowToHigh'>Price: low to high</option>
                <option value='highToLow'>Price: high to low</option>
              </select>
            </div>
          </div>
          <div className='center'>
            <div className='products-content-list'>
              {productList.isLoading ? (
                <>
                  <div className='card-skeleton'></div>
                  <div className='card-skeleton'></div>
                  <div className='card-skeleton'></div>
                  <div className='card-skeleton'></div>
                </>
              ) : productList.isError ? (
                <h3 className='loading-text'>Error</h3>
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
