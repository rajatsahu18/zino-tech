import React from "react"

function FormInput({query, handleChange, handleAdd }) {
    
    return (
        <div style={{ border: '1px solid black', padding: '5rem', background:'white', position:'absolute', top: '30%', left: '38%' }} >
            <input
                style={{ padding:'1rem', marginRight:'1rem' }}
                type="text" 
                value = {query} 
                onChange = {handleChange} 
                placeholder = "Add Todo" />
            <button style={{ padding:'1rem' }} onClick = {handleAdd} >ADD</button>
        </div>
    )
}

export {FormInput}