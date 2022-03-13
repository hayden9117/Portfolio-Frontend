import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  autocompleteClasses,
} from "@mui/material";
import React from "react";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../../../Context/AppContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHub from "@mui/icons-material/GitHub";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "@mui/material";
import { HomeSideSteps } from "../../../comman/helpers/StepperHelper";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar(props) {
  const { checked, setChecked } = useContext(AppContext);
  const { setMode } = useContext(AppContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleStep = (step) => {
    window.scrollTo({
      top: step.scrollPos,
      behavior: "smooth",
    });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    // <Box
    //   sx={{
    //     display: "flex",
    //     height: "100%",
    //     width: "100%",
    //     textAlign: "center",
    //   }}
    // >
    //   <CssBaseline />
    //   <AppBar sx={{ height: "20%", position: "fixed" }}>
    //     <Toolbar sx={{ height: "150px", alignContent: "center" }}>
    //       <Typography sx={{ position: "absolute" }} variant="h2">
    //         {props.title}
    //       </Typography>
    //       <IconButton
    //         sx={{ position: "fixed", left: "85%" }}
    //         color={"inherit"}
    //         onClick={handleGitHub}
    //         size="large"
    //       >
    //         <GitHub fontSize="inherit" />
    //       </IconButton>
    //       <IconButton
    //         sx={{ position: "fixed", left: "90%" }}
    //         color={"inherit"}
    //         onClick={toggleChecked}
    //         size="large"
    //       >
    //         {" "}
    //         {checked === true ? (
    //           <LightModeIcon fontSize="inherit" />
    //         ) : (
    //           <DarkModeIcon fontSize="inherit" />
    //         )}
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    // </Box>

    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <CssBaseline />
      <AppBar sx={{ height: "15", position: "fixed" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h2"
              noWrap
              component="div"
              sx={{
                mr: 2,

                display: { xs: "none", md: "flex" },
              }}
            >
              {props.title}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {HomeSideSteps.map((step) => {
                  return (
                    <Button onClick={() => handleStep(step)}>
                      {step.label}
                    </Button>
                  );
                })}
              </Menu>
            </Box>

            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {props.title}
            </Typography>
            <Box
              sx={{ position: "fixed", right: "2%", display: "flex" }}
              justifyContent="start"
            >
              <IconButton
                sx={{ p: 2 }}
                color={"inherit"}
                onClick={handleGitHub}
                size="large"
              >
                <GitHub fontSize="inherit" />
              </IconButton>
              <Tooltip title="Toggle light/dark mode">
                <IconButton
                  sx={{ p: 2 }}
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
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
NavBar.propTypes = {
  title: PropTypes.string,
};
export default NavBar;
