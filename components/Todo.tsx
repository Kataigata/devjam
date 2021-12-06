import Link from "next/link";

export function TodoList() {
  return (
    <div>
      <h1>MY TODO List</h1>
      <div>
        <h2>Click on a Todo to see it</h2>
        <Link href="/../create">
          <button className="orangeButton">New Todo</button>
        </Link>
      </div>
    </div>
  );
}
