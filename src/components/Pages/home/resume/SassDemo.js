import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
function SassDemo() {
  return (
    <Box id="portfolio" sx={{ width: "80%", paddingLeft: "5%" }}>
      <Typography
        variant="h5"
        paragraph={true}
        sx={{
          padding: "10px 10px 10px 10px",
          textAlign: "left",
          " @media screen and (max-width: 650px)": {
            textAlign: "center",
            ml: "auto",
            mr: "auto",
          },
        }}
      >
        I developed an MVP for an Automated scheduling application for space
        operators alongside three of my peers. After this presentation, we met
        with many different people, and our application will be used DOD-wide.
        This was one of my more significant accomplishments in my career, the
        feeling of having your own innovative ideas come to life and make a
        difference feels fantastic!
      </Typography>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=axjY3_B1HKM"
          config={{
            youtube: {
              playerVars: {
                start: 90,
              },
              youtube: {
                preload: true,
              },
            },
          }}
          width="100%"
          height="100%"
        />
      </div>
    </Box>
  );
}

export default SassDemo;
