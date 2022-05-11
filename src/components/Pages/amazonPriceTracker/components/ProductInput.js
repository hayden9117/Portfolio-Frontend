import { useContext, useState } from "react";
import useToken from "../UseToken";
import { Paper, InputBase, Button } from "@mui/material";
import PriceAppContext from "../Context/PriceAppContext";
import { postUrl } from "../api/api";

function ProductInput() {
  const { setRender } = useContext(PriceAppContext);
  const { url, setUrl } = useContext(PriceAppContext);
  const [urlInput, setUrlInput] = useState("");
  const [complete, setComplete] = useState(false);

  const token = useToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUrl(urlInput);
    if (!/^https?:\/\//i.test(url)) {
      await postUrl(url, token).then((res) => {
        console.log(res);
      });
    } else {
      await postUrl(url, token).then((res) => {
        console.log(res);
      });
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
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
      ></InputBase>
      <Button
        variant="contained"
        sx={{ width: "30%" }}
        onClick={
          token.token !== null
            ? handleSubmit
            : () => alert("Please login or sign up to track products.")
        }
      >
        Submit
      </Button>
    </Paper>
  );
}

export default ProductInput;
