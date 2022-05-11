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
import { useHistory } from "react-router-dom";
import SignUp from "./SignUp";

function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [signUp, setSignUp] = useState(false);
  const history = useHistory();

  let bodyObject = { username: userName, password: password };
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/Login`, {
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
          window.location.reload(false);
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
              width: "40%",
              padding: 10,
              flexGrow: 1,
              zIndex: 1,
              bgcolor: "background.paper",
              " @media screen and (max-width: 650px)": {
                width: "100%",
                paddingBottom: 2,
              },
            }}
          >
            <Stack spacing={5}>
              <Typography variant={"h2"} align={"center"}>
                Welcome to my Amazon Price Tracker!
              </Typography>

              <Typography variant={"h5"}>
                Copy a URL that links to an amazon product you would like to
                track, Paste it into the the text box on the navigation bar and
                hit submit.
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              maxWidth: "40%",
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
            width: "40%",
            padding: 10,
            flexGrow: 1,
            zIndex: 1,
            bgcolor: "background.paper",
            " @media screen and (max-width: 650px)": {
              width: "100%",
              paddingBottom: 2,
            },
          }}
        >
          <Stack spacing={5}>
            <Typography variant={"h2"} align={"center"}>
              Welcome to my Amazon Price Tracker!
            </Typography>

            <Typography variant={"h5"}>
              Copy a URL that links to an amazon product you would like to
              track, Paste it into the the text box on the navigation bar and
              hit submit.
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            maxWidth: "40%",
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
        </Box>
      </Stack>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
