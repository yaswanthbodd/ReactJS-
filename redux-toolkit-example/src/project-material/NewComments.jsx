import { Box } from "@mui/material"
import { useSelector } from "react-redux"


export const NewComments = ()=> {

    const newComment = useSelector((state)=> state.newComments.comments)

    return(
        <Box>
            New Comments : 
            {
                newComment.map((item,index)=>{
                    return(
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