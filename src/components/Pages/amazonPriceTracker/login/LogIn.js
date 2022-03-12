import { Button, TextField, Box, FormControl, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  let bodyObject = { username: userName, password: password };
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/login`, {
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
        if (result.message === "No match found, create new user.") {
          alert(result.message);
          history.push("/priceTracker/signup");
        }

        if (result.token) {
          setToken(result);
          console.log(result);

          history.push("/");
        }

        if (result.message === "incorrect password") {
          alert(result.message);
        }
      })
      .catch(function () {
        console.log("no token");
      });
  };
  const handleSignUp = (e) => {
    history.push(e);
  };

  return (
    <Box
      component="form"
      sx={{
        width: "80%",
        height: "50px",
        bgColor: "red",
        margin: "auto",
        justifyContent: "column",
      }}
    >
      <FormControl sx={{ display: "flex" }}>
        <Typography
          variant="h3"
          sx={{ alignSelf: "center", justifySelf: "center", paddingBottom: 2 }}
        >
          Please Login
        </Typography>
        <TextField
          label="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          variant="outlined"
          style={{ height: 80 }}
        />
        <div />
        <TextField
          label="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <div />
        <Button className="loginSubmit" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <div></div>
        <Button onClick={() => handleSignUp("/priceTracker/signup")}>
          Sign UP
        </Button>
      </FormControl>
    </Box>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
