import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { ThemeProvider, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import NoSsr from "@mui/material/NoSsr";
import { grey } from "@mui/material/colors";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { Button, Stack, TextField } from "@mui/material";
const customTheme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[400],
    },
  },
});

const SliderTest = styled(Slider)`
  ${({ theme, ...args }) => {
    return `
  color: ${args.customColor};
  height: 8;
  width: 80%;
  `;
  }}
`;

export default function LightDark(props) {
  const { color, setColor, config, setConfig } = props;

  const [bright, setBright] = React.useState(config.brightness);

  const handleBrightness = (e) => {
    setBright(e);
    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatars: config.avatars,
      background: color,
      opacity: config.opacity,
      template: config.template,
      brightness: bright,
    });
  };
  // const handleAdd = () => {
  //   if (bright <= 30) {
  //     setBright(bright + 10);

  //     setConfig({
  //       links: { num: config.links.num, url: config.links.url },
  //       avatars: config.avatars,
  //       background: color,
  //       opacity: config.opacity,
  //       template: config.template,
  //       brightness: bright,
  //     });
  //   }
  // };
  // const handleSub = () => {
  //   if (bright >= -30) {
  //     setBright(bright - 10);

  //     setConfig({
  //       links: { num: config.links.num, url: config.links.url },
  //       avatars: config.avatars,
  //       background: color,
  //       opacity: config.opacity,
  //       template: config.template,
  //       brightness: bright,
  //     });
  //   }
  // };
  console.log(bright);
  return (
    <Box>
      <NoSsr>
        <MuiThemeProvider theme={customTheme} color={color}>
          <ThemeProvider theme={customTheme} color={color}>
            {/* <Button onClick={() => handleSub()}>-</Button> */}
            <SliderTest
              customColor={color}
              step={10}
              min={-40}
              max={40}
              marks
              valueLabelDisplay="auto"
              aria-label={color}
              value={bright}
              onChange={(e) => handleBrightness(e.target.value)}
            />
            {/* <Button onClick={() => handleAdd()}>+</Button> */}
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    </Box>
  );
}
