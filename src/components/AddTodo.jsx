import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from "../store/features/todo/todoSlice"
function AddTodo() {
   const [input,setInput]=useState();
   const dispatch= useDispatch();
   
   const addTodoHandler=(e)=>{
      e.preventDefault(); 
      dispatch(addTodo(input));
      setInput('');
   }
    


    const inputStyle = {
        padding: '8px 12px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '200px',
      };
    
      const buttonStyle = {
        padding: '8px 16px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '8px',
      };
    

  return (
    <div>
      <form onSubmit={addTodoHandler} >
      <input type="text" style={inputStyle} 
      placeholder="Enter text"
       value={input}
       onChange={(e)=> setInput(e.target.value)}
      />
      <button style={buttonStyle}>Click me</button>
      </form>
    </div>
  )
}

export default AddTodo;
