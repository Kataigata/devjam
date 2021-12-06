import { useState } from "react";
import Link from "next/link";
import React from "react";
import { TodoList } from "../components/Todo";
import paw from "../imgs/paw.png";
import Image from "next/image";
import { Todo } from "../utils/types";

interface IndexProps {
  todos: Array<Todo>;
}

function Index(props: IndexProps) {
  const { todos } = props;

  return (
    <main>
      <div className="toDoSection">
        <TodoList />
        {todos.map((t) => (
          <div key={t._id}>
            <Link href={`/${t._id}`}>
              <h3 style={{ cursor: "pointer" }}>
                {t.item} - {t.completed ? "completed" : "incomplete"}
              </h3>
            </Link>
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
    props: { todos },
  };
}

export default Index;
