import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../../../Context/AppContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PropTypes from "prop-types";

function NavBar(props) {
  const { checked, setChecked } = useContext(AppContext);
  const { setMode } = useContext(AppContext);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  if (checked === true) {
    setMode("light");
  }
  if (checked === false) {
    setMode("dark");
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <CssBaseline />
      <AppBar sx={{ height: "20%", position: "fixed" }}>
        <Toolbar sx={{ height: "150px", alignContent: "center" }}>
          <Typography sx={{ position: "absolute" }} variant="h2">
            {props.title}
          </Typography>

          <Button
            sx={{ position: "fixed", left: "90%" }}
            color={"inherit"}
            onClick={toggleChecked}
          >
            {" "}
            {checked === true ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
NavBar.propTypes = {
  title: PropTypes.string,
};
export default NavBar;
