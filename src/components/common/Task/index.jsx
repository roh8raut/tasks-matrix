import React from 'react';
import { number, string, func } from 'prop-types';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import './Task.css';

const Task = ({ id, value, taskDeleteHandler, taskEditHandler }) => {
  return (
    <li className="task-list flex justify-between" key={id}>
      {value}
      <div>
        <MdDelete className="cursor-pointer" onClick={() => taskDeleteHandler(id)} />
        <MdModeEdit className="cursor-pointer" onClick={() => taskEditHandler(id)} />
      </div>
    </li>
  );
};

Task.propTypes = {
  id: number,
  value: string,
  taskDeleteHandler: func,
  taskEditHandler: func
};

export default Task;
