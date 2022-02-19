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
import { resumeData } from "./Data/resumeData";
import { useRef, useState, useEffect } from "react";

function Skills() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
    console.log(panel);
  };

  return (
    <Box
      id="scrollBox"
      sx={{
        width: "80%",
        height: 450,
        overflow: "scroll",
      }}
      onScroll={handleChange(resumeData.Skills.skillSet)}
    >
      <List sx={{ marginLeft: "auto", marginRight: "auto" }}>
        {resumeData.Skills.skillSet.map((skills, index, array) => {
          return (
            <ListItem
              onMouseEnter={handleChange(skills.panel)}
              onMouseLeave={handleChange(false)}
              onMouseDown={handleChange(skills.panel)}
            >
              <Accordion
                expanded={expanded === skills.panel ? true : false}
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
