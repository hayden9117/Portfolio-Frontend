import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
} from "@material-ui/core";
import dummyData from "./apps";
import CardDialog from "./CardDialog";
import { useEffect } from "react";
import { useState } from "react";
import "../../../App.css";

function CardsArray(props) {
  return (
    <>
      {dummyData?.map((item) => {
        return (
          <>
            <Grid item>
              <Card data-testid="card" key={item.id} sx={{ passing: 3 }}>
                <CardHeader
                  data-testid="title"
                  avatar={
                    <Avatar
                      data-testid="avatar"
                      sx={{ bgcolor: "red" }}
                      aria-label="recipe"
                    >
                      <img
                        className="cardsImage"
                        src={item.image}
                        alt={item.name.slice(0, 2)}
                      />
                    </Avatar>
                  }
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
