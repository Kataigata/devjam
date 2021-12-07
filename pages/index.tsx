import { useState } from "react";
import Link from "next/link";
import React from "react";
import { TodoList } from "../components/Todo";
import paw from "../imgs/paw.png";
import Image from "next/image";
import { Todo } from "../utils/types";
import ReactDOM from "react-dom";
import { Checkbox, Radio, Switch } from "pretty-checkbox-react";
import styles from "../styles/Home.module.scss";
import { Check } from "../components/Check";

import "@djthoms/pretty-checkbox";

interface IndexProps {
  todos: Array<Todo>;
  url: string;
}

function Index(props: IndexProps) {
  const { todos } = props;
  return (
    <main>
      <div className="toDoSection">
        <TodoList />
        {todos.map((t) => (
          <div className="taskDiv" key={t._id}>
            <h3 className="tasks">{t.item}</h3>
            <span className="right">
              {/* <Link href={`/${t._id}`}>
              </Link> */}
              <Check completed={t.completed} todo={t} url={props.url}></Check>
            </span>
          </div>
        ))}
      </div>

      {/* <Image className="paw" src={paw} alt="logo" width={150} height={150} /> */}
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
