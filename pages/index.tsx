import { useState } from "react";
import React from "react";
import { TodoList } from "../components/Todo";
import paws from "../imgs/pawprints.png";
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
import tailwag from "../imgs/tailwag.gif";
import SuggestedDay from "../components/SuggestedDay";

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
        <Image
          src={tailwag}
          width={100}
          height={100}
          alt="tailwagger"
          className="inline logo"
        />
        <h1 className="inline">TAILWAGGERS TASKS</h1>
        <span className="leftSpan">
          <GoodDog />
        </span>
        <span className="rightSpan">
          <SuggestedDay todos={props.todos} />
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
