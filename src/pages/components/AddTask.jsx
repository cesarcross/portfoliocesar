import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

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
    <form onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;
