import React from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import { useLocation } from 'react-router-dom'

const Search = () => {
  const search = useLocation().search
  const name = new URLSearchParams(search).get('query')

  return (
    <>
      <Header value={name} />
      <Footer />
    </>
  )
}

export default Search
