import { useContext, useState } from 'react';
import AppContext from '../../../Context/AppContext';
import { Box, Button, Card, CardActions, CardContent, Typography, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import DeleteForever from "@material-ui/icons/DeleteForever";








function CreateList() {
    const { listName, setListName } = useContext(AppContext);
    const [list, setList] = useState([]);


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
        <form className="createList">
            <label>Create list</label>
            <div></div>
            <TextField className="loginText" label="List Name (i.e: Favorite movies )" value={listName} onChange={handleChange} variant="outlined" style={{ width: 500, marginRight: 50 }} />
            <Button className="addList" onClick={handleSubmit} style={{ height: 50 }}>Add List</Button>
            <div></div>

            <Box component="span"
                m={10}
                pt={10}
                sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
                {list.map((item) =>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.name}
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => handleDelete(item.id)} >{item.icon}</Button>
                        </CardActions>
                    </Card>
                )}
            </Box>
        </form>
    )
}

export default CreateList