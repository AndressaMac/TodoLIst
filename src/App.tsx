import reactLogo from './assets/react.svg'
import './global.css'
import Header from './Components/Header'
import NewTask from './Components/NewTask'
import Task from './Components/Task'
import style from './App.module.css'
import React, { useState } from 'react'

function App() {
  const [newtask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [count, setCount] =useState(0)

  return (
    <div className={style.app}>
      <Header />
      <div className={style.appTask}>
      <NewTask newtask={newtask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks} count={count} setCount={setCount} />
      <Task  tasks={tasks} setTasks={setTasks} count={count} setCount={setCount} />
      </div>
    </div>
  )
}
  
export default App
