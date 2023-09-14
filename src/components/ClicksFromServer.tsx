import React from 'react';
import { Alert } from '@mui/material';
import { CountType } from '../types/CountTypes';
import { IErrorType } from '../types/ErrorType';

interface IClicksFromServerProps {
    readonly count: CountType
    readonly err: IErrorType
}

const ClicksFromServer: React.FC<IClicksFromServerProps> = ({ count, err }) => {
    return (
        <Alert severity="warning">
            {err.error_ui || `По версии сервера: ${count?.count ?? 0} раз`}
        </Alert>
    )
}

export default React.memo(ClicksFromServer)
