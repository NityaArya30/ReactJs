import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
      todos: [{id:1, text: "Hello World"}]
}

// function sayHello() {
//     console.log("Hello World");
// }

export const todoSlice = createSlice({
      name: "todo",
      initialState,
     // reducers m property aur function aate hein
      reducers: {
        //sayhello ko refrence dia h
       // addTodo: sayHello,

       //direct yha bhi likh skte hein
       addTodo: (state, action) => {
        const todo ={
        id:nanoid(), 
        text: action.payload
    }
    state.todos.push(todo);
       },
       //state k andr jp bhi values ho sb ajaengi aur action k andr vo values milengi jo humne pass ki h like delete/add todo
       removeTodo: (state, action) => {
        state.todos=state.todos.filter((todo) => todo.id !== action.payload);//jo match krenge vo milenge
       },


       updateTodo: (state, action) => {
        state.todos= state.todos.map((todo) => 
            todo === action.payload ? {id, text:action.payload.text} : todo)}
       }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
