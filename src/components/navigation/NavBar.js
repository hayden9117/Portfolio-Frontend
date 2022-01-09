import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline,
} from "@mui/material";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountMenu from "./Account/AccountMenu";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { useTheme } from "@mui/material/styles";
import { NavDrawer } from "./NavComponents/Drawer";

function NavBar() {
  const { setOpen } = useContext(AppContext);
  const { navTitle } = useContext(AppContext);

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        textAlign: "center",
      }}
    >
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Drawer
            // className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
          >
            <div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <IconsArray />
            <Divider />
            <List>
              {["Deleted List"].map((text, index) => {
                let path = text.replace(/ /g, "");
                return (
                  <ListItem button key={text} component={Link} to={path}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          </Drawer> */}
          <NavDrawer />

          <Typography
            variant="h6"
            // className={classes.title}
          >
            {navTitle}
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
