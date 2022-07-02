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
    console.log(args.customColor);
    return `
  color: ${args.customColor};
  height: 8;
  width: 80%;
  `;
  }}
`;

export default function OpacitySlider(props) {
  const { color, setColor, config, setConfig } = props;
  const convert = parseInt(config.opacity, 16) / 255;
  let defaultOp = Math.round(100 * convert);
  console.log(defaultOp);
  const [o, setO] = React.useState(defaultOp);
  const [opacity, setOpacity] = React.useState(config.opacity);

  const handleO = (e) => {
    setO(e);
    let num = o * 0.01;
    num = Math.round(100 * num) / 100;

    setOpacity(`${Math.floor(num * 255).toString(16)}`);
    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatars: config.avatars,
      background: color,
      opacity: opacity,
      template: config.template,
      brightness: config.brightness,
    });
  };

  console.log(opacity);
  return (
    <Box>
      <NoSsr>
        <MuiThemeProvider theme={customTheme} color={color}>
          <ThemeProvider theme={customTheme} color={color}>
            <SliderTest
              customColor={color}
              min={10}
              max={100}
              valueLabelDisplay="auto"
              aria-label={color}
              value={o}
              onChange={(o) => handleO(o.target.value)}
            />
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    </Box>
  );
}
