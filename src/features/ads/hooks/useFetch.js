import { useEffect, useState } from "react"

const useFetch = (url, transform) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Something went wrong...status: ${response.status}`)
        }

        const json = await response.json()
        setData(transform(json))
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [transform, url])

  return {
    data,
    error,
    isLoading,
  }
}

export default useFetch
