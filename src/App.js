import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/LogIn';
import AppContext from './Context/AppContext';
import NavBar from './components/navigation/NavBar';
import SignUp from './components/SignUp';
import MyFavoritesList from './components/Pages/MyFavoritesList';
import CreateList from './components/Pages/listPage.js/CreateList';
import useToken from './components/UseToken';





function App() {

  const [value, setValue] = useState("");
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("");

  const { token, setToken } = useToken();
  console.log(token)

  if (!token) {

    return <Router>
      <Switch>
        <Route path="/" exact><Login setToken={setToken} /></Route>
      </Switch>
      <Switch>
        <Route path="/signup" exact><SignUp /></Route>
      </Switch>
    </Router>
  }


  return (
    <div className="App">
      <AppContext.Provider value={
        {
          // userName, setUserName,
          // password, setPassword,
          value, setValue,
          // newPassword, setNewPassword,
          // newUserName, setNewUserName,
          listName, setListName,
          listType, setListType,
          token, setToken

        }
      }>

        <Router>
          <NavBar />
          <Switch>
            {/* <Route path="/" exact>
              <Login />
            </Route> */}
            {/* <Route path="/signup" exact>
              <SignUp />
            </Route> */}
            <Route path="/MyFavoritesLists" exact>
              <MyFavoritesList />
            </Route>
            <Route path="/CreateList" exact>
              <CreateList />
            </Route>
          </Switch>

        </Router>

      </AppContext.Provider>
    </div>
  );
}

export default App;

