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
import { MuiBoxLayout } from "./components/MuiBoxLayout"
import { MuiCard } from "./components/MuiCard"
import { MuiAccordion } from "./components/MuiAccordion"
import { MuiImageList } from "./components/MuiImageList"
import { MuiNavbar } from "./components/MuiNavbar"
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs"
import { MuiDrawer } from "./components/MuiDrawer"
import { MuiSpeedDial } from "./components/MuiSpeedDial"
import { MuiBottomNavigation } from "./components/MuiBottomNavigation"
import { MuiAvatar } from "./components/MuiAvatar"
import { MuiBadge } from "./components/MuiBadge"
import { MuiList } from "./components/MuiList"
import { MuiChip } from "./components/MuiChip"
import { MuiTooltip } from "./components/MuiTooltip"
import { MuiTable } from "./components/MuiTable"
import { MuiAlert } from "./components/MuiAlert"
import { MuiSnackbar } from "./components/MuiSnackbar"
import { MuiDialog } from "./components/MuiDialog"
import { MuiProgress } from "./components/MuiProgress"
import { MuiSkeletion } from "./components/MuiSkeletion"
import { SkeletionExample } from "./components/SkeletionExample"
import { MuiLoadingButton } from "./components/MuiLoadingButton"
import {MuiDateRangePicker} from "./components/MuiDateRangePicker"

// For Date and Time Picker 
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MuiDateTimePicker } from "./components/MuiDateTimePicker"
import { MuiTabs } from "./components/MuiTabs"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Box>
      {/* <TypographyMUI /> */}
      {/* <MUIButtons /> */}
      {/* <MuiTextFields/> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckBox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutoComplete /> */}
      {/* <MuiBoxLayout /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiImageList /> */}
      {/* <MuiNavbar /> */}
      {/* <MuiBreadcrumbs /> */}
      {/* <MuiDrawer /> */}
      {/* <MuiSpeedDial /> */}
      {/* <MuiBottomNavigation /> */}
      {/* <MuiAvatar /> */}
      {/* <MuiBadge /> */}
      {/* <MuiList /> */}
      {/* <MuiChip /> */}
      {/* <MuiTooltip /> */}
      {/* <MuiTable /> */}
      {/* <MuiAlert /> */}
      {/* <MuiSnackbar /> */}
      {/* <MuiDialog /> */}
      {/* <MuiProgress /> */}
      {/* <MuiSkeletion /> */}
      {/* <SkeletionExample /> */}
      {/* <MuiLoadingButton /> */}
      {/* <MuiDateTimePicker /> */}
      {/* <MuiDateRangePicker /> */}
      <MuiTabs />
    </Box>
    </LocalizationProvider>
  )
}

export default App
