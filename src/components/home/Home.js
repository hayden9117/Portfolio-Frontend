import AppContext from "../../Context/AppContext";
import { useContext } from "react";
import { Box } from "@mui/material";
import Cards from "./HomeCards/Cards";
import "../../App.css";
import FullWidthTabs from "./resume/Tabs";
import { AboutMe } from "./resume/aboutMe";
function Home() {
  const { setNavTitle } = useContext(AppContext);

  setNavTitle("Richard Haydens Portfolio");

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        <AboutMe />
        <FullWidthTabs />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "12%",
        }}
      >
        <Cards />
      </Box>
    </Box>
  );
}
export default Home;
