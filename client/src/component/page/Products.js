import React, { useState } from 'react'
import { Product } from '../home/App'
import { useFetch } from '../../hooks/UseFetch'
import Header from '../home/Header'
import Footer from '../home/Footer'
import './Products.css'

const Products = () => {
  const productList = useFetch('http://localhost:5000')
  const [sort, setSort] = useState('default')

  const compare = (a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  }

  const lowToHigh = (a, b) => {
    if (a.price < b.price) {
      return -1
    }
    if (a.price > b.price) {
      return 1
    }
    return 0
  }

  const HighToLow = (a, b) => {
    if (a.price > b.price) {
      return -1
    }
    if (a.price < b.price) {
      return 1
    }
    return 0
  }

  React.useEffect(() => {
    if (sort === 'lowToHigh') {
      productList.data.sort(lowToHigh)
    } else if (sort === 'highToLow') {
      productList.data.sort(HighToLow)
    } else {
      productList.data.sort(compare)
    }
  }, [sort, productList])

  return (
    <div className='products-container'>
      <div>
        <Header value='' />
      </div>
      <div className='products-content'>
        <div className='products-content-title'>
          <h3>All Products</h3>
          <div className='products-content-sort'>
            <p>showing {productList.data.length} results</p>
            <select
              name='sort'
              id='sort'
              onChange={(e) => setSort(e.target.value)}
              value={sort}
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
                const { id, url, image, title, price } = value
                return (
                  <Product
                    key={id}
                    url={url}
                    image={image}
                    title={title}
                    price={price}
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
      <Footer />
    </div>
  )
}

export default Products
