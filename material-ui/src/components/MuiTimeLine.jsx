import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab"
import { Typography } from "@mui/material"

export const MuiTimeLine  = () => {
    return(
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent>9:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    Step: 1 Here this is Yaswanth
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>9:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    Step: 2 Here this is Yaswanth
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="error">9:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    Step: 2 Here this is Yaswanth
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}