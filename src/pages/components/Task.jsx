import { FaRegCheckCircle } from 'react-icons/fa';

import styles from '../styles/todo.module.css';

const Task = ({ task, onDelete }) => {
  return (
    <div className={styles.taskcontainer}>
      <h4>
        {task.text}{' '}
        <FaRegCheckCircle
          style={{ color: 'green', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h4>
      {/* <p>{task.id}</p> */}
    </div>
  );
};

export default Task;
