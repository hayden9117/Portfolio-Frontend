import { Button, TextField } from "@material-ui/core"
import AppContext from '../Context/AppContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";



function Login() {
    const { password, setPassword } = useContext(AppContext);
    const { userName, setUserName } = useContext(AppContext);
    const handleSubmit = () => {

        console.log(`, ${password}`)
    }


    return (
        <form className="loginForm">
            <TextField className="loginText" label="username" value={userName} onChange={e => setUserName(e.target.value)} variant="outlined" style={{ height: 80 }} />
            <div />
            <TextField label="password" type="password" value={password} onChange={e => setPassword(e.target.value)} variant="outlined" />
            <div />
            <Button className="loginSubmit" onClick={handleSubmit}>Submit</Button>
            <div></div>
            <Link to="/signup" >Don't have an account? click here to make one!</Link>
        </form>
    )
}

export default Login