import { Button, Snackbar } from "@mui/material";
import { postFeedBack } from "../../api/api";

export const FeedBackAlert = (props) => {
  const { open, setOpenSnack, subject, body } = props;

  const handleAlert = (prop) => {
    if (prop) {
      postFeedBack(subject, body);
      setOpenSnack(false);
    } else {
      setOpenSnack(false);
    }
  };
  return (
    <>
      <Snackbar
        open={open}
        message="submit feedback ?"
        action={
          <>
            {" "}
            <Button variant="contained" onClick={() => handleAlert(true)}>
              yes
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 2 }}
              onClick={() => handleAlert(false)}
            >
              no
            </Button>
          </>
        }
      ></Snackbar>
    </>
  );
};
