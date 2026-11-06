import { useState, useEffect, useCallback } from "react";

function useFetch({ URL }) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")


    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true)
            setError("")
            const response = await fetch(URL)
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const fetchedData = await response.json()
            setData(fetchedData)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }, [URL])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { data, loading: isLoading, error }
}

export default useFetch
