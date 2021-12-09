import * as React from "react";
import HandIcon from "@mui/icons-material/PanToolOutlined";
import BallIcon from "@mui/icons-material/SportsBaseballOutlined";
import EatIcon from "@mui/icons-material/RestaurantOutlined";
import MailIcon from "@mui/icons-material/MailOutlined";
import RunIcon from "@mui/icons-material/DirectionsRunOutlined";
import BathIcon from "@mui/icons-material/BathtubOutlined";
import DogIcon from "@mui/icons-material/PetsOutlined";

interface TaskProps {
  task: string;
}

export default function CustomizedTimeline(props: TaskProps) {
  {
    if (props.task == "Demand Pets") {
      return (
        <>
          <HandIcon />
        </>
      );
    } else if (props.task == "Fetch Ball") {
      return (
        <>
          <BallIcon />
        </>
      );
    } else if (props.task == "Eat Cat Poop") {
      return (
        <>
          <EatIcon />
        </>
      );
    } else if (props.task == "Bark at Mail Person") {
      return (
        <>
          <MailIcon />
        </>
      );
    } else if (props.task == "Chase Tail") {
      return (
        <>
          <RunIcon />
        </>
      );
    } else if (props.task == "Refuse to take a Bath") {
      return (
        <>
          <BathIcon />
        </>
      );
    } else if (props.task == "Bark for no Reason") {
      return (
        <>
          <DogIcon />
        </>
      );
    } else {
      return (
        <>
          <DogIcon />
        </>
      );
    }
  }
}
