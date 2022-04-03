import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import AnalyticDialog from "./analytics/analyticsDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteAlert } from "./Alert/deleteAlert";
import useToken from "../UseToken";
import { GetAmazonData, GetProductTimeData } from "../api/api";
import "./css/priceTracker.css";

function AmazonPriceTracker() {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [id, setId] = useState("");
  const [item, setItem] = useState({});
  const [timeData, setTimeData] = useState([]);
  const [list, setList] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let arr = [];
  const token = useToken();
  const handleProductLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const handleAnalytics = (props, bool) => {
    setOpen(bool.open);
    setItem(props);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleData = async () => {
    const response = await GetAmazonData();
    response.forEach((res) => {
      if (res.userID === token.token.token) {
        arr.push(res);
      }
      setList(arr);
    });
  };
  const handleTimeData = async () => {
    const response = await GetProductTimeData();
    response.forEach(() => {
      setTimeData(response);
    });
  };
  console.log(list);
  useEffect(() => {
    handleData();
    handleTimeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    setOpenSnack(true);
    setId(id);
  };

  const d = new Date();

  for (let i = 0; i < list.length; i++) {
    const week = [];
    const currentDay = week[d.getDay()];

    let graphPrice = list[i].itemprice;
    for (let j = 0; j < 7; j++) {
      var curr = new Date(); // get current date
      var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      var last = first + j; // last day is the first day + 6
      var currentWeek = new Date(curr.setDate(last)).toString().slice(0, 11);
      week.push(currentWeek);
    }

    list[i].data = [
      {
        id: 1,
        day: week[0],
        price: null,
      },
      {
        id: 2,
        day: week[1],
        price: null,
      },
      {
        id: 3,
        day: week[2],
        price: null,
      },
      {
        id: 4,
        day: week[3],
        price: null,
      },
      {
        id: 5,
        day: week[4],
        price: null,
      },
      {
        id: 6,
        day: week[5],
        price: null,
      },
      {
        id: 7,
        day: week[6],
        price: null,
      },
    ];

    // sets the current price of the product at the current day
    for (const day in list[i].data) {
      if (list[i].data[day].id === d.getDay() + 1) {
        list[i].data[day].price = graphPrice;
      }
    }
    for (let j = 0; j < timeData.length; j++) {
      if (list[i].url === timeData[j].url) {
        if (timeData !== undefined || timeData !== null) {
          let day = new Date(timeData[j].some_datetime);

          const daysUpdate = day.toString().slice(0, 11);

          timeData[j].daysToUpdate = daysUpdate;

          for (const day in list[i].data) {
            if (
              list[i].data[day].day === timeData[j].daysToUpdate &&
              list[i].data[day].day !== currentDay
            ) {
              list[i].data[day].price = timeData[j].itemprice;
            }
          }
        }
      }
    }
  }

  const truncate = (str) => {
    if (str.length > 50) {
      let newstr = `${str.slice(0, 50)}...`;
      return newstr;
    }
    return str;
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "550px",
        marginLeft: "5%",
        marginRight: "5%",
        mt: 20,
        zIndex: 2,
      }}
      overflow="scroll"
      justifyContent="start"
      alignItems={"center"}
    >
      <Stack
        spacing={3}
        direction="row"
        alignContent={"center"}
        overflow="scroll"
      >
        {list.map((item) => {
          return (
            <>
              <Card raised sx={{ minHeight: 300, minWidth: 300 }}>
                <CardContent>
                  <CardHeader
                    titleTypographyProps={{ variant: "h6" }}
                    title={truncate(item.productname)}
                    subheader={
                      item.some_datetime ? (
                        <Typography>{`Date product was added : ${item.some_datetime.slice(
                          0,
                          10
                        )}`}</Typography>
                      ) : (
                        ""
                      )
                    }
                  />
                  <br />
                  <Typography variant="h5" component="div">
                    {`Current Price:    $ ${item.itemprice}`}
                  </Typography>

                  <CardActions>
                    <Button onClick={() => handleProductLink(item.url)}>
                      Link To Page
                    </Button>
                    <Button
                      onClick={() => handleAnalytics(item, { open: true })}
                    >
                      Show Analytics
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.url)}
                      sx={{ alignSelf: "end" }}
                    >
                      <DeleteIcon />
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <br></br>
            </>
          );
        })}
      </Stack>

      <AnalyticDialog item={item} open={open} setOpen={setOpen} />
      <DeleteAlert open={openSnack} setOpenSnack={setOpenSnack} id={id} />
    </Box>
  );
}

export default AmazonPriceTracker;
