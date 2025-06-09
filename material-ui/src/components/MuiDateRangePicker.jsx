import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box, TextField } from "@mui/material"
import { useState } from "react";

export const MuiDateRangePicker = ()=>{
    const [value, setValue] = useState([null, null]);

    return(
        <Box width={'500px'}>
            <DateRangePicker startText='Check-In' endText='Check-Out' value={value} onChange={(newValue) => {setValue(newValue)}} renderInputs={(startProps,endProps)=>(
                <>
                    <TextField {...startProps} />
                    <Box sx={{mx: 2}}>to</Box>
                    <TextField {...endProps} />
                </>
            )}/>        
        </Box>
    )
}