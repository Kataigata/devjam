import { Checkbox, Radio, Switch } from "pretty-checkbox-react";
import React from "react";
import { Todo } from "../utils/types";
import { useRouter } from "next/router";

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

  const handleComplete = async () => {
    onChangeClick();

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
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleComplete}
      defaultChecked={props.completed}
    ></Checkbox>
  );
}

export default Check;
