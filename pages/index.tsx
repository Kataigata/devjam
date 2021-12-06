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
      <Header />
      <Link href="/about">
        <a>about</a>
      </Link>
      <Todo />

      <Image src={paw} alt="logo" width={150} height={150} />
    </main>
  );
}
