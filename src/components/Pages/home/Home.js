import AppContext from "../../../Context/AppContext";
import { useContext } from "react";
import { Box, Stack } from "@mui/material";
import Cards from "./HomeCards/Cards";
import SideStepper from "../../navigation/side-stepper/sideStepper";
import FullWidthTabs from "./resume/Tabs";
import { AboutMe } from "./resume/aboutMe";
import { HomeSideSteps } from "../../comman/helpers/StepperHelper";
import Skills from "./resume/Skills";
import { Divider } from "@mui/material";

function Home() {
  const { setNavTitle } = useContext(AppContext);
  const { setSteps } = useContext(AppContext);

  setSteps(HomeSideSteps);
  setNavTitle("My Resume");

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",

          "& .css-pnq1z9-MuiStack-root": {
            alignItems: "center",
          },
        }}
      >
        <Stack
          direction={"column"}
          spacing={5}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <AboutMe />
          <Skills />
          <FullWidthTabs />
          <Cards />
        </Stack>
      </Box>

      <Box>
        <SideStepper />
      </Box>
    </Box>
  );
}
export default Home;
