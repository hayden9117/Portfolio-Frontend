import { Box, Typography, Stack } from "@mui/material";

import "./css/priceTracker.css";

function AmazonPriceTrackerPlaceHolder() {
  return (
    <Stack
      sx={{
        " @media screen and (max-width: 650px)": {
          flexDirection: "column",
        },
      }}
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          width: "40%",
          padding: 10,
          flexGrow: 1,
          zIndex: 1,
          bgcolor: "background.paper",
          " @media screen and (max-width: 650px)": {
            width: "100%",
            paddingBottom: 2,
          },
        }}
      >
        <Stack spacing={5}>
          <Typography variant={"h2"} align={"center"}>
            Welcome to my Amazon Price Tracker!
          </Typography>

          <Typography variant={"h5"}>
            Copy a URL that links to an amazon product you would like to track,
            Paste it into the the text box on the navigation bar and hit submit.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

export default AmazonPriceTrackerPlaceHolder;
