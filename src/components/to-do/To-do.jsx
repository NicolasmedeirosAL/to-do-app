import { useState, useEffect } from 'react'
import style from './to-do.module.css'

const ToDoApp = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

const addTask =() => {
 if(newTask.trim() !== ''){
  setTasks([...tasks, newTask])
  setNewTask('')
 }
}

  const completeTask = index => {
    const updatedTasks = [...tasks]
    const task = updatedTasks[index]
    if (!task.includes('✔️')) updatedTasks[index] = `${task}✔️`
    setTasks(updatedTasks)
  }

  const removeTask = index => {
    const updatedTask = [...tasks]
    updatedTask.splice(index, 1)
    setTasks(updatedTask)
  }

  useEffect(() => {
    const confirmExit = e => {
      if (tasks.length >= 1) {
        e.preventDefault()
        e.returnValue = ' '
      }
    }
    window.addEventListener('beforeunload', confirmExit)
    return () => {
      window.removeEventListener('beforeunload', confirmExit)
    }
  },[tasks.length])

  return (
    <div className={style.todoApp}>
      <div className={style.todoContainer}>
        <h1>minhas-tarefas</h1>
        <span>To-Do</span>
        <div className={style.todoInput}>
          <input
            type="text"
            placeholder="adicionar tarefa"
            maxLength="40"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Enviar </button>
        </div>

        <div className={style.todoList}>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}

                <div>
                  <button onClick={() => completeTask(index)}>Feito</button>
                  <button onClick={() => removeTask(index)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToDoApp
