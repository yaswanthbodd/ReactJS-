import { Box } from "@mui/material"

export const MuiResponsiveness = ()=>{
    return(
        <Box 
            sx={{
                height : '300px',
                width : {
                    xs : '80%',
                    sm : '200px',
                    md : '300px',
                    lg : '400px',
                    xl : '500px'
                },
                bgcolor : 'secondary.main'
                
            }}
        >

        </Box>
    )
}