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

  const showTodo = (todo: Todo) => {
    if (todo.completed) {
      return;
    } else {
      const scheduleTime = getTime();
      return (
        <>
          <SuggestedItem time={scheduleTime} task={todo.item} />
        </>
      );
    }
  };

  const time = [
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
  ];

  let currentTime = "8:00am";

  const getTime = () => {
    for (let index = 0; index < time.length; index++) {
      if (currentTime == time[index]) {
        currentTime = time[index + 1];
        return currentTime;
      }
    }
    return currentTime;
  };

  return (
    <ThemeProvider theme={theme}>
      <h2>Suggested Schedule</h2>
      <Timeline position="alternate">
        {props.todos.map((t) => {
          return <>{showTodo(t)}</>;
        })}
      </Timeline>
    </ThemeProvider>
  );
}
