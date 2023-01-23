import style from '../Components/NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'

export default function NewTask({
  newtask,
  setNewTask,
  tasks,
  setTasks,
  count,
  setCount
}: {
  newtask: string
  setNewTask: Function
  tasks: Array<string>
  setTasks: Function
  count: number
  setCount: Function
}) {
  const [task, setTask] = useState('')

  function saveTask() {
    setNewTask(task)
    save(newtask)
    setCount(count + 1)
    setTask('')
  }

  function save(task: string) {
    sessionStorage.setItem('Task', JSON.stringify(task))
    saveArrayTask()
  }

  function saveArrayTask() {
    setTasks([...tasks, task])
  }

  return (
    <div className={style.newtask}>
      <input
        className={style.input}
        onChange={e => setTask(e.target.value)}
        value={task}
      ></input>
      <button className={style.button} onClick={saveTask}>
        Criar <PlusCircle size={15} />
      </button>
    </div>
  )
}
