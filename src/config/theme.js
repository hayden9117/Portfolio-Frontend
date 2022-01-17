import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#42a9fb",
      // darker: "#700B97",
      background: {
        main: "#c2d2df",
        paper: "#3E065F",
      },
    },
    secondary: {
      main: "#8E05C2",
      background: {
        main: "#c2d2df",
        paper: "#3E065F",
      },
    },
  },
  components: {
    MuiButton: {
      style: {
        backgroundcolor: "#700B97",
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#42a9fb",
      // darker: "#700B97",
      background: {
        main: "#c2d2df",
        paper: "#3E065F",
      },
    },
    secondary: {
      main: "#8E05C2",
      background: {
        main: "#c2d2df",
        paper: "#3E065F",
      },
    },
  },
  components: {
    MuiButton: {
      style: {
        backgroundcolor: "#700B97",
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});