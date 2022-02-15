import HouseRounded from "@material-ui/icons/HouseRounded.js";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

function IconsArray() {
  const icons = [
    {
      id: 0,
      Icon: HouseRounded,
      text: "Home",
      link: "",
    },
    {
      id: 1,
      Icon: ContactsOutlinedIcon,
      text: "List Share",
      link: "listshare",
    },
  ];
  return (
    <List>
      {icons.map((array) => {
        let path = array.link.replace(/ /g, "");
        return (
          <ListItem button key={array.text} component={Link} to={path}>
            <ListItemIcon>
              <array.Icon />
            </ListItemIcon>
            <ListItemText primary={array.text} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default IconsArray;
