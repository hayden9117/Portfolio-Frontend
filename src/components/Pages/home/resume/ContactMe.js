import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  Tooltip,
  IconButton,
} from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import { FeedBackAlert } from "./alert/FeedBackAlert";

export default function ContactMe() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [subjectErr, setSubjectErr] = useState(false);
  const [bodyErr, setBodyErr] = useState(false);
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleGitHub = () => {
    const newWindow = window.open(
      "https://github.com/hayden9117?tab=repositories",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  const handleLinkedIn = () => {
    const newWindow = window.open(
      "https://www.linkedin.com/in/richie-hayden-7872641ba/",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };
  function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubjectErr(false);
    setBodyErr(false);

    if (!containsAnyLetter(subject)) {
      setSubjectErr(true);
    }
    if (!containsAnyLetter(body)) {
      setBodyErr(true);
    }
    if (subject.length > 0 && body.length > 0) {
      setOpenSnack(true);
    }
  };

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 600,
        width: "50%",
        alignSelf: "center",
        " @media screen and (max-width: 1150px)": {
          width: "80%",
        },
        " @media screen and (min-width: 1150px)": {
          alignSelf: "unsafe-center",
          width: "50%",
        },
      }}
    >
      <FormControl
        noValidate
        type="submit"
        autoComplete="off"
        sx={{ padding: 2 }}
      >
        <Box>
          <Typography variant="h4" padding={2}>
            Contact Me @
          </Typography>
          <Tooltip title="Link's to my GitHub">
            <IconButton color={"inherit"} onClick={handleGitHub} size="large">
              <GitHub fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Link's to my LinkedIn">
            <IconButton
              sx={{ p: 2 }}
              color={"inherit"}
              onClick={handleLinkedIn}
              size="large"
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="h4" padding={5}>
          Web Site Feedback
        </Typography>
        <TextField
          label="Subject"
          sx={{ mb: 5 }}
          value={subject}
          onChange={(e) => handleSubject(e)}
          error={subjectErr}
          required
        />
        <TextField
          label="Im always trying to improve, let me know how."
          variant={"outlined"}
          sx={{
            mb: 2,
          }}
          multiline
          rows={4}
          value={body}
          onChange={(e) => handleBody(e)}
          error={bodyErr}
          required
        />

        <Button
          type="submit"
          value={"post"}
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          Send
        </Button>
      </FormControl>
      <FeedBackAlert
        open={openSnack}
        setOpenSnack={setOpenSnack}
        body={body}
        subject={subject}
      />
    </Box>
  );
}
