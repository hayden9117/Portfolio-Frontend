import React from "react";
import { useContext } from "react";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import CardDialog from "./CardDialog";
import AppContext from "../../../../Context/AppContext";

function CardsArray(props) {
  const { checked } = useContext(AppContext);

  return (
    <>
      {props.map?.map((item) => {
        return (
          <>
            <Grid item>
              <Card data-testid="card" key={item.id}>
                <CardHeader
                  titleTypographyProps={{ variant: "h6" }}
                  title={item.name}
                />
                <CardMedia
                  component="img"
                  data-testid="image"
                  height="180"
                  image={item.image}
                  alt="application"
                />
                <CardContent>
                  <Typography data-testid="description" variant="body2">
                    <CardDialog description={item.description} />
                    <br />
                  </Typography>

                  {checked === true ? (
                    <Button href={item.link}> Check Out App</Button>
                  ) : (
                    <Button href={item.link} color="secondary">
                      {" "}
                      Check Out App
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </>
        );
      })}
    </>
  );
}
export default CardsArray;
