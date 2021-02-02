// import { Container } from './todo.style';
// import Button from '../components/Button';
import { useState } from 'react';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

function ToDo() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dogwalker',
    },
    {
      id: 2,
      text: 'go to shopping',
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  // Save Task to LocalStorage

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Tarefas</h2>
      {/* <Button color='green' text='Add' /> */}
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default ToDo;
