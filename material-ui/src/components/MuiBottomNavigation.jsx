import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from "react"

export const MuiBottomNavigation = ()=> {
    const [value, setValue] = useState(0);
    
    return(
        <div>
            <BottomNavigation sx={{ width : '100%', position : 'absolute', bottom: '0'}} 
            value={value} 
            onChange={(e,newValue)=> setValue(newValue)} showLabels>
                <BottomNavigationAction label='Home' icon={<HomeIcon />} />
                <BottomNavigationAction label='Favorite' icon={<FavoriteIcon />} />
                <BottomNavigationAction label='Person' icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    )
}