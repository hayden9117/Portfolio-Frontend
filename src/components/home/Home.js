import AppContext from "../../Context/AppContext";
import { useContext } from "react";
import { Box, Stack } from "@mui/material";
import Cards from "./HomeCards/Cards";
import "../../App.css";
import FullWidthTabs from "./resume/Tabs";
import { AboutMe } from "./resume/aboutMe";
function Home() {
  const { setNavTitle } = useContext(AppContext);

  setNavTitle("Richard Haydens Portfolio");

  return (
    <Stack>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Stack>
          <AboutMe />

          <FullWidthTabs />
        </Stack>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "12%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Cards />
      </Box>
    </Stack>
  );
}
export default Home;
