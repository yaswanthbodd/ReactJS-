import { Avatar, AvatarGroup, Stack } from "@mui/material"

export const MuiAvatar = ()=> {
    return(
        <Stack spacing={4} margin={'40px'}>
            <Stack spacing={1} direction={'row'}>
                <Avatar sx={{bgcolor : 'primary.light'}}>BY</Avatar>
                <Avatar sx={{bgcolor : 'success.light'}}>YB</Avatar>
            </Stack>
            <h1>Avatar With Random Images</h1>
            <Stack spacing={3} direction={'row'}>
                <Avatar src="https://randomuser.me/api/portraits/women/31.jpg" alt='random women image'/>
                <Avatar src='https://randomuser.me/api/portraits/men/36.jpg' alt='random men image' />
            </Stack>
            <h1>Avatar Groups</h1>
            <AvatarGroup >
                <Avatar sx={{bgcolor : 'primary.light'}}>BY</Avatar>
                <Avatar sx={{bgcolor : 'success.light'}}>YB</Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/31.jpg" alt='random women image'/>
                <Avatar src='https://randomuser.me/api/portraits/men/36.jpg' alt='random men image' />
            </AvatarGroup>
            <AvatarGroup max={2}>
                <Avatar sx={{bgcolor : 'primary.light'}}>BY</Avatar>
                <Avatar sx={{bgcolor : 'success.light'}}>YB</Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/31.jpg" alt='random women image'/>
                <Avatar src='https://randomuser.me/api/portraits/men/36.jpg' alt='random men image' />
            </AvatarGroup>
        </Stack>
    )
}