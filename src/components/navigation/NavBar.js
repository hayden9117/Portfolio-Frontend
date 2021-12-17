import { AppBar, Box, IconButton, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { Drawer } from '@material-ui/core';
import clsx from 'clsx';
import '../../App.css';
import AccountMenu from './Account/AccountMenu';
import { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import IconsArray from './NavComponents/NavBarIcons';


function NavBar() {
  const [open, setOpen] = React.useState(false);
  const {navTitle} = useContext(AppContext);


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
    <Box sx={{ display: "flex", height: "100%" }}>
    <CssBaseline />
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
<IconsArray/>
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
         {navTitle}
        </Typography>
        <AccountMenu />
      </Toolbar>
    </AppBar>
    </Box>
  );
}

export default NavBar