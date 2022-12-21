import React, { useState } from "react";
import { Box, Container, ListItem, ListItemText } from "@mui/material";
import { FormInput } from "./FormInput";
import { v4 as uuid } from 'uuid'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export const FirstStack = () => {

    const stack1 = [
		{
			id: 0,
			title: "Ball",
		},
		{
			id: 1,
			title: "Bat",
		},
		{
			id: 2,
			title: "Tennis",
		},
		{
			id: 3,
			title: "Coffee",
		},
		{
			id: 4,
			title: "Hats",
		}
	];

    const [stk1, setStk1] = useState(stack1);
    const [query, setQuery] = React.useState("")
    const [todo, setTodo] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteStk1 = (id) => {

		console.log('id:', id);

		let stack = stk1.filter( (elm) => elm.id !== id);
		console.log(stack);
		setStk1(stack);
	}

    const handleChange = (e) => {
        const {value} = e.target
        setQuery(value)
    }

    const handleAdd = () => {
        const payload = {
            id: uuid(),
            title: query,
            status: false
        }

        const updatedTodo = [...todo, payload]
        setTodo(updatedTodo)
        setQuery("")
    }
    const handleDelete = (id) => {
        const updatedTodo = todo.filter((item) => item.id !== id)
        setTodo(updatedTodo)
    }


  return (
    <Container maxWidth="sm" display="flex">
        <Button onClick={handleOpen}>ADD</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormInput query = {query}
                handleChange = {handleChange}
                handleAdd = {handleAdd}
             />
    </Modal>
						
            <Box>
                { stk1 &&
                    stk1.map((item, index) => {
                        return (
                            
                            <ListItem 
                            style={{
                                backgroundColor: 'pink',
                                padding: '1rem',
                                margin:'1rem'
                            }}
                            >
                                <ListItemText primary={item.title}
                            />
                            <button
                            style={{
                                backgroundColor: 'pink',
                                border: 'none'
                            }}
                            onClick={ () => deleteStk1(item.id) }
                            >╳</button>
                            </ListItem>
                        );
                    })}
                </Box>
                <Box>
                {todo.map((item) => 
                    <ListItem 
                    style={{
                        backgroundColor: 'pink',
                                padding: '1rem',
                                margin:'1rem'
                    }}>
                        <ListItemText>{item.title}</ListItemText>
                    <button
                            style={{
                                backgroundColor: 'pink',
                                border: 'none'
                            }}
                            onClick={ () => handleDelete(item.id) }
                            >╳</button>

                    </ListItem>
                )}
            </Box>
					
			</Container>
  )
}
