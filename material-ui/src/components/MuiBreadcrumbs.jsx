import { Box,Breadcrumbs,Link, Typography } from "@mui/material"

export const MuiBreadcrumbs = ()=> {
    return(
        <Box margin={2}>
            <Breadcrumbs aria-label="breadcrumb" separator="-" maxItems={2}>
                <Link href="#" underline="hover">Home</Link>
                <Link href="#" underline="hover">Accessories</Link>
                <Link href="#" underline="hover">Shirts</Link>
                <Typography color="text.primary">US Polo</Typography>
            </Breadcrumbs>
        </Box>
    )
}