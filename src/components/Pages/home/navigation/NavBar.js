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
      <AppBar sx={{ height: "150px", position: "fixed" }}>
        <Toolbar sx={{ height: "150px", alignContent: "center" }}>
          <Typography sx={{ position: "absolute" }} variant="h2">
            {props.title}
          </Typography>

          <Grid container sx={{ marginLeft: "80%" }}>
            <Button
              sx={{ position: "absolute", left: 180 }}
              color={"inherit"}
              onClick={toggleChecked}
            >
              {" "}
              {checked === true ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
NavBar.propTypes = {
  title: PropTypes.string,
};
export default NavBar;
