import { FormControl, TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";

function ProfileInfo(props) {
  const { username, setToken, token } = props;
  const [matchedPassWord, setMatchedPassword] = useState("");
  const [newPassword, setNewPassword] = useState();
  const [newUserName, setNewUserName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    let bodyObject = {
      id: token.token.token,
      username: newUserName,
      password: newPassword,
      oldUserName: username,
    };

    fetch(`http://localhost:3001/updateUser`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify(bodyObject),
    })
      .then((response) => response.json())
      .then((result) => {
        setToken(result);
      });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "auto",
          justifyContent: "column",
        }}
      >
        <Typography variant="h5">{`${username} account information`}</Typography>
        <FormControl fullWidth>
          <TextField
            label="Change username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            variant="outlined"
          ></TextField>

          <TextField
            label="Change password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="re-type password"
            type="password"
            value={matchedPassWord}
            onChange={(e) => setMatchedPassword(e.target.value)}
            variant="outlined"
          ></TextField>
          <Button onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
    </>
  );
}

export default ProfileInfo;
