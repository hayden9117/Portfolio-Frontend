import React from "react";
import { Box, Avatar, ListItem, Typography, Button } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function AddAvatar(props) {
  const { config, setConfig } = props;
  const handleConfigRemove = () => {
    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatars: config.avatars - 1,
      background: config.background,
      template: config.template,
    });
  };
  return (
    <Box
      sx={{
        width: "300px",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
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
      <Button onClick={() => handleConfigRemove()}>remove</Button>
    </Box>
  );
}
