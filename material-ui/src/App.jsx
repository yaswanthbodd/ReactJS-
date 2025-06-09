import { Box } from "@mui/material"
import { Landingpage } from "./main-folder/pages/LandingPage"
import { TypographyMUI } from "./components/typography"
import { MUIButtons } from "./components/MUIButtons"
import { MuiTextFields } from "./components/MuiTextFields"
import { MuiSelect } from "./components/MuiSelect"
import { MuiRadioButton } from "./components/MuiRadioButton"
import { MuiCheckBox } from "./components/MuiCheckBox"
import { MuiSwitch } from "./components/MuiSwitch"
import { MuiRating } from "./components/MuiRating"
import { MuiAutoComplete } from "./components/MuiAutoComplete"


function App() {
  return (
    <Box margin={'40px'}>
      {/* <TypographyMUI /> */}
      {/* <MUIButtons /> */}
      {/* <MuiTextFields/> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckBox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      <MuiAutoComplete />
    </Box>
  )
}

export default App
