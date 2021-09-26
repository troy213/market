import React, { useState, useEffect } from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import { Product } from '../home/App'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/UseFetch'
import './Search.css'
import './Products.css'

const Search = () => {
  const [selectSort, setSelectSort] = useState('default')

  const search = useLocation().search
  const name = new URLSearchParams(search).get('query')
  const sort = new URLSearchParams(search).get('sort')

  const productList = useFetch(
    `${
      sort
        ? 'http://localhost:5000/product?search=' + name + '&sort=' + sort
        : 'http://localhost:5000/product?search=' + name
    }`
  )

  const handleSort = (value) => {
    if (value === 'default') {
      window.location.href = `/search?query=${name}`
    }
    if (value === 'lowToHigh') {
      window.location.href = `/search?query=${name}&sort=asc`
    }
    if (value === 'highToLow') {
      window.location.href = `/search?query=${name}&sort=desc`
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
    <div className='search-container'>
      <div>
        <Header value={name} />
        <div className='products-content'>
          <div className='products-content-title'>
            <h3>Search result for: '{name}'</h3>
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
                      id={product_id}
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

export default Search
