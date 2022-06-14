import { Box, List, ListItem, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import PlanContext from "./context/PlanContext";

import PlanItNavBar from "./PlanItNav/PlanItNavBar";
import { PlanItTheme } from "./theme/PlanitTheme";
import { CssBaseline } from "@mui/material";
import JobTable from "./components/JobTable";
import { getJobs } from "./components/ONetApi";
import JobSearch from "./components/JobSearch";
function PlanIt() {
  const [careerList, setCareerList] = useState([]);

  if (careerList.length > 0) {
    return (
      <PlanContext.Provider
        value={{
          careerList,
          setCareerList,
        }}
      >
        <ThemeProvider theme={PlanItTheme}>
          <CssBaseline />

          <PlanItNavBar />
          <Stack direction={"column"}>
            <JobTable rows={careerList} />
          </Stack>
        </ThemeProvider>
      </PlanContext.Provider>
    );
  } else {
    return (
      <PlanContext.Provider
        value={{
          careerList,
          setCareerList,
        }}
      >
        <ThemeProvider theme={PlanItTheme}>
          <CssBaseline />
          <PlanItNavBar />
        </ThemeProvider>
      </PlanContext.Provider>
    );
  }
}

export default PlanIt;
