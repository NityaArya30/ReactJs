import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
        id: 1,
        todo: "Todo msg",
        completed: false
        }
    ],
    //theme: dark
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(ToDoContext)
    //jb bhi useContext rkhoge to usme ek aur context dena padega
}

export const ToDoProvider = ToDoContext.Provider