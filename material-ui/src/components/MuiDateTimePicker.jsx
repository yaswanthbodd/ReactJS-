import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react"
import { Stack, TextField } from "@mui/material"; 
export const MuiDateTimePicker = ()=> {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    console.log(selectedDate);  
    console.log({selectedTime : selectedTime && selectedTime.toLocaleTimeString(), });
    console.log(selectedDateTime);
    return(
        <Stack spacing={2} sx={{ width: '250px' }} margin={'50px'}>  
            <DatePicker 
            label='Date Picker'
            renderInput= {(params)=> <TextField {...params} />}
            value={selectedDate}
            onChange={((newValue)=>{setSelectedDate(newValue)})}
            />

            <TimePicker
            label='Time Picker'
            renderInput = {(params) => <TextField {...params} />}
            value={selectedTime}
            onChange={((newValue)=>{setSelectedTime(newValue)})}
            />

            <DateTimePicker
            label='Date Time Picker'
            renderInput = {(params) => <TextField {...params} />}
            value={selectedDateTime}
            onChange={((newValue)=>{setSelectedDateTime(newValue)})}
            />
        </Stack>
    )
}