import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import dummyData from "./apps";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CardsArray from "./CardsArray";
import { useEffect } from "react";
import { useRef } from "react";

const Cards = () => {
  const box = useRef(null);
  const grid = useRef(null);
  const [scrollOffset, setScrollOffset] = React.useState();
  const element = document.getElementById("scroll");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    var x = element.scrollLeft;
    var y = document.documentElement.scrollTop;
    setScrollOffset(y);
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
  }, [handleScroll]);

  const scroll = (prop) => {
    if (prop === 0) {
      box.current.scrollTo(0, null);
    }

    box.current.scrollLeft += prop;
    console.log(grid.current.clientWidth);
  };

  return (
    <>
      <Box
        id="aboutMe"
        sx={{
          display: "flex",
          flexDirection: "row",
          maxHeight: 460,
          width: 555,
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Button
            color="primary"
            onClick={() => scroll(-450)}
            variiant="contained"
          >
            <ChevronLeftIcon />
          </Button>
        </Box>
        <Box
          component="div"
          ref={box}
          sx={{
            "& .MuiGrid-container ": {
              " @media screen and (max-width: 650px)": {
                flexDirection: "row",
              },
            },
            "& .MuiBox-root-6": {
              " @media screen and (min-width: 650px)": {
                overflow: "scroll",
              },
            },
          }}
          className="smoothScroll"
          id="scroll"
        >
          <br></br>
          <Grid container ref={grid} spacing={3} wrap="nowrap" columns={3}>
            <CardsArray map={dummyData} scroll={scrollOffset} />
          </Grid>
          <br></br>
        </Box>
        <Button id="scrollBtn" color="primary" onClick={() => scroll(450)}>
          <ChevronRightIcon />
        </Button>
      </Box>
    </>
  );
};

export default Cards;
