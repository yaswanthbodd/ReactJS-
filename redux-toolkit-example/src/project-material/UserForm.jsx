import { Box, TextField,Button } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUsers } from "./redux/userSlice";

export const UserForm  = ()=> {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log("New User ",username);
        dispatch(addUsers(username))
        setUsername('')
    }
    return(
        <Box component={'form'} onSubmit={handleSubmit}>
            <TextField label='User Name' name='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <Button type="submit">Submit</Button>
        </Box>
    )
}