import { Badge, Stack } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail'
export const MuiBadge = ()=> {
    return(
        <Stack spacing={4} margin={'40px'} direction={'row'}>
            <Badge>
                <MailIcon />
            </Badge>
            <Badge badgeContent={10} color="primary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={100} color="primary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={100} color="primary" max={999} invisible={false}>
                <MailIcon />
            </Badge>
        </Stack>
    )
}