import "./App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LogIn";
import AppContext from "./Context/AppContext";
import NavBar from "./components/navigation/NavBar";
import SignUp from "./components/SignUp";
import MyFavoritesList from "./components/Pages/MyFavoritesList";
import CreateList from "./components/Pages/listPage/CreateList";
import useToken from "./components/UseToken";
import Home from "./components/home/Home";
import { Box } from "@material-ui/core";

function App() {
  const history = useHistory();
  const [value, setValue] = useState("");
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("");
  const [navTitle, setNavTitle] = useState("");
  const [flick, setFlick] = useState("");
  const [env, setEnv] = useState("");
  const [adv, setAdv] = useState("");
  const { token, setToken } = useToken();
  console.log(token);
  const pathHome = ["/", "/home"];
  if (!token) {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login setToken={setToken} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Box sx={{ height: "100%" }}>
      <AppContext.Provider
        value={{
          // userName, setUserName,
          // password, setPassword,
          value,
          setValue,
          // newPassword, setNewPassword,
          // newUserName, setNewUserName,
          listName,
          setListName,
          listType,
          setListType,
          token,
          setToken,
          navTitle,
          setNavTitle,
          flick,
          setFlick,
          env,
          setEnv,
          adv,
          setAdv,
        }}
      >
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/ListShare" exact>
              <MyFavoritesList />
            </Route>
            <Route path="/CreateList" exact>
              <CreateList />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </Box>
  );
}

export default App;
