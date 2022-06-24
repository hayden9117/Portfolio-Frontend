import React from "react";
import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function RenderLinkList(props) {
  const { config, setConfig } = props;

  const arr = [];

  for (let i = 0; i < config.links.num; i++) {
    arr.push(config.links.url[i]);
  }

  return (
    <Box
      sx={{
        width: "300px",
      }}
    >
      {arr.map((link, index) => (
        <Box
          sx={{
            padding: 2,
          }}
        >
          <Typography fullWidth={true} key={index}>
            {" "}
            {config.links.url[index]}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
