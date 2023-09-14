import { Alert } from '@mui/material';
import { CountType } from '../types/CountType';

interface IClicksFromServerProps {
    count: CountType
    err: string
}

const ClicksFromServer: React.FC<IClicksFromServerProps> = ({ count, err }) => {
    return (
        <Alert severity="warning">
            {err || `По версии сервера: ${count?.count ?? 0} раз`}
        </Alert>
    )
}

export { ClicksFromServer }
