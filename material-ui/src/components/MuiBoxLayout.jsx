import { Box, Divider, Grid, Stack } from "@mui/material"

export const MuiBoxLayout = ()=> {
    return(
        <>
        <Box 
        component={'span'} 
        sx={{
            backgroundColor : 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding : '16px',
            '&:hover' : {
                backgroundColor : 'primary.light'
            },
        }}
        >
            Hello
        </Box>
        <Box 
            display = 'flex'
            
            height= '100px'
            width = '100px'
            bgcolor= 'success.light'
            p = {2}
            
        >

        </Box>

        <h1>Stack Layout</h1>
        <Stack sx={{ border: '1px solid'}} direction={'row'} spacing={2} divider={<Divider orientation="vertical" flexItem/>}>
            <Box sx={{ height:'100px', width:'100px', padding: '16px', backgroundColor: 'blue' }}>Hello</Box>
            <Box sx={{ height:'100px', width:'100px', padding: '16px', backgroundColor: 'green' }}>Hello</Box>
        </Stack>

        <h1>Grid Layout</h1>
        <Grid container >   
            <Grid item xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>Hello</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>Hello</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>Hello</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>Hello</Box>
            </Grid>
        </Grid>
        </>
    )
}