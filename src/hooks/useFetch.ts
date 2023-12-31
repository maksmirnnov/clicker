import { useEffect, useState } from "react";
import { AxiosError, AxiosPromise, AxiosResponse } from "axios";
import { ICountResponse } from "../types/CountTypes";
import { IFetchError } from "../types/ErrorType";

export function useFetch<T>(request: (data?: T) => AxiosPromise, data: T) {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<IFetchError>({ok: false, error: '', error_ui: ''})
    const [response, setResponse] = useState<ICountResponse>({ok: false, count: 0})

    useEffect(() => {
        setLoading(true)
        setError({ok: false, error: '', error_ui: ''})

        request(data)
            .then((response: AxiosResponse<ICountResponse>) => {
                setResponse(response.data)
            })
            .catch((e: AxiosError<IFetchError>) => {
                e.response && setError(e.response.data)
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
