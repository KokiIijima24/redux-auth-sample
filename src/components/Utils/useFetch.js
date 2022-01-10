import { useState, useEffect } from 'react'

export default function useFetch(uri) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!uri) return
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [uri])

  console.log('get data:', data)

  return {
    loading,
    data,
    error,
  }
}