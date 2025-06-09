import { Box, Skeleton, Stack, Typography,Avatar } from "@mui/material"
import { useState, useEffect } from "react"

export const SkeletionExample = ()=>{
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])

    return(
        <Box sx={{width : '250px'}} margin={'50px'}>
            {
                loading ? (
                    <Skeleton variant="rectangular" width={256} height={144} animation = 'wave'/>
                ) : (
                    <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="title" width={256} height={144} />
                )
            }
            <Stack direction={'row'} spacing={1} sx={{ width : '100%', marginTop : '12px'}}>
                {
                    loading ? (
                        <Skeleton variant="circular" width={40} height={40} animation={'wave'}/>
                    ) : (
                        <Avatar>B.Y</Avatar>
                    )
                }
                <Stack width={'80%'}> 
                    {
                        loading ? (
                            <>
                                <Typography variant="body1">
                                    <Skeleton variant="text" width='100%' animation='wave'  />
                                </Typography>
                                <Typography variant="body1">
                                    <Skeleton variant="text" width='100%' animation='wave' />
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography variant="body1">React MUI</Typography>
                                <Typography variant="body1">React MUI</Typography>
                            </>
                        )
                    }
                </Stack>
            </Stack>
        </Box>
    )
}