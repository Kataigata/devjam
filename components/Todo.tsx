import Link from "next/link";
import Button from "@mui/material/Button";

export function TodoList() {
  return (
    <div>
      <h1>TAILWAGGERS TASKS</h1>
      <div>
        <Link href="/../create">
          <button className="orangeButton">New Todo</button>
        </Link>
      </div>
    </div>
  );
}
