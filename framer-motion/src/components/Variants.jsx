import React from 'react'
import { delay, motion } from 'framer-motion'
import { Box,IconButton, Stack, AppBar, Toolbar, Button } from '@mui/material'

// Create the variants 
const containerVariants = {
    hidden : {
        opacity : 0,
    },
    visible : {
        opacity : 1,
        transition : {
            type : 'spring',
            delay : 0.5,
            stiffness : 20
        }
    }
}

const Variants = () => {
  return (
    <Box>
        <motion.div variants={containerVariants} initial='hidden' animate='visible'
        >
        <AppBar>
            <Toolbar>
                <IconButton>Logo</IconButton>
                <Stack direction={'row'}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </motion.div>
    </Box>
  )
}

export default Variants