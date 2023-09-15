import { useEffect, useState } from 'react'
import { Button, Stack, Alert, CircularProgress } from '@mui/material';
import ServerClicksAlert from '../UI/ServerClicksAlert';
import useDebounce from '../hooks/useDebounce';
import { COUNT_CREATOR, fetchCount } from '../api/fetchCount';
import { CountType } from '../types/CountTypes';
import { useFetch } from '../hooks/useFetch';

export function Clicker() {
    const [count, setCount] = useState<number>(0)
    const [data, setData] = useState<CountType>({count: 0})
    const [response, loading, error] = useFetch(fetchCount, data)

    useEffect(() => {
        debounceSetData()
    }, [count])

    const debounceSetData = useDebounce(() => {
        setData(COUNT_CREATOR(count))
    }, 1000)

    return (
        <Stack direction="column" spacing={2}>
            <Button
                color="warning"
                disabled={loading ? true : false}
                size='large'
                variant='contained'
                onClick={() => setCount(count + 1)}
            >
                {loading &&
                    <CircularProgress
                        size={24}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                }
                Click
            </Button>
            <Alert variant="filled" severity="info">
                Кликнули {count} раз
            </Alert>
            <ServerClicksAlert count={response} err={error} />
        </Stack>
    )
}
