import { useEffect, useState } from 'react'

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then((data: T) => {
				setIsLoading(false)
				setData(data)
				setError(null)
			})
			.catch(err => {
				setIsLoading(false)
				setError(err.message)
			})
	}, [url])

	return { data, isLoading, error }
}

export default useFetch
