import { Avatar, Chip, Stack } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face'
import { useState } from "react"

export const MuiChip = ()=> {
    const [chips, setChips] = useState(['chip1', 'chip2', 'chip3'])
    const handleDelete = (chipToDelete) => {
        setChips(chips.filter(chip => chip !== chipToDelete))
    }
    return(
        <Stack spacing={4} margin={'50px'} direction={'row'}>
            <Chip label='Chip' size="small" icon={<FaceIcon/>} color="primary"/>
            <Chip variant="outlined" label='Chip Outlined' color="secondary" size="small" avatar={<Avatar>Y</Avatar>}/>
            <Chip label='Click' color="success" onClick={()=>{alert('Clicked')}}/>
            <Chip label='Delete' color="error" onClick={()=>{alert('Clicked')}} onDelete={()=>{alert('Deleted the Records')}}/>
            {
                chips.map((chip)=>(
                    <Chip key={chip} label={chip} onDelete={()=> handleDelete(chip)} />
                ))
            }
        </Stack>
    )
}