import { AppBar, IconButton, Toolbar, Typography,Stack,Button, Menu, MenuItem } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from "react"

export const MuiNavbar = () => {

    //menu purpose
    const [anchorEl, setAnchorEl] = useState(null);
    const open = (Boolean)(anchorEl); // -> It tells content is shown or not

    //handleClick for resources
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    // Close the menu
    const handleClose = () => {
        setAnchorEl(null)
    }
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component='div' sx={{flexGrow : 1}}>
                    POKEMONAPP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Blog</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit" 
                    id="resources-button" 
                    onClick={handleClick}
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-haspopup = 'true'
                    aria-expanded = { open ? 'true' : undefined}
                    endIcon={<KeyboardArrowDownIcon />}
                    >Resources</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu id="resources-menu" 
                anchorEl={anchorEl} 
                open={open} 
                MenuListProps={{ 'aria-labelledby' : 'resources-button' }}
                onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}