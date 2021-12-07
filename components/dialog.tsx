import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue, purple, orange } from "@mui/material/colors";
import PetsIcon from "@mui/icons-material/Pets";
import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef } from "react";
import { Todo } from "../utils/types";

const tasks = [
  "Eat Cat Poop",
  "Bark at Mail Person",
  "Chase Tail",
  "Demand Pets",
  "Fetch Ball",
  "Refuse to take a Bath",
  "Bark for no Reason",
];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  url: string;
}

export interface DialogProps {
  url: string;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <h2 className="icon">SELECT TASK</h2>
      <List sx={{ pt: 0 }}>
        {tasks.map((task) => (
          <ListItem button onClick={() => handleListItemClick(task)} key={task}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: orange[100], color: orange[600] }}>
                <PetsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={task} />
          </ListItem>
        ))}
        {/* <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}

export default function TaskDialog(props: DialogProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(tasks[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
    handleSubmit(value);
  };

  const router = useRouter();
  const item = useRef<HTMLInputElement>(null);

  const handleSubmit = async (value: string) => {
    let todo: Todo = { item: "", completed: false };
    if (value !== null) {
      todo = { item: value, completed: false };
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
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography> */}
      <br />
      <Button variant="contained" className="orange" onClick={handleClickOpen}>
        New Task
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        url={props.url}
      />
    </div>
  );
}
