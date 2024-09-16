import React, { useEffect, useState } from "react"

export const getDataWithAPI = async (url=null, wait=False) => {
    const [data, setData]  = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [_mutate, setMutate] = useState(false)
    const [error, setError] = useState(null)

    const mutate = () => setMutate(true)

    const getData = async () => {
        setIsLoading(true)
        try {
            const response = await proxy.get(url)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        if (url && wait) {
            getData()
        }
    }, [url, wait])

    useEffect(()=>{
        if (_mutate) {
            getData()
        }
    }, [mutate])

    return {data, isLoading, mutate, error}
}