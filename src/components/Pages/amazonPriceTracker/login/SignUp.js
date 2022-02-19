import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, Box, Stack, Button, TextField } from "@mui/material";

function SignUp() {
  const [matchedPassWord, setMatchedPassword] = useState("");
  const [newPassword, setNewPassword] = useState();
  const [newUserName, setNewUserName] = useState();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    let bodyObject = { username: newUserName, password: newPassword };

    if (matchedPassWord === newPassword) {
      fetch(`http://localhost:3001/newuser`, {
        credentials: "include",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          charset: "UTF-8",
        },
        body: JSON.stringify(bodyObject),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.message === "successfully added new entry to database") {
            alert("successfully added new entry to database, Please Login");
            history.push("/priceTracker");
          }
        });
    } else {
      alert("password does not match");
    }
  };
  const handleLogIn = (e) => {
    history.push(e);
  };

  return (
    <Box
      component="form"
      sx={{
        textAlign: "center",
        marginTop: "12%",
        "& .MuiTextField-root": { m: 2, width: "100ch" },
      }}
    >
      <FormControl variant="standard">
        <Stack>
          <TextField
            label="create username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            variant="outlined"
            style={{ height: 80 }}
          />

          <TextField
            label="create password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            variant="outlined"
            style={{ height: 80 }}
          />

          <TextField
            label="re-type password"
            type="password"
            value={matchedPassWord}
            onChange={(e) => setMatchedPassword(e.target.value)}
            variant="outlined"
            style={{ height: 80 }}
          />

          <Button onClick={handleSubmit}>Submit</Button>

          <Button onClick={() => handleLogIn("/priceTracker")}>Login</Button>
          <PasswordStrengthBar password={newPassword} />
        </Stack>
      </FormControl>
    </Box>
  );
}

export default SignUp;
