import React, { useRef, useState } from "react";
import { Todo } from "../utils/types";
import { useRouter } from "next/router";
import Checkbox from "@mui/material/Checkbox";

interface CheckProps {
  completed: boolean;
  todo: Todo;
  url: string;
}

export function Check(props: CheckProps) {
  const router = useRouter();
  const [todo, setTodo] = React.useState<Todo>(props.todo);
  const [checked, setChecked] = React.useState(props.completed);

  const onChangeClick = React.useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  const pant = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/audio/shortpant.wav") : undefined
  );

  const handleComplete = async () => {
    onChangeClick();

    pant.current?.play();

    const newTodo: Todo = { ...todo, completed: todo.completed };
    if (!todo.completed) {
      newTodo.completed = true;
    } else {
      newTodo.completed = false;
    }

    await fetch(props.url + "/" + todo._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    setTodo(newTodo);

    router.push("/");
  };

  return (
    <>
      <Checkbox
        edge="start"
        disableRipple
        className="icon"
        checked={checked}
        onChange={handleComplete}
        defaultChecked={props.completed}
      />
    </>
  );
}

export default Check;
