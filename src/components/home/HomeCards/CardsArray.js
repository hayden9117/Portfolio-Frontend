import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import CardDialog from "./CardDialog";
import "../../../App.css";

function CardsArray(props) {
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
                  subheader={`Updated at: ${item.updatedAt}`}
                />
                <CardMedia
                  component="img"
                  data-testid="image"
                  height="194"
                  image={item.image}
                  alt="application"
                />
                <CardContent>
                  <Typography data-testid="description" variant="body2">
                    <CardDialog description={item.description} />
                    <br />
                  </Typography>
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
