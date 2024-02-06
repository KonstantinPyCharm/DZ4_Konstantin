import React, { useState } from 'react';
import classes from './todo.module.css';
import Button from '../button/Button';

const Todo = ({ task, handleDelete, index, handleDone }) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleCompleted = () => {
    setCompleted(!completed);
    if (typeof handleDone === 'function') {
      handleDone(task.id);
    }
  };

  const todoClasses = `${classes.todo} ${completed ? classes.completed : ''}`;

  return (
    <div className={todoClasses}>
      <p>{index + 1} {task.task}</p>
      <Button action={toggleCompleted} text={'Done'} />
      <Button action={() => handleDelete(task.id)} text={'Delete'} />
    </div>
  );
};

export default Todo;