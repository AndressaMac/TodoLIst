import style from '../Components/Task.module.css'
import { ListChecks, Trash } from 'phosphor-react'
import React, { useState, useEffect } from 'react'

export default function Task({
  tasks,
  setTasks,
  count,
  setCount
}: {
  tasks: Array<string>
  setTasks: Function
  count: number
  setCount: Function
}) {
  const [checked, setChecked] = useState<Array<boolean>>([])

  useEffect(() => {
    if (checked.length === 0) {
      const checks = [].fill(false, tasks.length)
      setChecked(checks)
    } else {
      setChecked([...checked, false])
    }
  }, [tasks])

  const handleChange = (index: number) => {
    let checks = [...checked]
    checks[index] = !checks[index]
    setChecked([...checks])
  }

  function deleteTask(TaskDeleted: any) {
    const TaskWithoutDeleteOne = tasks.filter(task => {
      return task != TaskDeleted
    })
    setTasks([...TaskWithoutDeleteOne])
    setCount(count - 1)
  }

  return (
    <div className={style.contentTask}>
      <div className={style.taskNumbers}>
        <strong className={style.nameNumbers}>Tarefas criadas <span className={style.number}>{count}</span></strong>
        <strong className={style.nameNumbers}>
           Concluídas <span className={style.number}> {checked.filter(check => check).length} de {count}</span>
        </strong>
      </div>
      <div>
        <div>
          {tasks.map((task: string, index) => (
            <div key={index} className={style.boxItem}>
              <input
                id={`checkbox-${index}`}
                className={style.input}
                type="checkbox"
                checked={checked[index]}
                onChange={() => handleChange(index)}
              ></input>

              <label htmlFor={`checkbox-${index}`} className={style.p}>
                {task}
              </label>
              <button className={style.button} onClick={() => deleteTask(task)}>
                <Trash size={24} />
              </button>
            </div>
          ))}
        </div>
        
          {tasks.length === 0 && (
            <>
            <div className={style.empty}>
              <ListChecks size={40} />
              <strong> Você ainda não tem tarefas cadastradas</strong>
              <span> Crie tarefas e organize seus itens a fazer</span>
              </div>
            </>
          )}
        
      </div>
    </div>
  )
}
