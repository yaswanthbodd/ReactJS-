import { Box,Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
export const MuiTabs = ()=>{
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    }
    return(
        <Box width={'300px'} margin={'50px'}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList aria-label="Tabs example" onChange={handleChange} variant="scrollable" scrollButtons="auto">
                        <Tab label='Tab One' value='1' icon={<FavoriteIcon /> } iconPosition="start"/>
                        <Tab label='Tab Two' value='2' />
                        <Tab label='Tab Three' value='3' />
                        <Tab label='Tab Four' value='4' />
                        <Tab label='Tab Five' value='5' />
                        
                    </TabList>
                </Box>
                <TabPanel value='1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum dolore aliquid omnis veritatis animi nemo quos? Aliquam adipisci ut illo atque amet impedit necessitatibus eaque. Cupiditate culpa officiis inventore, facilis provident magnam deserunt voluptas! Minima hic pariatur quam illo cum ratione magnam eius neque officia natus, corrupti veniam quidem cupiditate assumenda magni aut ex suscipit. Facilis magni corporis possimus autem animi nemo iusto provident.</TabPanel>
                <TabPanel value='2'>Panel Two</TabPanel>
                <TabPanel value='3'>Panel Three</TabPanel>
                <TabPanel value='4'>Panel Four</TabPanel>
                <TabPanel value='5'>Panel Five</TabPanel>
            </TabContext>
        </Box>
    )
}