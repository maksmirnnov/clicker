import { Button, Stack, Alert, CircularProgress } from '@mui/material';
import { useCallback, useRef, useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import ClicksFromServer from './components/ClicksFromServer';
import fetchCount from './api/fetchCount';

function App() {
    const [count, setCount] = useState<number>(0)
    const [triggerCount, setTriggerCount] = useState<number>(0)
    const [data, loading, error] = useFetch(fetchCount, triggerCount)

    useEffect(() => {
        debounceSetTriggerCount()
    }, [count])

    const timer = useRef<any>()
    const debounceSetTriggerCount = useCallback(() => {
        if(timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = window.setTimeout(() => {
            setTriggerCount(count)
        }, 1000)

    }, [count])

    return (
        <div className="App" style={{display: 'grid', height: '100vh', justifyItems: 'center', alignContent: 'center'}}>
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
                    />}
                    Click
                </Button>
                <Alert variant="filled" severity="info">
                    Кликнули {count} раз
                </Alert>
                <ClicksFromServer count={data} err={error} />
            </Stack>
        </div>
    );
}

export default App;
