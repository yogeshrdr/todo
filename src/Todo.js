import {  Button, List, ListItem,  ListItemText, Modal } from '@material-ui/core';
import React, {useState} from 'react';
import "./Todo.css";
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: "relative",
      left: 400,
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  
    button: {
      width: 150,
      margin: "10px",
    },
  }));

function Todo(props) {

    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () =>{
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})

        setOpen(false);  
        setInput(); 
    }

    return (
        <>
        <Modal open={open} onClose={ e => setOpen(false) }>
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value) } />
                <button onClick={updateTodo}>Update</button>
            </div>
        </Modal>

        <List>
            <ListItem className="todoList">
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline">
                </ListItemText>
            </ListItem>
            <button onClick={ e => setOpen(true)}>Edit</button>
            <Button  onClick={(Event) =>db.collection("todos").doc(props.todo.id).delete() } startIcon={<DeleteIcon />}></Button>
        </List>

        </>
    )
}

export default Todo

