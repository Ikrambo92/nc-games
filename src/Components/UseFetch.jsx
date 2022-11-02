import { useState, useEffect } from 'react'
import axios from 'axios'

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Response went wrong')
                }
                return response.data
            })
            .then((data) => {
                setData(data.reviews)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url]);

    return { data, isLoading }
}

export default UseFetch;

