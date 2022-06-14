import * as React from "react";
import { Button, Menu, MenuItem, Stack, Divider } from "@mui/material";
import useToken from "../../UseToken";
import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountDialog from "./accountDialog";

// import MyAccount from './MyAccount';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const token = useToken();
  let navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/priceTracker");
    window.location.reload(false);
  };

  const handleMain = () => {
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div>
      <Stack spacing={2} sx={{ padding: 2 }} direction="row">
        <Button
          color={"inherit"}
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleRounded />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Stack spacing={2} sx={{ padding: 2 }}>
            <MenuItem onClick={handleOpenDialog}>Account Settings</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            <MenuItem onClick={handleMain}>Main Page</MenuItem>
          </Stack>
        </Menu>
        <AccountDialog
          username={token.token.username}
          token={token}
          setToken={token.setToken}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      </Stack>
    </div>
  );
}
