import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from "../store/features/todo/todoSlice";

function Todos() {
  const todos = useSelector(state => state.todos.todos);
  
  const dispatch = useDispatch();

  const todoListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const todoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  };

  const todoTextStyle = {
    flex: 1,
    marginRight: '8px',
  };

  const removeButtonStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '4px 8px',
    cursor: 'pointer',
  };

  return (
    <div>
      <div>Todos</div>
      <ul style={todoListStyle}>
        {  
            todos.map((todo) => (
          <li key={todo.id} style={todoItemStyle}>
            <span style={todoTextStyle}>{todo.text}</span>
            <button style={removeButtonStyle} onClick={() => dispatch(removeTodo(todo.id))}>
              X
            </button>
            <button style={removeButtonStyle} onClick={() => dispatch(removeTodo(todo.id))}>
            U
          </button>
            </li>
        
        ))}
      </ul>
    </div>
  );
}

export default Todos;