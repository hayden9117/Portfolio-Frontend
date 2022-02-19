import { useState, useContext } from "react";
import {
  Box,
  FormControl,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import PriceAppContext from "../Context/PriceAppContext";

function ProductInput() {
  const { url, setUrl } = useContext(PriceAppContext);
  const postUrl = (url) => {
    const obj = { url: url, itemPrice: "temp", productname: "temp" };
    fetch(`http://localhost:3001/AmazonData`, {
      credentials: "include",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(function () {
        console.log("no token");
      });
  };
  const handleSubmit = () => {
    if (!/^https?:\/\//i.test(url)) {
      postUrl("http://" + url);
    } else {
      postUrl(url);
    }
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
        <TextField
          label=" Please enter the URL to the product you would like to track"
          variant="outlined"
          inputProps={{
            min: 0,
            style: { textAlign: "center" },
          }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        ></TextField>
        <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
    </Box>
  );
}

export default ProductInput;
