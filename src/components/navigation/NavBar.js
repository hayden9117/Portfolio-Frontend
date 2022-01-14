import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountMenu from "./Account/AccountMenu";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { NavDrawer } from "./NavComponents/Drawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function NavBar() {
  const { setOpen } = useContext(AppContext);
  const { navTitle } = useContext(AppContext);
  const { checked, setChecked } = useContext(AppContext);
  const { setMode } = useContext(AppContext);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  console.log(checked);
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
      <AppBar sx={{ maxHeight: "60px" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <NavDrawer />

          <Typography>{navTitle}</Typography>
          <Grid container sx={{ marginLeft: "80%" }}>
            <Button color={"inherit"} onClick={toggleChecked}>
              {" "}
              {checked === true ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
            <AccountMenu />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
