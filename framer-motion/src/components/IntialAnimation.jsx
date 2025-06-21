import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import {color, motion} from 'framer-motion'

const MotionButton = motion(Button);
const MotionStack = motion(Stack);

const IntialAnimation = () => {
  return (
    <Box padding={20}>
        <motion.div initial={{ opacity : 0, y:0}} animate={{opacity : 1,y : 0}} transition={{delay : 0.3, type : 'spring', stiffness : 15}}>
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
        <motion.div initial={{opacity : 0}} animate={{opacity : 1}} transition={{ delay : 0.5, duration : 1.5}}>
            <h2>Hello This is the Example</h2>
        </motion.div>
        <motion.div animate={{}}>
            {/* <motion.h2 animate={{ fontSize : 50 , x : 100, y: -100}}>Hello this is yaswanth</motion.h2> */}
            <motion.button style={{margin : '50px'}} initial={{ x: '-100vw'}} animate={{ scale : 1.5, x:0 }} transition={{ delay : 0.5 , type:'spring', stiffness : 15 }}>Create</motion.button>
            {/* <Button variant="contained">Create</Button> */}

            <MotionButton variant="contained" initial={{opacity : 0}} animate={{scale:1.5, opacity :1, y:0}} transition={{ delay : 0.3, type:'spring', stiffness : 15}} whileHover={{ scale : 1.2 , textShadow : "0px 0px 8px rgb(255,255,255)", boxShadow : "0px 0px 8px rgb(255,255,255)"}}>
                Hello
            </MotionButton>

            
            <MotionStack whileHover={{ scale : 1.2, horizOriginX: 0}}>
                {/* <li>List Items</li> */}
                <Button>Pizza</Button>
                <Button>Burger</Button>
                <Button>Pepsi</Button>
                <Button>Thumbsup</Button>
                <Button>Sprit</Button>
            </MotionStack>
        </motion.div>

        
    </Box>
  )
}

export default IntialAnimation