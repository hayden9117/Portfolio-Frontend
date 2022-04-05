import { useState } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import PropTypes from "prop-types";
import LineChart from "./chart";

function ProductGraph(props) {
  const { priceData, selection } = props;

  const [PriceData, setPriceData] = useState({
    labels: priceData.map((data) => data.day),
    datasets: [
      {
        label: "Price Change",
        data: priceData.map((data) => data.price),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        maintainAspectRatio: true,
      },
    ],
  });

  return (
    <Box
      sx={{ Height: "100%", width: "100%", border: "1px dashed grey" }}
      mt={2}
    >
      <LineChart chartData={PriceData} />
    </Box>
  );
}

ProductGraph.propTypes = {
  PriceData: PropTypes.object,
  selection: PropTypes.string,
};
export default ProductGraph;
