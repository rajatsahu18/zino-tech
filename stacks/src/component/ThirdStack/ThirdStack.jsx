import React, { useState } from "react";
import { Box, Container, ListItem, ListItemText } from "@mui/material";
import { FormInput } from "./FormInput";
import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export const ThirdStack = () => {
    
    const stack3 = [
		{
			id: 0,
			title: "Worldcup",
		},
		{
			id: 1,
			title: "IPL",
		},
		{
			id: 2,
			title: "PKL",
		}
	]

    const [stk3, setStk3] = useState(stack3);
    const [query, setQuery] = React.useState("")
    const [todo, setTodo] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteStk3 = (id) => {

		console.log('id:', id);

		let stack = stk3.filter( (elm) => elm.id !== id);
		console.log(stack);
		setStk3(stack);
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
                { stk3 &&
                    stk3.map((item, index) => {
                        return (
                            
                            <ListItem 
                            style={{
                                backgroundColor: 'lightgreen',
                                padding: '1rem',
                                margin:'1rem'
                            }}
                            >
                                <ListItemText primary={item.title}
                            />
                            <button
                            style={{
                                backgroundColor: 'lightgreen',
                                border: 'none'
                            }}
                            onClick={ () => deleteStk3(item.id) }
                            >╳</button>
                            </ListItem>
                        );
                    })}
                </Box>
                <Box>
                {todo.map((item) => 
                    <ListItem 
                    style={{
                        backgroundColor: 'lightgreen',
                                padding: '1rem',
                                margin:'1rem'
                    }}>
                        <ListItemText>{item.title}</ListItemText>
                    <button
                            style={{
                                backgroundColor: 'lightgreen',
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
