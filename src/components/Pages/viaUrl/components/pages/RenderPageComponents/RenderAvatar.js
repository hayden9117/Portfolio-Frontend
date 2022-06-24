import React from "react";
import { Box, Avatar, ListItem, Typography, Button } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function RenderAvatar(props) {
  const { config } = props;

  return (
    <Box
      sx={{
        width: "300px",
      }}
    >
      <Avatar
        variant="circular"
        sx={{
          height: 150,
          width: 150,

          " @media screen and (min-width: 650px)": {
            float: "left",
            padding: "10px 10px 0px 20px",
          },
          " @media screen and (max-width: 650px)": {
            ml: "auto",
            mr: "auto",
            padding: "10px 10px 10px 10px",
          },
          padding: "0 20px 20px 0",
        }}
      />
    </Box>
  );
}
