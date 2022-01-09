import React from "react";
import { Box, Grid, Button } from "@mui/material";
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
  }, [document.getElementById("scroll", handleScroll)]);

  const scroll = (prop) => {
    if (prop === 0) {
      box.current.scrollTo(0, null);
    }

    box.current.scrollLeft += prop;
    console.log(grid.current.clientWidth);
  };

  return (
    <>
      {`TEST DATA ___ SCROLL POS ( ${scrollOffset} )`}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxHeight: 460,
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={() => scroll(-450)}
            onDoubleClick={() => scroll(0)}
            variiant="contained"
          >
            <ChevronLeftIcon />
          </Button>
        </Box>
        <Box ref={box} className="smoothScroll" id="scroll" overflow="scroll">
          <br></br>
          <Grid container ref={grid} spacing={3} wrap="nowrap" direction="row">
            <CardsArray map={dummyData} scroll={scrollOffset} />
          </Grid>
          <br></br>
        </Box>
        <Button
          onClick={() => scroll(450)}
          onDoubleClick={() => scroll(grid.current.clientWidth)}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
    </>
  );
};

export default Cards;
