import { Alert } from '@mui/material';

export default function ClicksFromServer({ count, err }: any) {
    return (
        <Alert severity="warning">
            {err.error_ui || `По версии сервера: ${count.count} раз`}
        </Alert>
    )
}
