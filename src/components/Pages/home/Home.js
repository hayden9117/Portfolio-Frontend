import { useEffect, useState, useContext } from "react";
import AppContext from "../../../Context/AppContext";
import { Box, Stack } from "@mui/material";
import Cards from "./HomeCards/Cards";
import SideStepper from "./navigation/side-stepper/sideStepper";
import FullWidthTabs from "./resume/Tabs";
import { AboutMe } from "./resume/aboutMe";
import { HomeSideSteps } from "../../comman/helpers/StepperHelper";
import Skills from "./resume/Skills";
import { Divider } from "@mui/material";
import NavBar from "./navigation/NavBar";

function Home() {
  const [scrollOffset, setScrollOffset] = useState(0);

  for (let i = 0; i < HomeSideSteps.length; i++) {
    let labelIndex =
      scrollOffset >= HomeSideSteps[i].scrollPos
        ? HomeSideSteps[i].stepValue
        : null;
    if (typeof HomeSideSteps[labelIndex - 1] === "object") {
      var title = HomeSideSteps[labelIndex - 1].label;
    }
  }
  //eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    let x = window.scrollY;

    setScrollOffset(x);
  };

  // useEffect(() => {
  //   console.log(title);
  // });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }, [handleScroll]);

  return (
    <Box>
      <NavBar title={title} />
      <Box
        sx={{
          textAlign: "center",
          paddingTop: 20,

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

      <SideStepper scrollOffset={scrollOffset} steps={HomeSideSteps} />
    </Box>
  );
}
export default Home;
