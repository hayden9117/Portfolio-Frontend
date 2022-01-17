import {
  Typography,
  Box,
  Stack,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { resumeData } from "./Data/remuseData";
import { useState } from "react";

function Skills() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 800,
        height: 1100,
        mt: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 5,
      }}
    >
      <Typography variant="h2">Skill Set</Typography>
      <List>
        {resumeData.Skills.skillSet.map((skills) => {
          return (
            <ListItem>
              <Accordion
                expanded={expanded === skills.panel}
                onChange={handleChange(skills.panel)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    variant="h5"
                    sx={{ maxWidth: 430, textAlign: "left" }}
                  >
                    {skills.skill}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{skills.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default Skills;
