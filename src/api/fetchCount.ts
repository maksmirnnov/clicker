import axios from 'axios';
import { CountType } from '../types/CountTypes';

export const COUNT_CREATOR = (count: number):CountType => ({count})

export const fetchCount = (count?: CountType) => axios.post<CountType>('https://lk.zont-online.ru/api/button_count', JSON.stringify(count), {
    headers: {
        'X-ZONT-Client': 'telegram: @maksmirnnov',
        'Content-type': 'application/json'
    }
})
