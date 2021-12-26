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
import CardsArray from "./CardsArray";
import { useEffect } from "react";

const Cards = () => {
  const [scrollOffset, setScrollOffset] = React.useState();
  const [scrollEnd, setScrollEnd] = React.useState(0);
  const element = document.getElementById("scroll");

  const handleScroll = () => {
    var x = element.scrollLeft;

    setScrollOffset(x);
  };

  useEffect(() => {
    document.getElementById("scroll").addEventListener("scroll", handleScroll);

    return () => {
      if (document.getElementById("scroll") !== null) {
        document
          .getElementById("scroll")
          .removeEventListener("scroll", handleScroll);
      }
    };
  }, [document.getElementById("scroll")]);

  const InfiniteLoop = () => {
    if (scrollOffset < 800 || scrollOffset === undefined) {
      return CardsArray();
    }
    if (scrollOffset > 800) {
      return <CardsArray Data={dummyData} />;
    }
  };

  return (
    <>
      {scrollOffset}
      <Box
        id="scroll"
        overflow="scroll"
        sx={{ maxWidth: 1200, maxHeight: 2000, margin: "auto", mb: 12 }}
      >
        <br></br>
        <Grid container spacing={3} wrap="nowrap" direction="row">
          {InfiniteLoop()}

          {/* {dummyData?.map((item) => {
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
            );
          })} */}
        </Grid>
        <br></br>
      </Box>

      <div></div>
    </>
  );
};

export default Cards;
