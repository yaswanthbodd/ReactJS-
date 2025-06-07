import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

export const MuiRadioButton = ()=>{
    const [value, setValue] = useState('');
    console.log(value);
    return(
        <Box margin={"40px"}>
            <FormControl>
                <FormLabel id="job-experience-group-label">Years Of Experience</FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby="job-experience-group-label" value={value} onChange={(e)=>setValue(e.target.value)}>
                    <FormControlLabel control={<Radio color="secondary"/>} value='0-2' label='0-2' />
                    <FormControlLabel control={<Radio />} value='3-5' label='3-5'/>
                    <FormControlLabel control={<Radio />} value='6-10' label='6-10' />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}