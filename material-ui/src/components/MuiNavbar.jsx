import { AppBar, IconButton, Toolbar, Typography,Stack,Button } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export const MuiNavbar = () => {
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
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}