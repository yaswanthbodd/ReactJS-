import { Button, styled } from "@mui/material"

// Customized Button
const MyOwnButton = styled(Button)({
    backgroundColor:'red',
    color:'white'
})

export const CustomButton = ()=>{
    return(
        <div>
            <MyOwnButton>Customized Button</MyOwnButton>
        </div>
    )
}
