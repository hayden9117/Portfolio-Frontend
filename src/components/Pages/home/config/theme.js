import { createTheme, experimental_sx as sx } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#42a9fb",

      darker: "#700B97",
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
      darker: "#700B97",
      background: {
        main: "#c2d2df",
        paper: "#3E065F",
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: sx({
          "& label.Mui-focused": {
            color: "gray",
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "#700B97",
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "#91069e",
              label: "red",
            },
          },
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#91069e",
            },
          },
        }),
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            fontWeight: "bold",
            border: `4px solid black`,
            color: "#ffff",
            backgroundColor: "#3E065F",
            "&:hover": {
              backgroundColor: "#700B97",
            },
          },
        },
      ],
    },
  },
});

console.log(darkTheme);
