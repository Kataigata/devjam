import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { SvgIcon } from "@mui/material";
import TaskIcon from "./TaskIcon";

interface SuggestedProps {
  time: string;
  task: string;
}

export default function CustomizedTimeline(props: SuggestedProps) {
  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
          {props.time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <TaskIcon task={props.task} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            {props.task}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}
