import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
export const MuiTooltip = ()=> {
    return(
        <div style={{margin:'50px'}}>
            <Tooltip title='Delete' placement="right" arrow enterDelay={500} leaveDelay={1000}>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

