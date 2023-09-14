import { useEffect, useState } from "react"

export function useFetch(request: CallableFunction, data: object) {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [response, setResponse] = useState<any>()

    useEffect(() => {
        setLoading(true)
        setError('')
        
        request(data)
            .then((response: any) => {
                setResponse(response.data)
            })
            .catch((e: any) => {
                setError(e.response.data.error_ui)
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [data])

    return [
        response,
        loading,
        error
    ]  as const
}
