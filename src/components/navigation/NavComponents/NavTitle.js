import { Typography } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../../Context/AppContext";

function NavTitle(title) {
  const { navTitle, setNavTitle } = useContext(AppContext);
  setNavTitle(title);

  return (
    <NavTitle>
      <Typography>{navTitle}</Typography>
    </NavTitle>
  );
}

export default NavTitle;