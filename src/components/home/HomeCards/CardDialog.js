import { Dialog, Typography, DialogTitle, Box } from "@mui/material";

import React from "react";

export default function CardsDialog(props) {
  const [open, setOpen] = React.useState(false);

  const truncate = (str) => {
    if (str.length > 150) {
      let newstr = `${str.slice(0, 150)}...`;
      return newstr;
    }
    return str;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Typography data-testid="principal-seymour-skinner">
          {props.description.length > 150 ? (
            <Typography align="center" onClick={handleClickOpen}>
              {truncate(props.description)}
            </Typography>
          ) : (
            truncate(props.description)
          )}
        </Typography>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle sx={{ mb: -3, marginRight: "auto", marginLeft: "auto" }}>
            Description
          </DialogTitle>
          <Typography sx={{ padding: 2 }}>{props.description}</Typography>
        </Dialog>
      </Box>
    </>
  );
}
