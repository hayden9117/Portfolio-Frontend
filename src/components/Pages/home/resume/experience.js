import { Typography, Box, List, ListItem } from "@mui/material";

import { resumeData } from "./Data/remuseData";

export const Airforce = () => {
  return (
    <Box textAlign={"left"}>
      <Typography variant="h5">
        Cyber Support - United States Airforce
      </Typography>
      <Typography variant="subtitle1">May 2018 - Feburary 2021</Typography>
      <br></br>
      <Typography variant="h5">
        <List>
          {resumeData.AirForce.JobDuties.map((list) => (
            <ListItem>{list}</ListItem>
          ))}
        </List>
      </Typography>
    </Box>
  );
};

export const Spaceforce = () => {
  return (
    <Box textAlign={"left"}>
      <Typography variant="h5">
        Full Stack Software Developer - United States spaceforce
      </Typography>
      <Typography variant="subtitle1">Feburary 2021 - Current</Typography>
      <br></br>
      <Typography variant="h5">
        <List>
          {resumeData.SpaceForce.JobDuties.map((list) => (
            <ListItem>{list}</ListItem>
          ))}
        </List>
      </Typography>
    </Box>
  );
};
