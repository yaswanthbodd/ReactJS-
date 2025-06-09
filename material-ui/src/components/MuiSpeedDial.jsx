import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'

export const MuiSpeedDial = () => {
    return(
        <div>
            <SpeedDial icon={<SpeedDialIcon openIcon={<EditIcon />} />} ariaLabel="Navigation Speed dial" sx={{position : 'absolute', bottom : 16, right : 16}} >
                <SpeedDialAction icon={<CopyIcon />} tooltipTitle={'Copy'} tooltipOpen>Copy</SpeedDialAction>
                <SpeedDialAction icon={<PrintIcon />} tooltipTitle={'Print'}>Print</SpeedDialAction>
                <SpeedDialAction icon={<ShareIcon />} tooltipTitle={'Share'}>Share</SpeedDialAction>
            </SpeedDial>
        </div>
    )
}