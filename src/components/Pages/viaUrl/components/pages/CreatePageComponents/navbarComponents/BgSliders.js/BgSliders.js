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
import { Stack } from "@mui/material";
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

export default function BgSlider(props) {
  const { color, setColor, config, setConfig } = props;
  const [hex, setHex] = React.useState("");
  const [r, setR] = React.useState(0);
  const [g, setG] = React.useState(0);
  const [b, setB] = React.useState(0);

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const handleR = (r) => {
    setR(r);
    setColor(rgbToHex(r, g, b));
  };
  const handleG = (g) => {
    setG(g);
    setColor(rgbToHex(r, g, b));
  };
  const handleB = (b) => {
    setB(b);
    setColor(rgbToHex(r, g, b));
  };

  React.useEffect(() => {
    const [red, green, blue] = color.match(/\w\w/g).map((x) => parseInt(x, 16));

    setR(red);
    setG(green);
    setB(blue);

    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatars: config.avatars,
      background: color,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
    });
  }, [color]);
  return (
    <Box>
      <NoSsr>
        <MuiThemeProvider theme={customTheme} color={color}>
          <ThemeProvider theme={customTheme} color={color}>
            <Stack>
              Red
              <SliderTest
                customColor={color}
                max={255}
                valueLabelDisplay="auto"
                aria-label={color}
                value={r}
                onChange={(r) => handleR(r.target.value)}
              />
              Green
              <SliderTest
                customColor={color}
                max={255}
                valueLabelDisplay="auto"
                aria-label={color}
                value={g}
                onChange={(g) => handleG(g.target.value)}
              />
              Blue
              <SliderTest
                customColor={color}
                max={255}
                valueLabelDisplay="auto"
                aria-label={color}
                value={b}
                onChange={(b) => handleB(b.target.value)}
              />
            </Stack>
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    </Box>
  );
}
