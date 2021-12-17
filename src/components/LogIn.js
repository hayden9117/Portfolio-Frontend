import { Button, TextField } from "@material-ui/core"
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import '../App.css';





function Login({ setToken }) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const history = useHistory()


    let bodyObject = { 'username': userName, 'password': password }
    const handleSubmit = async (e) => {


        e.preventDefault();

        fetch(`http://localhost:3001/login`, {
            credentials: 'include',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            },
            body: JSON.stringify(bodyObject)
        })
            .then(response => response.json())
            .then(result => {

                if (result.message === 'No match found, create new user.') {
                    alert(result.message)
                    history.push('/signup')
                }

                if (result.token === 'test123') {

                    setToken(result);

                    history.push('/')
                }

                if (result.message === 'incorrect password') {
                    alert(result.message)
                }


            })
            .catch(function () {
                console.log("no token")
            })

    }
    const handleSignUp = (e) => {
        history.push(e)
    }



    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <h1>Please Login</h1>
            <TextField className="loginText" label="username" value={userName} onChange={e => setUserName(e.target.value)} variant="outlined" style={{ height: 80 }} />
            <div />
            <TextField label="password" type="password" value={password} onChange={e => setPassword(e.target.value)} variant="outlined" />
            <div />
            <Button className="loginSubmit" type="submit">Submit</Button>
            <div></div>
            <Button onClick={() => handleSignUp("/signup")} >Sign UP</Button>
        </form>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login