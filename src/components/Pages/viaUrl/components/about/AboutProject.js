import { Box, Stack, Typography } from "@mui/material";
import AboutProjectSVG from "./aboutSVGS/AboutProjectSVG";

export const AboutProject = () => {
  return (
    <Box
      id="aboutMe"
      sx={{
        bgcolor: "background.paper",
        width: "85%",
        height: "100vh",

        ml: "auto",
        mr: "auto",
        padding: "10px 10px 10px 10px",
      }}
    >
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h2"
          paragraph={true}
          sx={{
            padding: "10px 10px 10px 10px",
            textAlign: "center",
            ml: "auto",
            mr: "auto",
          }}
        >
          Inspiration
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <Box>
            <AboutProjectSVG />
          </Box>

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
            /this will be an inspiration segment, explaining why i chose this
            project, and how i went about it/ Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
