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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SuggestedItem from "./SuggestedItem";
import { Todo } from "../utils/types";

interface SuggestedProps {
  todos: Array<Todo>;
}

export default function CustomizedTimeline(props: SuggestedProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "Fuzzy Bubbles",
      fontSize: 10,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h2>Suggested Task Order</h2>
      <Timeline position="alternate">
        {props.todos.map((t) => {
          return (
            <>
              <SuggestedItem time={"9:30 am"} task={t.item} />
            </>
          );
        })}
      </Timeline>
    </ThemeProvider>
  );
}
