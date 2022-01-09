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
} from "@material-ui/core";
import CartDummyData from "./CartDummyData";
import { Route } from "react-router-dom";
import AmazonPriceTracker from "./AmazonPriceTracker";

function HaydenArbitrage() {
  const handleProductLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Box className="createList" m={"auto"} mt={20}>
      <div>placement test:</div>
      {/* <AmazonPriceTracker /> */}

      {CartDummyData.search_results?.map((item) => (
        <>
          <Card className="cardsArbitrage" sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography variant="h4" component="div">
                {item.product.title}
              </Typography>
              <br />
              <Typography variant="h5" component="div">
                {`stock status:    ${item.inventory.in_stock}`}
              </Typography>
              <br />
              <Typography variant="h5" component="div">
                {`stock level:     ${item.inventory.stock_level}`}
              </Typography>
              <br />
              <Typography variant="h5" component="div">
                {`online availability:     ${item.inventory.available_online} `}
              </Typography>
              <br />
              <Typography variant="h5" component="div">
                {`price from walmart:    $${item.offers.primary.price} `}
              </Typography>
              <br></br>
            </CardContent>
            <Button onClick={() => handleProductLink(item.product.link)}>
              Link To Page
            </Button>
          </Card>
          <br></br>
        </>
      ))}

      <div>placement test:</div>
    </Box>
  );
}

export default HaydenArbitrage;
