import { useState } from "react";
import { fetchPets } from "./helpers/fetchPets";
import { helloDev, helloWorld } from "./helpers/helloWorld";
import Link from "next/link";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Link href="/about">
        <a>about</a>
      </Link>
    </main>
  );
}
