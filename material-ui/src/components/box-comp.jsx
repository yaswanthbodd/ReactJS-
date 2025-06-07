import {Box, Button} from '@mui/material'
export const BoxComp = ()=>{
    return(
        <div>
            <Box sx={{color:'red', border:'1px solid red'}}>
                Hello
                Buttons
                <Button variant='text'>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Box>
        </div>
    )
}