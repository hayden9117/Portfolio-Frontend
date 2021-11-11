import { Button } from "@material-ui/core"
import React from "react";

function LogOut() {


    const handleLogOut = () => {


        localStorage.clear();
        window.location.reload(false);
    }

    return (
        <Button onClick={handleLogOut}>LogOut</Button>
    )
}

export default LogOut