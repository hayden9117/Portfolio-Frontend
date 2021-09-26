import { Button, TextField, List, ListItem, ListItemText, ButtonGroup } from "@material-ui/core"
import AppContext from '../../Context/AppContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import DeleteForever from "@material-ui/icons/DeleteForever";
import '../../App.css';







function MyFavoritesList() {
  const { listName, setListName } = useContext(AppContext);
  const [list, setList] = React.useState([]);


  const handleChange = (e) => {
    setListName(e.target.value)
  }
  const handleSubmit = () => {
    if (listName === "") {
      alert("no list added")
    } else {
      const newList = list.concat({ name: listName, id: uuidv4(), icon: <DeleteForever /> });

      setList(newList);
    }

  }

  const handleDelete = (e) => {
    const filteredList = list.filter(list => list.id !== e)
    setList(filteredList)
  }



  return (
    <div>
      <form className="createList">
        <label>Create list</label>
        <div></div>
        <TextField className="loginText" label="List Name (i.e: Favorite movies )" value={listName} onChange={handleChange} variant="outlined" style={{ width: 500, marginRight: 50 }} />
        <Button className="addList" onClick={handleSubmit} style={{ height: 50 }}>Add List</Button>
        <div></div>
        <Link to="/signup" >Don't have an account? click here to make one!</Link>

        <List>
          {list.map((item) =>

            <div className="listBox">
              <ListItem button key={item.id} component={Link} to={'/createList'} >
                <ListItemText primary={item.name} />


              </ListItem>

              <ButtonGroup><Button onClick={() => handleDelete(item.id)} >{item.icon}</Button></ButtonGroup>

            </div>

          )}
        </List>

      </form>
    </div>
  )
}

export default MyFavoritesList