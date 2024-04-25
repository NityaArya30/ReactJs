import { useState , useEffect } from 'react'
import { ToDoProvider } from './contexts'
import './App.css'

function App() {
  //todos arr h jisme bht sari values aaengi
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    //purani sari values chiye nyi k sath, spread operator se
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    //prevTodo h hr ek arr ki id aur simple id h updateTodo ki
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

     //same h dono upar neeche vle
  //   prev.map((eachVal) => {
  //     if (eachVal.id === id) {
  //       //todos ko as it is rhne do 
  //       todo
  //     } else {
  //       prevTodo
  //     }
  //   })

  const deleteTodo = (id) => {
    //jo todo match nhi krega id se vo ajaega jo krega vo vhi rh jaega add ni hoega
    setTodos((prev) => prev.filter((todo) => todo.id != id))
  }

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
}

useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))  //parse sb kuch js m convert
      if (todos && todos.length() > 0) {
        setTodos(todos)
      }
}, [])

useEffect(() =>{
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
