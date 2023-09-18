import React from 'react';
import { Alert } from '@mui/material';
import { CountType } from '../types/CountTypes';
import { IFetchError } from '../types/ErrorType';

interface IServerClicksAlertProps {
    readonly count: CountType
    readonly err: IFetchError
}

const ServerClicksAlert: React.FC<IServerClicksAlertProps> = ({ count, err }) => {
    return (
        <Alert severity="warning">
            {err.error_ui || `По версии сервера: ${count?.count ?? 0} раз`}
        </Alert>
    )
}

export default React.memo(ServerClicksAlert)
