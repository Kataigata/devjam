import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef } from "react";
import { Todo } from "../utils/types";

interface CreateProps {
  url: string;
}

function Create(props: CreateProps) {
  const router = useRouter();
  const item = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    let todo: Todo = { item: "", completed: false };
    if (null !== item.current) {
      todo = { item: item.current.value, completed: false };
    }

    await fetch(props.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    router.push("/");
  };

  return (
    <div>
      <h1>Create a New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={item}></input>
        <input
          className="orangeButton"
          type="submit"
          value="create todo"
        ></input>
      </form>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL,
    },
  };
}

export default Create;
