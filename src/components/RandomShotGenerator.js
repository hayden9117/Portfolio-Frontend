import React from "react";
import '../App.css';
import { Box } from "@material-ui/core";
import RandGenHelper from "./comman/RandGenHelper";

function RandomShotGenerator() {


    const [currentShot, setCurrentShot] = React.useState([]);
    // let shotList = ["Musty flick", " 180 flick", "90 degree flick", "JZR flick"];
   


    const handleClick = async (click) => {
    
        setCurrentShot(RandGenHelper(click))
  
    
       console.log(currentShot)
       
        
     
     
       
    
    } 


    


    return (
        <Box className="loginForm">
            <div className="center">
                <p>{currentShot}</p>
                <br />
                <button onClick={handleClick(true)}>Get shot</button>

            </div>
        </Box>
    )

}
export default RandomShotGenerator