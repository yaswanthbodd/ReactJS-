import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const Navbar = ()=>{

    const updatedLikes = useSelector((state)=> state.counter.value)
    const userCount = useSelector((state)=> state.newSubscriber.users)
    const commentsCount =  useSelector((state)=> state.newComments.comments)

    return(
        <AppBar color='inherit' sx={{justifyContent : 'space-between'}}>
            <Toolbar variant='regular'>
                <Typography sx={{flexGrow : 1}}>Redux</Typography>
                
                <Box sx={{flexGrow : 1}}>
                    <Typography>Subscribers : {userCount.length} </Typography>
                </Box>
                <Typography sx={{flexGrow : 1}}>Comments : {commentsCount?.length} </Typography>
                <Typography sx={{flexGrow : 1}}>Likes : {updatedLikes} </Typography>
            </Toolbar>
        </AppBar>
    )
}