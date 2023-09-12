import { useEffect, useState } from "react"

const useFetch = (request: CallableFunction, count: number) => {
    type useFetchCountType = {
        count: number
    }

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<{ok: boolean, error: string, error_ui: string}>({ok: true, error: '', error_ui: ''})
    const [data, setData] = useState<useFetchCountType>({count: 0})

    useEffect(() => {
        setLoading(true)
        setError({ok: true, error: '', error_ui: ''})
        
        request(count)
            .then((responce: any) => {
                setData(responce.data)
            })
            .catch((e: any) => {
                setError(e.response.data)
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [count])

    return [
        data,
        loading,
        error
    ]  as const
}

export default useFetch;
