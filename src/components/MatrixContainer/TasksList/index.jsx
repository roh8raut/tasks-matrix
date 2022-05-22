import React from 'react';
import { func, arrayOf, shape } from 'prop-types';
import Task from '../../common/Task';

const TasksList = ({ tasks, taskDeleteHandler, taskEditHandler }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          value={task.name}
          taskDeleteHandler={taskDeleteHandler}
          taskEditHandler={taskEditHandler}
        />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: arrayOf(shape({})),
  taskDeleteHandler: func,
  taskEditHandler: func
};

export default TasksList;
