import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { TextField, Autocomplete } from "@mui/material";
import { careers } from "./allCareerData";
export default function JobSearch() {
  const [career, setCareer] = useState("");
  const [jobCode, setJobCode] = useState("");
  const [jobCodeList, setJobCodeList] = useState([]);
  const handleSubmit = () => {
    for (let i = 0; i < careers.length; i++) {
      if (careers[i].label === career) {
        setJobCode({ label: careers[i].label, id: careers[i].id });
        setJobCodeList((prev) => [careers[i].id, ...prev]);
      }
    }
  };
  console.log(jobCodeList);
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e);
    setCareer(e.target.outerText);
  };
  console.log(career);
  return (
    <Paper
      component="form"
      sx={{
        mt: 20,
        ml: 30,
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
    >
      <Autocomplete
        disablePortal
        id={(career) => careers.id}
        careerid={careers.id}
        options={careers}
        sx={{ width: 300 }}
        getOptionLabel={(careers) => careers.label}
        renderInput={(params) => <TextField {...params} label="Careers" />}
        onInputChange={(e) => handleChange(e)}
      />
      <IconButton sx={{ p: "10px" }} onClick={() => handleSubmit()}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
