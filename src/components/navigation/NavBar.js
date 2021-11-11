import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import MailIcon from '@material-ui/icons/Mail';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import MenuIcon from "@material-ui/icons/Menu";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { Drawer } from '@material-ui/core';
import clsx from 'clsx';
import '../../App.css';
import LogOut from './LogOut';

function NavBar() {
  const [open, setOpen] = React.useState(false);


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  }
  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <AppBar style={{ background: '#0d99fb' }}>
      <Toolbar >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.hide)} >
          <MenuIcon />
        </IconButton>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['My Favorites Lists', 'Friends Favorites List', 'Send Favorites list'].map((text, index) => {
              let path = text.replace(/ /g, '');
              return (
                <ListItem button key={text} component={Link} to={path}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <ContactsOutlinedIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })}
          </List>
          <Divider />
          <List>
            {['Deleted List'].map((text, index) => {
              let path = text.replace(/ /g, '');
              return (
                <ListItem button key={text} component={Link} to={path}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })}
          </List>
        </Drawer>
        <img style={{ height: 100, margin: 'auto', display: 'block' }} src="/images/gamba-logo.jpg" alt="" />
        <Typography variant="h6" className={classes.title} >
          My Favorites List Demo
        </Typography>
        <LogOut />
      </Toolbar>
    </AppBar>

  );
}

export default NavBar