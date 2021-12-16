import * as React from 'react';
import { Button } from "@material-ui/core";
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import { useHistory } from 'react-router';
// import MyAccount from './MyAccount';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {


        localStorage.clear();
        history.push('/')
        window.location.reload(false);

    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
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
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}