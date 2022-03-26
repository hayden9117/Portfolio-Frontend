import { Box, Typography, Avatar } from "@mui/material";
import { resumeData } from "./Data/resumeData";
export const AboutMe = () => {
  return (
    <Box
      id="resume"
      sx={{
        bgcolor: "background.paper",
        width: "85%",
        mt: 12,
        mb: 10,
      }}
    >
      <Avatar
        variant="rounded"
        srcSet="/images/aleyesk.jpeg"
        sx={{
          height: 350,
          width: 350,

          " @media screen and (min-width: 650px)": {
            float: "left",
          },
          " @media screen and (max-width: 650px)": {
            height: 450,
            width: 450,
            ml: "auto",
            mr: "auto",
            padding: "10px 10px 10px 10px",
          },
          padding: "0 20px 20px 0",
        }}
      ></Avatar>
      <Typography variant="h5" paragraph={true} sx={{ textAlign: "left" }}>
        {resumeData.Introduction.Intro}
      </Typography>
    </Box>
  );
};
