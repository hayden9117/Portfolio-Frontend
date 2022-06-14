import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";

import {
  FormControl,
  Stack,
  Button,
  TextField,
  Typography,
} from "@mui/material";

function SignUp(props) {
  const { signUp, setSignUp } = props;
  const [matchedPassWord, setMatchedPassword] = useState("");
  const [newPassword, setNewPassword] = useState();
  const [newUserName, setNewUserName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let bodyObject = { username: newUserName, password: newPassword };

    if (matchedPassWord === newPassword) {
      // ftch(`https://richiehayde-portfolio-backend.herokuapp.com/newuser`, {
      fetch("http://localhost:3001/newuser", {
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
          }
        });
    } else {
      alert("password does not match");
    }
  };
  const handleLogIn = () => {
    setSignUp(!signUp);
  };

  return (
    <FormControl sx={{ display: "flex" }}>
      <Typography
        variant="h4"
        sx={{ alignSelf: "center", justifySelf: "center", paddingBottom: 2 }}
      >
        Please Sign Up
      </Typography>
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
  );
}

export default SignUp;
