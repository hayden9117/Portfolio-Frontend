import React from "react";
import { Box, Avatar, ButtonBase } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ThemeProvider, styled } from "@mui/material/styles";
import NoSsr from "@mui/material/NoSsr";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

export default function AddAvatar(props) {
  const { config, setConfig } = props;
  const handleConfigRemove = () => {
    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatars: config.avatars - 1,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
      }}
    >
      <Box alignSelf={"flex-end"}>
        <ButtonBase onClick={() => handleConfigRemove()}>
          <RemoveCircleOutlineIcon />
        </ButtonBase>
      </Box>
      <Box sx={{ padding: 5 }} alignSelf={"center"}>
        <NoSsr>
          <MuiThemeProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
              <StyledAvatar
                variant="circular"
                sx={{
                  height: "40vh",
                  width: "40vh",
                }}
              />
            </ThemeProvider>
          </MuiThemeProvider>
        </NoSsr>
      </Box>
    </Box>
  );
}
