import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Cards from "./HomeCards/Cards";
import SideStepper from "./navigation/side-stepper/sideStepper";
import FullWidthTabs from "./resume/Tabs";
import { AboutMe } from "./resume/aboutMe";
import Skills from "./resume/Skills";
import { Divider } from "@mui/material";
import NavBar from "./navigation/NavBar";
import SassDemo from "./resume/SassDemo";
function Home() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [aboutMeHeight, setAboutMeHeight] = useState();
  const [skillsHeight, setSkillsHeight] = useState();
  const [experienceHeight, setSExperienceHeight] = useState();
  //eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    let x = window.scrollY;

    setScrollOffset(x);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let HomeSideSteps = [
    {
      label: "About Me",
      stepValue: 1,
      scrollPos: 0,
    },
    {
      label: "Skill Sets",
      stepValue: 2,
      scrollPos: aboutMeHeight + 200,
    },
    {
      label: "Experience",
      stepValue: 3,
      scrollPos: aboutMeHeight + skillsHeight + 250,
    },
    {
      label: "My Portfolio",
      stepValue: 4,
      scrollPos: aboutMeHeight + skillsHeight + experienceHeight + 300,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
      setAboutMeHeight(document.getElementById("aboutMe").scrollHeight);
      setSkillsHeight(document.getElementById("skills").scrollHeight);
      setSExperienceHeight(document.getElementById("experience").scrollHeight);
    });
  }, [HomeSideSteps, handleScroll]);

  // calls handle scroll on initial render, sets scroll position for each components on enitial page load
  useEffect(() => {
    setAboutMeHeight(document.getElementById("aboutMe").scrollHeight);
    setSkillsHeight(document.getElementById("skills").scrollHeight);
    setSExperienceHeight(document.getElementById("experience").scrollHeight);
  }, []);
  for (let i = 0; i < HomeSideSteps.length; i++) {
    let labelIndex =
      scrollOffset >= HomeSideSteps[i].scrollPos - 50
        ? HomeSideSteps[i].stepValue
        : null;
    if (typeof HomeSideSteps[labelIndex - 1] === "object") {
      var title = HomeSideSteps[labelIndex - 1].label;
    }
  }
  return (
    <>
      <NavBar title={title} steps={HomeSideSteps} />
      <Box
        sx={{
          textAlign: "center",

          " @media screen and (max-width: 650px)": {},
        }}
      >
        <Stack direction={"column"} spacing={5}>
          <AboutMe />
          <Divider sx={{ width: "100%" }} />
          <Skills />
          <Divider sx={{ width: "100%" }} />
          <FullWidthTabs />
          <Divider sx={{ width: "100%" }} />
          <SassDemo />
          <Divider sx={{ width: "100%" }} />
          <Cards />
        </Stack>
      </Box>

      <SideStepper scrollOffset={scrollOffset} steps={HomeSideSteps} />
    </>
  );
}
export default Home;
