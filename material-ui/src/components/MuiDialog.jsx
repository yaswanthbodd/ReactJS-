import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'
import { useState } from 'react';
export const MuiDialog = () => {
    const [open, setOpen] = useState(false);
    return(
        <>
            <Button onClick={()=>setOpen(true)}>Submit</Button>
            <Dialog open={open} onClick={()=>setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
                <DialogTitle id='dialog-title'>Submit the test ?</DialogTitle>
                <DialogContent id='dialog-description'>
                    <DialogContentText>Are you sure you want to submit the test? You will not be able to edit after submitting</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button onClick={()=>setOpen(false)} autoFocus>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}