import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"

export const CommentForm = ()=>{
    const [comments , setComments] = useState('')
    const handleSubmit  = (e)=>{
        e.preventDefault();
        console.log(comments);
    }
    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField  label='Enter your comment' type="text" name="subscribe" value={comments} onChange={(e)=> setComments(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    )
}