import { createTheme } from "@mui/material";

export const ViaTheme = createTheme({
  palette: {
    primary: {
      main: "#07FFC7",
      // darker: "#700B97",
      background: {
        main: "#c2d2df",
        paper: "#3E065F",
      },
    },
    secondary: {
      main: "#ABF7E5",
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
