import { Box, Typography, Avatar } from "@mui/material";
import { resumeData } from "./Data/resumeData";
export const AboutMe = () => {
  return (
    <Box
      id="aboutMe"
      sx={{
        bgcolor: "background.paper",
        width: "85%",
        mt: 20,
        mb: 10,
        " @media screen and (max-width: 650px)": {
          ml: "auto",
          mr: "auto",
          padding: "10px 10px 10px 10px",
          wifth: "100%",
        },
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
            padding: "10px 10px 0px 20px",
          },
          " @media screen and (max-width: 650px)": {
            ml: "auto",
            mr: "auto",
            padding: "10px 10px 10px 10px",
          },
          padding: "0 20px 20px 0",
        }}
      ></Avatar>
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
        {resumeData.Introduction.Intro}
      </Typography>
    </Box>
  );
};
