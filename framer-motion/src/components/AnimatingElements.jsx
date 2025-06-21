import { Box, Button, Typography } from "@mui/material"
import {color, motion} from 'framer-motion'
const AnimatingElements = () => {
  return (
    <Box padding={20}>
        <motion.div animate={{}}>
            <motion.h2 animate={{ fontSize : 50 , x : 100, y: -100}}>Hello this is yaswanth</motion.h2>
            <motion.button animate={{ scale : 1.5}}>Create</motion.button>
            <Button variant="contained">Create</Button>
        </motion.div>
    </Box>
  )
}

export default AnimatingElements