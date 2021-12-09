import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import doggo from "../imgs/doggo.jpg";

interface DoggosProps {
  image: string;
  alt: string;
  title: string;
  desc: string;
}

export default function MediaCard(props: DoggosProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "inline-block",
        marginRight: 5,
        marginBottom: 3,
      }}
      raised={true}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
