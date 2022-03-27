import React from "react";
import { Box, Grid } from "@material-ui/core";
import dummyData from "./apps";

import CardsArray from "./CardsArray";

const Cards = () => {
  return (
    <>
      <Box
        id="portfolio"
        sx={{
          display: "flex",
          paddingLeft: 30,

          width: "90%",
          " @media screen and (max-width: 651px)": {
            width: "100%",
          },
        }}
        justifyContent="start"
      >
        <Box
          component="div"
          sx={{
            "& .MuiGrid-container ": {
              " @media screen and (max-width: 650px)": {
                flexDirection: "row",
              },
            },
            "& .MuiBox-root-6": {
              " @media screen and (min-width: 650px)": {
                overflow: "scroll",
                width: "85%",
              },
            },
          }}
          className="smoothScroll"
          id="scroll"
        >
          <br></br>
          <Grid container spacing={3} columns={3}>
            <CardsArray map={dummyData} />
          </Grid>
          <br></br>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
