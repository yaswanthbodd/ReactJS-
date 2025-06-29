import { Box, TextField,Button } from "@mui/material"
import { useState } from "react"

export const UserForm  = ()=> {
    const [username, setUsername] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("New User ",username);
    }
    return(
        <Box component={'form'} onSubmit={handleSubmit}>
            <TextField label='User Name' name='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <Button type="submit">Submit</Button>
        </Box>
    )
}