import {
  Box,
  useTheme,
  CardHeader,
  Typography,
  CardContent,
  Card,
  CardActions,
  Button,
  Stack,
  MobileStepper,
} from "@mui/material";
import { useEffect, useState } from "react";
import AnalyticDialog from "./analytics/analyticsDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteAlert } from "./Alert/deleteAlert";

import "./css/priceTracker.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import useToken from "../UseToken";

function AmazonPriceTracker(props) {
  const { list } = props;
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [id, setId] = useState("");
  const [item, setItem] = useState({});
  const [maxList, setMaxList] = useState(0);
  const { token } = useToken();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setMaxList(list.length);
  }, [list.length]);

  const theme = useTheme();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleProductLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const handleAnalytics = (props, bool) => {
    setOpen(bool.open);
    setItem(list);
  };

  const handleDelete = (id) => {
    setOpenSnack(true);
    setId(id);
  };

  console.log(list);
  const truncate = (str) => {
    if (str.length > 50) {
      let newstr = `${str.slice(0, 50)}...`;
      return newstr;
    }
    return str;
  };
  console.log(item);

  return (
    <Stack
      sx={{
        " @media screen and (max-width: 650px)": {
          flexDirection: "column",
        },
      }}
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          width: "40%",
          padding: 10,
          flexGrow: 1,
          zIndex: 1,
          bgcolor: "background.paper",
          " @media screen and (max-width: 650px)": {
            width: "100%",
            paddingBottom: 2,
          },
        }}
      >
        <Stack spacing={5}>
          <Typography variant={"h2"} align={"center"}>
            Welcome to my Amazon Price Tracker!
          </Typography>

          <Typography variant={"h5"}>
            Copy a URL that links to an amazon product you would like to track,
            Paste it into the the text box on the navigation bar and hit submit.
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          maxWidth: "40%",
          padding: 10,
          flexGrow: 1,
          zIndex: 1,
          " @media screen and (max-width: 650px)": {
            maxWidth: "100%",
            padding: 0,
          },
        }}
      >
        <Card
          raised
          sx={{
            minHeight: 300,
            minWidth: 300,
          }}
        >
          <CardContent>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title={truncate(list[activeStep].productname)}
              subheader={
                list[activeStep].some_datetime ? (
                  <Typography>{`Date product was added : ${list[
                    activeStep
                  ].some_datetime.slice(0, 10)}`}</Typography>
                ) : (
                  ""
                )
              }
            />
            <br />
            <Typography variant="h5" component="div" sx={{ ml: "3%" }}>
              {`Current Price:    $ ${list[activeStep].itemprice}`}
            </Typography>

            <CardActions>
              <Button onClick={() => handleProductLink(list[activeStep].url)}>
                Link To Page
              </Button>
              <Button
                onClick={() =>
                  handleAnalytics(list[activeStep], { open: true })
                }
              >
                Show Analytics
              </Button>
              <Button onClick={() => handleDelete(list[activeStep].url)}>
                <DeleteIcon />
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <br></br>

        <MobileStepper
          variant="text"
          steps={maxList}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxList - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <AnalyticDialog item={item} open={open} setOpen={setOpen} />
        <DeleteAlert open={openSnack} setOpenSnack={setOpenSnack} id={id} />
      </Box>
    </Stack>
  );
}

export default AmazonPriceTracker;
