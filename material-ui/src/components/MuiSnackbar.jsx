import { Button, Snackbar,Alert } from "@mui/material"
import { useState,forwardRef } from "react"

//Custom Snackbar
const CustomSnackbarAlert = forwardRef(
    function CustomSnackbarAlert(props,ref){
        return <Alert elevation={5} ref={ref} {...props} />
    }
)
export const MuiSnackbar = ()=> {
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) =>{
        if(reason === 'clickaway'){
            return
        }
        setOpen(false)
    }

    return(
        <>
            <Button onClick={()=> setOpen(true)}>Submit</Button>
            {/* <Snackbar 
            message = 'Form Submitted Successfully!'
            autoHideDuration={2000}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical : "top",
                horizontal : "right"
            }}
            /> */}

            <h1>Custom Snackbar</h1>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <CustomSnackbarAlert onClose={handleClose} severity='success'>
                    Form Submitted Succesfully
                </CustomSnackbarAlert>
            </Snackbar>
        </>
    )
}