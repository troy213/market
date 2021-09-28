import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
        }
      })
      .then((value) => {
        setData(value.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [url])

  return { data, isLoading, isError }
}

export default useFetch
