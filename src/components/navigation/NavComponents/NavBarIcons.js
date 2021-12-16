import HouseRounded from '@material-ui/icons/HouseRounded.js'
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { List } from '@material-ui/core';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
function IconsArray () {
const icons = [
    {
      id: 0,
      Icon: HouseRounded,
      text: "Home"
      
    },
    {
      id: 1,
      Icon: ContactsOutlinedIcon,
      text: 'My Favorites Lists'
   
    },
    {
      id: 2,
      Icon: InboxIcon,
      text: 'Send Favorites list'
    },
  ];
  return (
<List>
            {icons.map((array) => {
              let path = array.text.replace(/ /g, '');
              return (
                <ListItem button key={array.text} component={Link} to={path}>
                  <ListItemIcon ><array.Icon/></ListItemIcon>
                  <ListItemText primary={array.text} />
                </ListItem>
              )
            })}
          </List>

  )
}

export default IconsArray