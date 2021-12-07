import Link from "next/link";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export function TodoList() {
  const theme = createTheme({
    typography: {
      fontFamily: "Fuzzy Bubbles",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>TAILWAGGERS TASKS</h1>
        <div>
          {/* <Link href="/../create">
            <button className="orangeButton">New Todo</button>
          </Link> */}
          <Button variant="contained" className="orangeButton">
            New Task
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
