import { useContext, useEffect } from "react";
import useToken from "../UseToken";
import { Paper, InputBase, Button } from "@mui/material";
import PriceAppContext from "../Context/PriceAppContext";
import { postUrl } from "../api/api";

function ProductInput() {
  const { url, setUrl } = useContext(PriceAppContext);

  const token = useToken();
  console.log(token.token.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^https?:\/\//i.test(url)) {
      await postUrl("http://" + url, token);
    } else {
      await postUrl(url, token);
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "50%" }}
    >
      <InputBase
        label=" Please enter the URL to the product you would like to track"
        placeholder="Enter URL to track an Amazon product"
        sx={{ ml: 1, flex: 1 }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      ></InputBase>
      <Button variant="contained" sx={{ width: "30%" }} onClick={handleSubmit}>
        Submit
      </Button>
    </Paper>
  );
}

export default ProductInput;
