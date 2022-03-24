import { useContext } from "react";
import useToken from "../UseToken";
import { Paper, InputBase, Button } from "@mui/material";
import PriceAppContext from "../Context/PriceAppContext";

function ProductInput() {
  const { url, setUrl } = useContext(PriceAppContext);
  const { mounted, setMounted } = useContext(PriceAppContext);
  const token = useToken();
  console.log(token.token.username);
  const postUrl = (url) => {
    const obj = {
      userID: token.token.token,
      url: url,
      itemPrice: "temp",
      productname: "temp",
    };
    fetch(`https://richiehayden-portfolio-backend.herokuapp.com/AmazonData`, {
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
        console.log("post incomplete");
      });
    setMounted(!mounted);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^https?:\/\//i.test(url)) {
      postUrl("http://" + url);
    } else {
      postUrl(url);
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
