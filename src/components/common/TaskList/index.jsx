import React from 'react';
import { number, string, func } from 'prop-types';
import { MdDelete } from 'react-icons/md';
import './TaskList.css';

const TaskList = ({ id, value, taskDeleteHandler }) => {
  return (
    <li className="task-list flex justify-between" key={id}>
      {value}
      <MdDelete onClick={() => taskDeleteHandler(id)} />
    </li>
  );
};

TaskList.propTypes = {
  id: number,
  value: string,
  taskDeleteHandler: func
};

export default TaskList;
