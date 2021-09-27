import { useState, useEffect } from 'react'

export const useFetch = (url, headers) => {
  const [hasData, setHasData] = useState(false)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!hasData) {
      if (headers != null) {
        fetch(url, {
          headers: headers,
        })
          .then((res) => {
            if (res.status >= 200 && res.status <= 299) {
              return res.json()
            } else {
              setIsLoading(false)
              setIsError(true)
            }
          })
          .then((value) => {
            setHasData(true)
            setData(value.data)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
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
            setHasData(true)
            setData(value.data)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }, [headers, url, data.length, hasData])

  return { data, isLoading, isError }
}
