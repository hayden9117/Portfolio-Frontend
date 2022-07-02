import {
  Box,
  TextField,
  Typography,
  CardContent,
  Card,
  Button,
  Stack,
  FormControl,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";

import SignUp from "./SignUp";

function ViaLogin(props) {
  const { setToken, setConfig } = props;
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [signUp, setSignUp] = useState(false);

  let bodyObject = { username: userName, password: password };
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`https://richiehayden-portfolio-backend.herokuapp.com/viaLogin`, {
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
        }

        if (result.token) {
          console.log(result.config);
          setConfig(result.config);
          setToken(result.token);

          window.location.reload(true);
        }

        if (result.message === "incorrect password") {
          alert(result.message);
        }
      })
      .catch(function () {
        console.log("no token");
      });
  };
  const handleSignUp = () => {
    setSignUp(!signUp);
  };
  if (signUp) {
    return (
      <>
        <Stack
          sx={{
            " @media screen and (max-width: 650px)": {
              flexDirection: "column",
            },
          }}
          direction={"row"}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              padding: 10,
              flexGrow: 1,
              zIndex: 1,
              " @media screen and (max-width: 650px)": {
                maxWidth: "100%",
                padding: 0,
              },
            }}
          >
            <Card
              raised
              sx={{
                minHeight: 300,

                minWidth: 300,
              }}
            >
              <CardContent>
                <SignUp signUp={signUp} setSignUp={setSignUp} />
              </CardContent>
            </Card>
            <br></br>
          </Box>
        </Stack>
      </>
    );
  }
  return (
    <>
      <Card
        raised
        sx={{
          minHeight: 300,
          minWidth: 300,
        }}
      >
        <CardContent>
          <FormControl sx={{ display: "flex" }}>
            <Typography
              variant="h3"
              sx={{
                alignSelf: "center",
                justifySelf: "center",
                paddingBottom: 2,
              }}
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
            <Button
              className="loginSubmit"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <div></div>
            <Button onClick={() => handleSignUp("/priceTracker/signup")}>
              Sign UP
            </Button>
          </FormControl>
        </CardContent>
      </Card>
      <br></br>
    </>
  );
}

ViaLogin.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default ViaLogin;
