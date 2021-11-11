import { Button, TextField, List, ListItem, ListItemText, ButtonGroup } from "@material-ui/core"
import AppContext from '../../Context/AppContext';
import { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import DeleteForever from "@material-ui/icons/DeleteForever";
import '../../App.css';







function MyFavoritesList() {
  const { listName, setListName } = useContext(AppContext);
  const [list, setList] = React.useState([]);
  const [render, setRender] = React.useState({ render: true });


  const handleChange = (e) => {
    setListName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let bodyObject = { 'listname': listName }


    fetch(`http://localhost:3001/addlist`, {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },
      body: JSON.stringify(bodyObject)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.message === 'successfully added new entry to database') {
          alert(`${result.message}`)
          setRender({
            ...render,
            render: true

          })

        }
      })


  }


  useEffect(() => {
    fetch('http://localhost:3001/getlist', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },

    })
      .then(response => response.json())
      .then(res => res.map(res => res.listname))
      .then(result => {
        setList(result)
      })
  }, [render])

  const handleDelete = (e) => {
    let bodyObject = { 'listname': e }
    console.log(bodyObject)
    fetch('http://localhost:3001/deletelist', {
      credentials: 'include',
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },
      body: JSON.stringify(bodyObject)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setRender({
          ...render,
          render: true

        })
      })
  }



  return (
    <div>
      <form className="createList">
        <label>Create list</label>
        <div></div>
        <TextField className="loginText" label="List Name (i.e: Favorite movies )" value={listName} onChange={handleChange} variant="outlined" style={{ width: 500, marginRight: 50 }} />
        <Button className="addList" onClick={handleSubmit} style={{ height: 50 }}>Add List</Button>
        <div></div>


        <List>
          {list.map(item => {
            console.log(`test ${item}`)
            return (< div className="listBox" >
              <ListItem button key={item} component={Link} to={'/createList'} >
                <ListItemText primary={item} />


              </ListItem>

              <ButtonGroup><Button onClick={() => handleDelete(item)} ><DeleteForever /></Button></ButtonGroup>

            </div>)
          }
          )}
        </List>

      </form>

    </div >
  )
}


export default MyFavoritesList