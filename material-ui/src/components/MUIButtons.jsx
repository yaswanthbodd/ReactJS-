import { Button, Stack, IconButton, ButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
export const MUIButtons = ()=>{
    return(
        <Stack>
            <Stack direction={"row"} spacing={2} style={{margin:'20px'}}>
                <Button variant="text" href='https://www.google.com'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <h1>Colors</h1>
            <Stack direction={'row'} spacing={3} style={{margin:'20px'}}>
                <Button variant='contained' color="primary">Primary</Button>
                <Button variant='contained' color="secondary">Secondary</Button>
                <Button variant='contained' color="error">Error</Button>
                <Button variant='contained' color="warning">Warning</Button>
                <Button variant='contained' color="info">Info</Button>
                <Button variant='contained' color="success">Success</Button>
            </Stack>
            <h1>Size of the Buttons</h1>
            <Stack direction={'row'} spacing={3} display={'block'} style={{margin:'20px'}}>
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <h1>Icons</h1>
            <Stack direction={'row'} spacing={3} display={'block'} style={{margin:'20px'}}>
                <Button variant="contained" startIcon={<SendIcon/>} disableRipple>send</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableElevation>send</Button>
                <IconButton aria-label="send" size="large" color="success">
                    <SendIcon/>
                </IconButton>
            </Stack>
            <h1>Group Buttons</h1>
            <Stack direction='row' style={{margin:'20px'}}>
                <ButtonGroup variant="contained" orientation="vertical" color="secondary" size="large">
                    <Button onClick={()=>{ alert('Left Clicked')}}>Left</Button>
                    <Button onClick={()=>{alert('center Clicked')}}>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    )
}