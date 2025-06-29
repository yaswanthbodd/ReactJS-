import { Box } from "@mui/material"
import { useSelector } from "react-redux"

export const NewUsers = () => {

    const newUsers = useSelector((state)=> state.newSubscriber.users)


    return(
        <Box>
            Subscribers : 
            {
                newUsers.map((item,index)=>{
                    return (
                        <Box>
                            <ul key={index}>
                                <li>{item}</li>
                            </ul>
                        </Box>
                    )
                })
            }
        </Box>
    )
}