import React from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import { useLocation } from 'react-router-dom'
import './Search.css'

const Search = () => {
  const search = useLocation().search
  const name = new URLSearchParams(search).get('query')

  return (
    <div className='search-container'>
      <div>
        <Header value={name} />
      </div>
      <Footer />
    </div>
  )
}

export default Search
