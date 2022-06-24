import React from "react";
import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function LinkList(props) {
  const { config, setConfig } = props;
  const [url, setUrl] = useState(config.links.url);
  const arr = [];

  for (let i = 0; i < config.links.num; i++) {
    arr.push(config.links.url[i]);
  }
  const handleSave = () => {
    let newArr = [];
    for (let i = 0; i < config.links.num; i++) {
      newArr.push(url[i]);
    }
    if (config.avatars <= 1) {
      setConfig({
        links: { num: config.links.num, url: newArr },
        avatars: config.avatars,
        background: config.background,
        template: config.template,
      });
    } else {
      alert("you can only add one avatar.");
    }
  };
  const handleChange = (e, index) => {
    e.preventDefault();
    console.log(index);
    console.log(arr);
    console.log(e.target.value);

    // 1. Make a shallow copy of the array
    let tempUrl = [...url];

    // 2. Make a shallow copy of the element you want to mutate
    let tempEl = { ...tempUrl[index] };

    // 3. Update the property you're interested in
    tempEl = e.target.value;

    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    tempUrl[index] = tempEl;

    // 5. Set the state to our new copy
    setUrl(tempUrl);
  };
  const handleConfigLink = () => {
    setConfig({
      links: { num: config.links.num + 1, url: [...arr, ""] },
      avatars: config.avatars,
      background: config.background,
      template: config.template,
    });
  };
  const handleConfigLinkRemove = () => {
    arr.pop();
    setConfig({
      links: { num: config.links.num - 1, url: arr },
      avatars: config.avatars,
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
      {arr.map((link, index) => (
        <Box
          sx={{
            padding: 2,
          }}
        >
          <TextField
            fullWidth={true}
            key={index}
            defaultValue={config.links.url[index]}
            value={url[index]}
            onChange={(e) => handleChange(e, index)}
          ></TextField>
        </Box>
      ))}
      <Button onClick={() => handleSave()}>Save</Button>
      <Button onClick={() => handleConfigLinkRemove()}>remove</Button>
      <Button onClick={() => handleConfigLink()}>add</Button>
    </Box>
  );
}
