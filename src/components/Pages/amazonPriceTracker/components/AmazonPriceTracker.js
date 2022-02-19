import {
  List,
  ListItem,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import CartDummyData from "../CartDummyData";
import PriceAppContext from "../Context/PriceAppContext";
function AmazonPriceTracker() {
  const { url } = useContext(PriceAppContext);
  const [list, setList] = useState([]);
  console.log(url);
  const handleProductLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    fetch("http://localhost:3001/getAmazonData", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => res.map((res) => res))
      .then((result) => {
        setList(result);
      });
  }, [url]);
  console.log(list);
  return (
    <Box sx={{ paddingTop: 20 }}>
      {list.map((item) => (
        <>
          <Card sx={{ minWidth: "100%" }}>
            <CardContent>
              <Typography noWrap variant="h6" component="div">
                {item.productname}
              </Typography>
              <br />
              <Typography variant="h5" component="div">
                {`Current Price:    ${item.itemprice}`}
              </Typography>

              <br></br>
            </CardContent>
            <Button onClick={() => handleProductLink(item.url)}>
              Link To Page
            </Button>
          </Card>
          <br></br>
        </>
      ))}
    </Box>
  );
}

export default AmazonPriceTracker;
