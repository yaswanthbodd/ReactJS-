import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addComments } from "./redux/commentSlice"

export const CommentForm = ()=>{
    const [userComments , setUserComments] = useState('')

    const dispatch = useDispatch();

    const handleSubmit  = (e)=>{
        e.preventDefault();
        console.log("Comments: ",userComments);
        dispatch(addComments(userComments))
        setUserComments('')
    }
    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField  label='Enter your comment' type="text" name="subscribe" value={userComments} onChange={(e)=> setUserComments(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    )
}