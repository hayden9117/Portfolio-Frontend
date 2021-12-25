import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  Box,
} from "@material-ui/core";
import dummyData from "./apps";
import CardDialog from "./CardDialog";

const Cards = () => {
  return (
    <Box
      overflow="scroll"
      sx={{ maxWidth: 1200, maxHeight: 2000, margin: "auto" }}
    >
      <br></br>
      <Grid container spacing={3} wrap="nowrap" direction="row">
        {dummyData?.map((item) => (
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
                      <img src={item.image} alt={item.name.slice(0, 2)} />
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
        ))}
      </Grid>
      <br></br>
    </Box>
  );
};

export default Cards;
