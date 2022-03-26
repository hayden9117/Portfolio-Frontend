import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { AppBar, Tabs, Tab, Typography, Box, useTheme } from "@mui/material";
import { Airforce } from "./experience";
import { Spaceforce } from "./experience";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      id="resume"
      sx={{
        bgcolor: "background.paper",
        width: "85%",
      }}
    >
      <AppBar position="sticky" sx={{ zIndex: 100 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Airforce" {...a11yProps(0)} />
          <Tab label="Spaceforce" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          overflow="scroll"
          value={value}
          index={0}
          dir={theme.direction}
        >
          <Airforce />
        </TabPanel>
        <TabPanel
          overflow="scroll"
          value={value}
          index={1}
          dir={theme.direction}
        >
          <Spaceforce />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
