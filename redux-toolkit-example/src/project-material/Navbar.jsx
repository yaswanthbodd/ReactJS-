import { AppBar, Box, Toolbar, Typography } from '@mui/material'
export const Navbar = ()=>{
    return(
        <AppBar color='inherit' sx={{justifyContent : 'space-between'}}>
            <Toolbar variant='regular'>
                <Typography sx={{flexGrow : 1}}>Redux</Typography>
                
                <Box sx={{flexGrow : 1}}>
                    <Typography>Subscribers</Typography>
                </Box>
                <Typography sx={{flexGrow : 1}}>Comments : </Typography>
                <Typography sx={{flexGrow : 1}}>Likes : </Typography>
            </Toolbar>
        </AppBar>
    )
}