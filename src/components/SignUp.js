import { Button, TextField } from "@material-ui/core"
import AppContext from '../Context/AppContext';
import {useContext} from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState } from "react";




function SignUp () {
    const [matchedPassWord, setMatchedPassword] = useState("")
    const { newPassword, setNewPassword } = useContext(AppContext);
    const { newUserName, setNewUserName } = useContext(AppContext);
    const handleSubmit = () => {
     if (newPassword === matchedPassWord) {
        console.log(`${newUserName}, ${newPassword}`)
     } else {
         alert('passwords do not match.')
     }
     
    }

    return (
    <form className="loginForm" >
        <TextField className="loginText" label="create username" value={ newUserName} onChange={e => setNewUserName(e.target.value)} variant="outlined" style={{height:80}}/>
        <div/>
        <TextField label="create password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} variant="outlined" style={{height:80}}/>
        <div/>
        <TextField label="re-type password" type="password" value={matchedPassWord} onChange={e => setMatchedPassword(e.target.value)} variant="outlined" />
        <div></div>
        <Button className="loginSubmit"  onClick={handleSubmit}>Submit</Button>
        <PasswordStrengthBar password={newPassword} />
    </form>
    )
}

export default SignUp