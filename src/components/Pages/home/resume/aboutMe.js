import { Box, Stack, Typography, Avatar } from "@mui/material";
import { resumeData } from "./Data/remuseData";
export const AboutMe = () => {
  return (
    <Box
      id="aboutMe"
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        height: 360,
        mt: 12,
        marginLeft: "auto",
        marginRight: "auto",
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
        <Typography
          paragraph={true}
          sx={{ maxWidth: "60%", textAlign: "left" }}
        >
          {resumeData.Introduction.Intro}
        </Typography>
      </Stack>
    </Box>
  );
};
