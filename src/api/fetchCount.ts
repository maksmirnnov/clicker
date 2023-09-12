import axios from 'axios';

const fetchCount = (count: number) => axios.post('https://lk.zont-online.ru/api/button_count', JSON.stringify({'count': count}), {
    headers: {
        'X-ZONT-Client': 'telegram: @maksmirnnov',
        'Content-type': 'application/json'
    }
})

export default fetchCount;
