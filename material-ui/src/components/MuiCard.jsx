import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const MuiCard = ()=> {
    return(
        <Box width={'300px'}>
            <Card elevation={4}>
                <CardMedia
                component='img'
                height='140'
                image='/dell.jpg'
                alt="Unsplash image"
                />
                <CardContent>
                    <Typography variant="h5" component='div' gutterBottom>ReactJs</Typography>
                    <Typography variant="body2" color="text.secondary">ReactJs is a Javascript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications</Typography>
                </CardContent>
                <CardActions>
                    <Button>Share</Button>
                    <Button>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}