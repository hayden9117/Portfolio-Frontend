import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  const graph = [
    { b: 5, c: 2 },
    { a: 5, c: 7, d: 8 },
    { a: 2, b: 7, d: 4, e: 8 },
    { b: 8, c: 4, e: 6, f: 4 },
    { c: 8, d: 6, f: 3 },
    { e: 3, d: 4 },
  ];
  return (
    <>
      {graph.map((k) => {
        return (
          <React.Fragment>
            <Item></Item>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function GridMap() {
  return (
    <Box>
      <Stack spacing={10} direction="row">
        <Stack container spacing={10} direction="column">
          <FormRow />
          <FormRow />
        </Stack>
        <Stack container spacing={10} direction="column">
          <FormRow />
          <FormRow />
        </Stack>
        <Stack container spacing={10} direction="column">
          <FormRow />
          <FormRow />
        </Stack>
        <Stack container spacing={10} direction="column">
          <FormRow />
          <FormRow />
        </Stack>
      </Stack>
    </Box>
  );
}
