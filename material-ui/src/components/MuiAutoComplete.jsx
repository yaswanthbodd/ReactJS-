import { Autocomplete, Stack, TextField } from "@mui/material"
import { useState } from "react"

const skills = ['HTML','CSS','JAVASCRIPT','REACTJS','TYPESCRIPT']

// Object Type
const skillsOptions = skills.map((skill, index)=>({
    id : index + 1,
    label : skill
}))

export const MuiAutoComplete = ()=> {
    const [value, setValue] = useState(null);
    const [skill, setSkill] = useState(null);
    console.log(value);
    console.log(skill)
    return(
        <Stack spacing={2} width={'250px'}>
            <Autocomplete 
            options={skills} 
            renderInput={(params)=><TextField {...params} label='Skills'/>} 
            value={value}
            onChange={(e,newValue)=>{setValue(newValue)}}
            freeSolo
            />

            <Autocomplete 
            options={skillsOptions}
            renderInput={(parmas) => <TextField {...parmas} label='Skill'/> }
            value={skill}
            onChange={(e,newValue)=>setSkill(newValue)}
            />
        </Stack>
    )
}