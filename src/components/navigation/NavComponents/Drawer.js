import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import { makeStyles, useTheme } from "@mui/material";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useTheme } from "@mui/material/styles";
import Divider from "@material-ui/core/Divider";
import List from "@mui/material/List";
import { Drawer } from "@mui/material";
import IconsArray from "./NavBarIcons";
import AppContext from "../../../Context/AppContext";
import { useContext } from "react";

export const NavDrawer = () => {
  const { open, setOpen } = useContext(AppContext);

  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      // className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      // classes={{
      //   paper: classes.drawerPaper,
      // }}
    >
      <div>
        <IconButton color="primary" onClick={handleDrawerClose}>
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
    </Drawer>
  );
};
