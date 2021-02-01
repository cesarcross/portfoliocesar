import { Container } from './todo.style';
import { useState } from 'react';
import Button from '../components/Button';
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

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <h1>Lista de tarefas aqui</h1>
      <Button color='green' text='Add' />

      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks to show'
      )}
    </Container>
  );
}

export default ToDo;
