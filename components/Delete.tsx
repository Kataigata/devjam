import { Checkbox, Radio, Switch } from "pretty-checkbox-react";
import React from "react";
import { Todo } from "../utils/types";
import { useRouter } from "next/router";
import IconButton from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

interface CheckProps {
  todo: Todo;
  url: string;
}

export function Delete(props: CheckProps) {
  const router = useRouter();
  const [todo, setTodo] = React.useState<Todo>(props.todo);

  const handleDelete = async () => {
    await fetch(props.url + "/" + todo._id, {
      method: "delete",
    });
    router.push("/");
  };

  return (
    <Tooltip title="Doggy Delete!">
      <IconButton
        className="icon"
        onClick={() => {
          handleDelete();
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

export default Delete;
