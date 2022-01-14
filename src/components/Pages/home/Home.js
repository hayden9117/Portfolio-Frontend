import AppContext from "../../../Context/AppContext";
import { useContext } from "react";
import { Box, Stack } from "@mui/material";
import Cards from "./HomeCards/Cards";
import SideStepper from "../../navigation/side-stepper/sideStepper";
import FullWidthTabs from "./resume/Tabs";
import { AboutMe } from "./resume/aboutMe";
import { HomeSideSteps } from "../../comman/helpers/StepperHelper";

function Home() {
  const { setNavTitle } = useContext(AppContext);
  const { setSteps } = useContext(AppContext);
  setSteps(HomeSideSteps);
  setNavTitle("My Resume");

  return (
    <>
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
      <Box>
        <SideStepper />
      </Box>
    </>
  );
}
export default Home;
