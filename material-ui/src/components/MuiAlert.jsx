import { Alert, AlertTitle, Button, Stack } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'
export const MuiAlert = ()=> {
    return(
        <Stack spacing={5} margin={'50px'}>
            <Alert severity="error">This is Error Message</Alert>
            <Alert severity="warning">This is Warning Message</Alert>
            <Alert severity="info">This is Info Message</Alert>
            <Alert severity="success">This is Success Message</Alert>

            <Alert variant="outlined" severity="error">This is Error Message</Alert>
            <Alert variant="outlined" severity="warning">This is Warning Message</Alert>
            <Alert variant="outlined" severity="info">This is Info Message</Alert>
            <Alert variant="outlined" severity="success">This is Success Message</Alert>

            <Alert variant="filled" severity="error" onClose={()=>(alert('Closed'))}>
                This is Error Message
                <AlertTitle>This is the secondary Message</AlertTitle>
            </Alert>
            <Alert variant="filled" severity="warning">This is Warning Message</Alert>
            <Alert variant="filled" severity="info">This is Info Message</Alert>
            <Alert variant="filled" severity="success" icon={<CheckIcon />} action={ <Button color="inherit">UNDO</Button>} >This is Success Message</Alert>
        </Stack>
    )
}