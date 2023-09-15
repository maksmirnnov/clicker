import { useCallback, useRef } from 'react'

export default function useDebounce<T>(callback: () => T, delay: number): () => void {
    const timer = useRef<number>()

    const debouncedCallback = useCallback(() => {
        if(timer.current) {
            window.clearTimeout(timer.current)
        }

        timer.current = window.setTimeout(() => {
            callback()
        }, delay)

    }, [callback, delay])
    
    return debouncedCallback;
}
