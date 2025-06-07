import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from "react"

export const MuiCheckBox = ()=>{
    const [acceptInc, setAcceptTnc] = useState(false);
    const [skills, setSkills] = useState([]);

    console.log(acceptInc)
    const handleSkillChange = (e)=>{
        const index = skills.indexOf(e.target.value);
        if(index === -1){
            setSkills([...skills, e.target.value])
        }else{
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
    }

    console.log(skills);
    return(
        <Box>
            <Box>
                <FormControlLabel control={<Checkbox checked={acceptInc}  onChange={(e)=>{setAcceptTnc(e.target.checked)}}/>} label='I accept the terms and conditions'/>
            </Box>
            <Box>
                <Checkbox 
                icon={<BookmarkIcon />}
                checkedIcon={<BookmarkBorderIcon/>}
                />
            </Box>
            <h1>Check Box Skills</h1>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange}/>} label='HTML' value='html'/>
                        <FormControlLabel control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange}/>} label='CSS' value='css' />
                        <FormControlLabel control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange}/>} label='JAVASCRIPT' value='javascript' />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}