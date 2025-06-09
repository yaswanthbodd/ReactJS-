import { Stack } from "@mui/material"
import {LoadingButton} from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'
export const MuiLoadingButton = ()=> {
    return(
        <Stack spacing={2} margin={'50px'} direction={'row'}>
            <LoadingButton variant="contained">Submit</LoadingButton>
            <LoadingButton loading variant="contained"></LoadingButton>
            <LoadingButton variant="outlined" loadingIndicator='loading...'>Fetch data</LoadingButton>
            <LoadingButton variant="outlined" loading loadingIndicator='loading....'>Fetch data</LoadingButton>
            <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveIcon />}>Save</LoadingButton>
            <LoadingButton variant="outlined" loadingPosition="start" loading startIcon={<SaveIcon />}>Save</LoadingButton>
        </Stack>
    )
}