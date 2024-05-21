import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
     todos:[],
}

// const initialState=[];


export const todoSlice = createSlice({
     name:'todos',
     initialState,
      reducers:{
         
          addTodo:(state,action)=>{
               const todo={
                    id:nanoid(),
                    text:action.payload
               }
               state.todos.push(todo)
          },

          removeTodo:(state,action)=>{
               if (!state) return initialState;
              state.todos= state.todos.filter((todo)=>
             todo.id!== action.payload
              )
          },
          updataTodo:(state,action)=>{
                
          }

      }  
})

export const {addTodo,removeTodo,updataTodo}=todoSlice.actions

export default todoSlice.reducer