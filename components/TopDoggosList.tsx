import * as React from "react";
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";
import Doggos from "./Doggos";

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

export default function TopDoggosList() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 200 }}>
      <h2 style={{ display: "inline-block", margin: 5 }}>TODAYS TOP DOGGOS</h2>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label=" "
      />
      <Box sx={{}}>
        <Grow in={checked}>
          <span>
            <Doggos
              image={
                "https://cdn.shopify.com/s/files/1/0306/4253/6586/products/the-king-custom-vintage-pet-portrait-962521_650x.jpg?v=1625222628"
              }
              alt={"dogs"}
              title={"Milo"}
              desc={"The newest Avenger is a dog named is labro-thor"}
            />
          </span>
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <span>
            <Doggos
              image={
                "https://post.bark.co/wp-content/uploads/2016/02/funny-face-german-shepherd-photo.jpg"
              }
              alt={"dogs"}
              title={"Luna"}
              desc={"Luna is so smart she majored in bark-eology"}
            />
          </span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
        >
          <span>
            <Doggos
              image={
                "http://cdn.akc.org/content/article-body-image/funny-french_bulldog.jpg"
              }
              alt={"dogs"}
              title={"Ruby"}
              desc={"Meditation is the key to learning stay"}
            />
          </span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 3000 } : {})}
        >
          <span>
            <Doggos
              image={
                "http://cdn.akc.org/content/article-body-image/funny-springer_spaniel.jpg"
              }
              alt={"dogs"}
              title={"Teddy"}
              desc={"I've got a new leash on life!"}
            />
          </span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 4000 } : {})}
        >
          <span>
            <Doggos
              image={
                "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*"
              }
              alt={"dogs"}
              title={"Molly"}
              desc={"You have the corg-key to my heart"}
            />
          </span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 5000 } : {})}
        >
          <span>
            <Doggos
              image={
                "https://www.familyhandyman.com/wp-content/uploads/2019/10/3D4D57AA-5E09-474E-BC53-0E6D03A18F5C-scaled.jpg?resize=700,466"
              }
              alt={"dogs"}
              title={"Max"}
              desc={"Today has been ruff!"}
            />
          </span>
        </Grow>
      </Box>
    </Box>
  );
}
