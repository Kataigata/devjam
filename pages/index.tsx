import { useState } from "react";
import React from "react";
import { TodoList } from "../components/Todo";
import paw from "../imgs/paw.png";
import Image from "next/image";
import { Todo } from "../utils/types";
import { Check } from "../components/Check";
import Button from "@mui/material/Button";
import "@djthoms/pretty-checkbox";
import { Delete } from "../components/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { PinDropSharp } from "@mui/icons-material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Dialog from "../components/dialog";
import GoodDog from "../components/GoodDog";
import Doggos from "../components/Doggos";
import TopDoggosList from "../components/TopDoggosList";

interface IndexProps {
  todos: Array<Todo>;
  url: string;
}

function Index(props: IndexProps) {
  const { todos } = props;

  const theme = createTheme({
    typography: {
      fontFamily: "Fuzzy Bubbles",
      fontSize: 16,
    },
  });

  return (
    <main>
      <ThemeProvider theme={theme}>
        <h1>TAILWAGGERS TASKS</h1>
        <span className="leftSpan">
          <GoodDog />
        </span>
        <div className="toDoSection">
          <Stack spacing={2}>
            <Dialog url={props.url} />
            <List className="list">
              {todos.map((t) => {
                return (
                  <>
                    <ListItem
                      key={t._id}
                      secondaryAction={
                        <Delete todo={t} url={props.url}></Delete>
                      }
                      disablePadding
                    >
                      <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                          <Check
                            completed={t.completed}
                            todo={t}
                            url={props.url}
                          ></Check>
                        </ListItemIcon>
                        <ListItemText primary={t.item} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </Stack>
        </div>
        <div className="divUnder">
          <div className="cards">
            <TopDoggosList />
            {/* <Doggos
              image={
                "https://cdn.shopify.com/s/files/1/0306/4253/6586/products/the-king-custom-vintage-pet-portrait-962521_650x.jpg?v=1625222628"
              }
              alt={"dogs"}
              title={"Milo"}
              desc={"The newest Avenger is a dog named is labro-thor"}
            />
            <Doggos
              image={
                "https://post.bark.co/wp-content/uploads/2016/02/funny-face-german-shepherd-photo.jpg"
              }
              alt={"dogs"}
              title={"Luna"}
              desc={"Luna is so smart she majored in bark-eology"}
            />
            <Doggos
              image={
                "http://cdn.akc.org/content/article-body-image/funny-french_bulldog.jpg"
              }
              alt={"dogs"}
              title={"Ruby"}
              desc={"Meditation is the key to learning stay"}
            />
            <Doggos
              image={
                "http://cdn.akc.org/content/article-body-image/funny-springer_spaniel.jpg"
              }
              alt={"dogs"}
              title={"Teddy"}
              desc={"I've got a new leash on life!"}
            />
            <Doggos
              image={
                "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*"
              }
              alt={"dogs"}
              title={"Molly"}
              desc={"You have the corg-key to my heart"}
            />
            <Doggos
              image={
                "https://www.familyhandyman.com/wp-content/uploads/2019/10/3D4D57AA-5E09-474E-BC53-0E6D03A18F5C-scaled.jpg?resize=700,466"
              }
              alt={"dogs"}
              title={"Max"}
              desc={"Today has been ruff!"}
            /> */}
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string);
  const todos = await res.json();

  return {
    props: { todos, url: process.env.API_URL },
  };
}

export default Index;
