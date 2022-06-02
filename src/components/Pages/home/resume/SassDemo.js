import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
function SassDemo() {
  return (
    <Box sx={{ width: "80%", paddingLeft: "5%" }}>
      <Typography variant="h5" sx={{ padding: 5 }}>
        Upon completing my software development training, I developed an MVP for
        an Automated scheduling application for space operators alongside three
        of my peers. This was an independent project where we fixed a space
        force issue with a software solution without the need for direction.
        After this presentation, we met with many different people, and our
        application will be used DOD-wide. This was one of my more significant
        accomplishments in my career, the feeling of having your own innovative
        ideas come to life and make a difference feels fantastic!
      </Typography>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=axjY3_B1HKM"
          config={{
            youtube: {
              playerVars: {
                start: 33,
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
