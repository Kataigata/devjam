import { Todo } from "../utils/types";
import { useRouter } from "next/router";
import { useState } from "react";

interface ShowProps {
  todo: Todo;
  url: string;
}

function Show(props: ShowProps) {
  const router = useRouter();
  const [todo, setTodo] = useState<Todo>(props.todo);

  const handleComplete = async () => {
    if (!todo.completed) {
      const newTodo: Todo = { ...todo, completed: true };
      await fetch(props.url + "/" + todo._id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      setTodo(newTodo);
    }
  };

  const handleDelete = async () => {
    await fetch(props.url + "/" + todo._id, {
      method: "delete",
    });
    router.push("/");
  };

  return (
    <div>
      <h1>{todo.item}</h1>
      <h2>{todo.completed ? "completed" : "incomplete"}</h2>
      <button className="orangeButton" onClick={handleComplete}>
        Complete
      </button>
      <button className="orangeButton" onClick={handleDelete}>
        Delete
      </button>
      <button
        className="orangeButton"
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    "http://localhost:3000/api/todos" + "/" + context.query.id
  );
  const todo = await res.json();
  return { props: { todo, url: "http://localhost:3000/api/todos" } };
}

export default Show;
