import { Dialog, Box, Stack, MenuItem, Divider } from "@mui/material";
import ProfileInfo from "./Account Dialog Content/ProfileInfo";

function AccountDialog(props) {
  const { username, openDialog, setOpenDialog, setToken, token } = props;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <Box sx={{ height: "100%", width: "100%" }}>
          <Stack spacing={2} sx={{ padding: 2 }} direction="row">
            <Stack spacing={2} sx={{ padding: 2 }}>
              <MenuItem>change account information</MenuItem>
              <MenuItem>preferences</MenuItem>
              <MenuItem>Billing settings</MenuItem>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack spacing={2} sx={{ padding: 2 }}></Stack>
            <ProfileInfo
              username={username}
              token={token}
              setToken={setToken}
            />
          </Stack>
        </Box>
      </Dialog>
    </>
  );
}

export default AccountDialog;
