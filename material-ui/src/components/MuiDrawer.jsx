import { Box, Drawer, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return(
        <>
            <IconButton size="large" color="inherit" edge="start" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
                <MenuIcon /> 
            </IconButton>
            <Drawer anchor="right" open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
                <Box p={2} width={'250px'} textAlign={'center'} role='presentation'>
                    <Typography variant="h6" component='div'>Side Panel</Typography>
                        
                </Box>
            </Drawer>
        </>
    )
}