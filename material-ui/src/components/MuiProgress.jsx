import { CircularProgress, LinearProgress, Stack } from "@mui/material"

export const MuiProgress = ()=> {
    return(
        <Stack spacing={4} margin={'50px'}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress variant="determinate" value={90} />

            <h1>Linear Progress</h1>
            <LinearProgress />
            <LinearProgress color="success" />
            <LinearProgress variant="determinate" value={25} sx={{width : '100px'}}/>
            
        </Stack>
    )
}