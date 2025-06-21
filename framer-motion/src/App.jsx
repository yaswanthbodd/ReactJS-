import './App.css'
import {Box, Container, Typography} from '@mui/material'
import AnimatingElements from './components/AnimatingElements'
import { yellow } from '@mui/material/colors'
import IntialAnimation from './components/IntialAnimation'
import Variants from './components/Variants'
import AnimatePresenceExam from './components/AnimatePresenceExam'

function App() {
  return (
    <Container>
      <Box sx={{ backgroundColor : 'yellow'}}>
          {/* <AnimatingElements /> */}
          {/* <IntialAnimation /> */}
          {/* <Variants /> */}
          <AnimatePresenceExam />
      </Box>
    </Container>
  )
}

export default App
