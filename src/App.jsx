import { useState } from 'react'
import TodoList from './TodoList'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  )
}


export default App
