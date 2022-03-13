import { Box, Stack, Typography, Avatar } from "@mui/material";
import { resumeData } from "./Data/resumeData";
export const AboutMe = () => {
  return (
    <Box
      id="resume"
      sx={{
        bgcolor: "background.paper",
        width: "85%",
        height: 400,
        mt: 12,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar
          variant="rounded"
          srcSet="/images/aleyesk.jpeg"
          sx={{
            height: 350,
            width: 350,
            marginLeft: 3,

            marginBottom: 3,
          }}
        ></Avatar>
        <Box overflow="scroll" sx={{ maxWidth: "60%", height: 350 }}>
          <Typography variant="h5" paragraph={true} sx={{ textAlign: "left" }}>
            {resumeData.Introduction.Intro}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
