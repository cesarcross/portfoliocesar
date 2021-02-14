import { useState, useEffect } from 'react';

import styles from '../styles/todo.module.css';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  console.log(text);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text });

    setText('');
  };

  return (
    <form onSubmit={onSubmit} className={styles.formcontainer}>
      <label>Adicionar tarefa </label>
      <div className={styles.addtask}>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input type='submit' value='Save Task' />
      </div>
    </form>
  );
};

export default AddTask;
