import * as React from "react";
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import excited from "../imgs/excited.gif";
import Image from "next/image";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function SimpleFade() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Image src={excited} width={80} height={80} alt="Excited doggo" />
      <Box sx={{ height: 2 }}>
        <p style={{ margin: -10 }}>DOGGO OF THE WEEK</p>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label=" "
        ></FormControlLabel>
        <Box sx={{}}>
          <Fade in={checked}>
            <div>
              <iframe
                frameBorder="0"
                height="300"
                src="https://giphy.com/embed/GbQxQ7QSeL71NtXAs1/video"
                width="300"
              ></iframe>
            </div>
          </Fade>
        </Box>
      </Box>
    </>
  );
}
