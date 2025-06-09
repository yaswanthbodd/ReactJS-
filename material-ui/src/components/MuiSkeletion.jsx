import { Skeleton, Stack } from "@mui/material"

export const MuiSkeletion = ()=> {
    return(
        <Stack spacing={1} margin={'50px'} width={'250px'}> 
            <Skeleton animation={false}/>
            <Skeleton variant="text" animation={"wave"}/>
            <Skeleton variant="circular" width={40} height={40} animation={"wave"}/>
            <Skeleton variant="rectangular" width={250} height={250} animation={"wave"}/>
        </Stack>
    )
}