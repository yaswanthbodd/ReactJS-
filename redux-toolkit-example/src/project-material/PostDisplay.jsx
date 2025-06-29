import { Box, Button, Stack, Typography } from "@mui/material"
import { CommentForm } from "./CommentForm"
import { UserForm } from "./UserForm"
import { useState } from "react"
import { NewUsers } from "./NewUsers"
import { NewComments } from "./NewComments"
import { useDispatch } from "react-redux"
import { increment } from "./redux/counterSlice"

export const PostDisplay = ()=> {
    const [commentDisplay, setCommentDisplay] = useState(false);
    const [userformDisplay, setUserformDisplay] = useState(false);

    const dispatch = useDispatch()

    const likeHandler = ()=> {
        dispatch(increment())
    }

    return(
        <Box display={'flex'} justifyContent={'space-around'}>
            <Box>
                <Box marginTop={20} display={'flex'} justifyContent={'center'}>
                    <img className="w-80 h-80 object-cover rounded" src="images/pic-21.jpg" alt='KL Rahul' />
                    
                </Box>
                <Stack gap={2} marginTop={4} direction={'row'} display={'flex'} justifyContent={'center'}>
                        <Button onClick={()=> setUserformDisplay(!userformDisplay)} variant="contained">Subscribe</Button>
                        <Button onClick={()=> setCommentDisplay(!commentDisplay)} variant="contained">Comment</Button>
                        <Button onClick={likeHandler} variant="contained">Like</Button>
                </Stack>
                <Box marginTop={4} display={'flex'} justifyContent={'center'}>
                    {
                        commentDisplay ? <CommentForm /> : ''
                    }
                    {
                        userformDisplay ? <UserForm /> : ''
                    }
                </Box>
            </Box>
            <Box marginTop={20}>
                <Box paddingBottom={20} paddingRight={10}>
                    <NewUsers />
                </Box>
                <Box paddingBottom={20} paddingRight={10}>
                    <NewComments />
                </Box>
                
            </Box>
        </Box>
    )
}