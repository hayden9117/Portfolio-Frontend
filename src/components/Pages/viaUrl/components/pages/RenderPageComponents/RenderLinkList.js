import React from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  Button,
  ButtonBase,
} from "@mui/material";
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
        display: "flex",
        flexDirection: "column",
        width: "300px",
      }}
    >
      {arr.map((link, index) => (
        <Box
          sx={{
            padding: 2,
          }}
        >
          <ButtonBase href={config.links.url[index]}>
            <Typography fullWidth={true} key={index}>
              {" "}
              {config.links.url[index]}
            </Typography>
          </ButtonBase>
        </Box>
      ))}
    </Box>
  );
}
