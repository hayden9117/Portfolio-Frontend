import { Box, Typography, Avatar } from "@mui/material";
import { resumeData } from "./Data/resumeData";
export const AboutMe = () => {
  return (
    <Box
      id="resume"
      overflow={"scroll"}
      sx={{
        bgcolor: "background.paper",
        width: "85%",
        height: 400,
        mt: 12,
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: 350 }}>
        <Avatar
          variant="rounded"
          srcSet="/images/aleyesk.jpeg"
          sx={{
            height: 350,
            width: 350,
            marginLeft: 3,
            marginBottom: 3,
            float: "left",
            padding: "0 20px 20px 0",
          }}
        ></Avatar>
        <Typography variant="h5" paragraph={true} sx={{ textAlign: "left" }}>
          {resumeData.Introduction.Intro}
        </Typography>
      </Box>
    </Box>
  );
};
