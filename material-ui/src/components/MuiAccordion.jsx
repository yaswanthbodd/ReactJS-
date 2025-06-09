import { Accordion, AccordionSummary, AccordionDetails,Typography,Box, AccordionActions, Button } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"
export const MuiAccordion = ()=>{
    const [expanded, setExpanded] = useState(false | String);
    const handleChange = (isExpanded,panel)=>{
        setExpanded(isExpanded ? panel : false)
    }
    return(
        <div>
            <Box width={'500px'}>
                <Accordion>
                    <AccordionSummary id='panel1-header' aria-controls="pane1-content" expandIcon={<ExpandMoreIcon />}>Accordion 1</AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsum eius quod a nostrum molestiae expedita ab iusto at culpa.
                        </Typography>
                    </AccordionDetails>
                    <AccordionActions >
                        <Button>Get More Details</Button>
                    </AccordionActions>
                </Accordion>
            </Box>

            <h1>Group Accordion</h1>
            <Box width={'500px'}>
                <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded)=> handleChange(isExpanded,'panel1')}>
                    <AccordionSummary id='panel1-header' aria-controls="pane1-content" expandIcon={<ExpandMoreIcon />}>Accordion 1</AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsum eius quod a nostrum molestiae expedita ab iusto at culpa.
                        </Typography>
                    </AccordionDetails>
                    <AccordionActions >
                        <Button>Get More Details</Button>
                    </AccordionActions>
                </Accordion>
            </Box>
            <Box width={'500px'}>
                <Accordion expanded={expanded === 'panel2'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel2')}>
                    <AccordionSummary id='panel1-header' aria-controls="pane1-content" expandIcon={<ExpandMoreIcon />}>Accordion 2</AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsum eius quod a nostrum molestiae expedita ab iusto at culpa.
                        </Typography>
                    </AccordionDetails>
                    <AccordionActions >
                        <Button>Get More Details</Button>
                    </AccordionActions>
                </Accordion>
            </Box>
            <Box width={'500px'}>
                <Accordion expanded={expanded === 'panel3'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel3')}>
                    <AccordionSummary id='panel1-header' aria-controls="pane1-content" expandIcon={<ExpandMoreIcon />}>Accordion 3</AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsum eius quod a nostrum molestiae expedita ab iusto at culpa.
                        </Typography>
                    </AccordionDetails>
                    <AccordionActions >
                        <Button>Get More Details</Button>
                    </AccordionActions>
                </Accordion>
            </Box>
        </div>
    )
}