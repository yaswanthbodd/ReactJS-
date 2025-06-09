import { Rating, Stack } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from "react";
export const MuiRating = ()=> {
    const [value, setValue] = useState(0 | null | 3);
    console.log(value);
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }
    return(
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} size='large' precision={0.5}/>
            <Rating value={value} onChange={handleChange} size='large' icon={<FavoriteIcon fontSize="inherit" color="error"/>} emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>} highlightSelectedOnly/>
        </Stack>
    )
}