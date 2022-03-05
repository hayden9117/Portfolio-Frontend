import {
  Dialog,
  FormControl,
  Typography,
  Box,
  Stack,
  MenuItem,
  Divider,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import ProductGraph from "./AnalyticsGraphing/productGraph";

function AnalyticDialog(props) {
  const { item, open, setOpen } = props;

  const [selection, setSelection] = useState("weekly");
  const { selectedData, setSelectedData } = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
          <Stack spacing={-2} sx={{ padding: 2, display: "flex" }}>
            <Stack
              spacing={2}
              sx={{ padding: 2, display: "flex" }}
              direction="row"
            >
              <Stack spacing={2} sx={{ padding: 2, display: "flex" }}>
                <MenuItem onClick={() => setSelection("weekly")}>
                  weekly
                </MenuItem>
                <MenuItem onClick={() => setSelection("monthly")}>
                  monthly
                </MenuItem>
                <MenuItem onClick={() => setSelection("past three months")}>
                  past three months
                </MenuItem>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack spacing={2} sx={{ padding: 2, display: "flex" }}>
                <FormControl>
                  <Typography>{`Current price: $ ${item.itemprice}`}</Typography>
                  {item.some_datetime ? (
                    <Typography>{`Date product was added : ${item.some_datetime.slice(
                      0,
                      10
                    )}`}</Typography>
                  ) : (
                    ""
                  )}
                </FormControl>
              </Stack>
            </Stack>
            <Divider flexItem />
            <Stack spacing={2} sx={{ padding: 2 }} direction="row">
              <ProductGraph priceData={item.data} selection={selection} />
            </Stack>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
}

AnalyticDialog.propTypes = {
  item: PropTypes.object,
  open: PropTypes.bool,
};

export default AnalyticDialog;