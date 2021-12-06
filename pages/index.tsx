import { useState } from "react";
import { fetchPets } from "./helpers/fetchPets";
import { helloDev, helloWorld } from "./helpers/helloWorld";
import Link from "next/link";
import { Header } from "../components/Header";
import React from "react";
import { Todo } from "../components/Todo";
import paw from "../imgs/paw.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HOW TO DO A LINK TO ANOTHER PAGE
      <Link href="/about">
        <a>about</a>
      </Link> */}

      <div className="toDoSection">
        <Todo />
      </div>

      {/* <Image className="paw" src={paw} alt="logo" width={150} height={150} /> */}
    </main>
  );
}
