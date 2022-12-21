import React, { useState } from "react";
import { Box, Container, ListItem, ListItemText } from "@mui/material";
import { FormInput } from "./FormInput";
import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export const FourthStack = () => {
    
    const stack4 = [
		{
			id: 0,
			title: "FIFA",
		},
		{
			id: 1,
			title: "India",
		},
		{
			id: 2,
			title: "Hockey",
		},
		{
			id: 3,
			title: "Kabbadi",
		}
	]

	const [stk4, setStk4] = useState(stack4);
    const [query, setQuery] = React.useState("")
    const [todo, setTodo] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteStk4 = (id) => {

		console.log('id:', id);

		let stack = stk4.filter( (elm) => elm.id !== id);
		console.log(stack);
		setStk4(stack);
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
                { stk4 &&
                    stk4.map((item, index) => {
                        return (
                            
                            <ListItem 
                            style={{
                                backgroundColor: 'lightgrey',
                                padding: '1rem',
                                margin:'1rem'
                            }}
                            >
                                <ListItemText primary={item.title}
                            />
                            <button
                            style={{
                                backgroundColor: 'lightgrey',
                                border: 'none'
                            }}
                            onClick={ () => deleteStk4(item.id) }
                            >╳</button>
                            </ListItem>
                        );
                    })}
                </Box>
                <Box>
                {todo.map((item) => 
                    <ListItem 
                    style={{
                        backgroundColor: 'lightgrey',
                                padding: '1rem',
                                margin:'1rem'
                    }}>
                        <ListItemText>{item.title}</ListItemText>
                    <button
                            style={{
                                backgroundColor: 'lightgrey',
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
