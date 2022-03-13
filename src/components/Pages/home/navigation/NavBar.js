import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../../../Context/AppContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHub from "@mui/icons-material/GitHub";
import PropTypes from "prop-types";

function NavBar(props) {
  const { checked, setChecked } = useContext(AppContext);
  const { setMode } = useContext(AppContext);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  const handleGitHub = () => {
    const newWindow = window.open(
      "https://github.com/hayden9117?tab=repositories",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
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
          <IconButton
            sx={{ position: "fixed", left: "85%" }}
            color={"inherit"}
            onClick={handleGitHub}
            size="large"
          >
            <GitHub fontSize="inherit" />
          </IconButton>
          <IconButton
            sx={{ position: "fixed", left: "90%" }}
            color={"inherit"}
            onClick={toggleChecked}
            size="large"
          >
            {" "}
            {checked === true ? (
              <LightModeIcon fontSize="inherit" />
            ) : (
              <DarkModeIcon fontSize="inherit" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
NavBar.propTypes = {
  title: PropTypes.string,
};
export default NavBar;
