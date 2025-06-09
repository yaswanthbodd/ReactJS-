import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react";
export const MuiSwitch = ()=> {
    const [check, setCheck] = useState(false);
    console.log(check);
    return(
        <Box>
            <FormControlLabel label='Dark Mode' control={<Switch checked={check} onChange={(e)=> setCheck(e.target.checked)}/>} />
        </Box>
    )
}