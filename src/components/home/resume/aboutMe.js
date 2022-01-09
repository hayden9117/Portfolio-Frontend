import { Box, Typography, Avatar } from "@mui/material";

export const AboutMe = () => {
  return (
    <Box
      sx={{
        flexDirection: "row",
        maxWidth: 500,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Avatar sx={{ height: 150, width: 150 }}></Avatar>
      <Typography>This is text</Typography>
    </Box>
  );
};
