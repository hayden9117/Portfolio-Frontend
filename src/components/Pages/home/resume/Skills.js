import {
  Typography,
  Box,
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
        height: "100%",
        mt: 10,
        marginBottom: 5,
      }}
    >
      <List sx={{ marginLeft: "auto", marginRight: "auto" }}>
        {resumeData.Skills.skillSet.map((skills) => {
          return (
            <ListItem>
              <Accordion
                expanded={expanded === skills.panel}
                onChange={handleChange(skills.panel)}
                sx={{ width: "100%", padding: 2 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">{skills.skill}</Typography>
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
