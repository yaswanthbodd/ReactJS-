import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

export const MuiSelect = ()=>{
    const [selectState, setSelectState] = useState('');
    const [selectStates, setSelectStates] = useState([]);
    const handleStateSelections = (e)=>{
        const value = e.target.value
        setSelectStates(typeof value === 'string' ? value.split(',') : value)
    }
    //console.log(selectState);
    console.log(selectStates);
    return(
        <Box margin={"40px"} width={"240px"}>
            <TextField label="Select State" select fullWidth value={selectState} onChange={(e)=>setSelectState(e.target.value)}> 
                <MenuItem value="Hyd">Telangana</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
            </TextField>
            <h1>Multiple selections</h1>
            <TextField label="Select States" select fullWidth value={selectStates} SelectProps={{ multiple : true}} onChange={handleStateSelections}>
                <MenuItem value='Telangana'>Telangana</MenuItem>
                <MenuItem value='Andhra Pradesh'>Andhra Pradesh</MenuItem>
                <MenuItem value='Chennai'>Chennai</MenuItem>
                <MenuItem value='Goa'>Goa</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
            </TextField>
        </Box>
    )
}