import React from 'react';
import PropTypes from 'prop-types';
import './matrix.css';
import { useAppContext } from '../context/App/AppProvider';
import { TASKS_TYPES } from '../../constants';
import TaskList from '../common/TaskList';

const MatrixContainer = (props) => {
  const { tasks, taskDeleteHandler } = useAppContext();
  const U_I = tasks.filter(
    (task) => task.type === TASKS_TYPES.important && task.priority === TASKS_TYPES.urgent
  );
  const U_N_I = tasks.filter(
    (task) => task.type === TASKS_TYPES.not_important && task.priority === TASKS_TYPES.urgent
  );
  const N_U_I = tasks.filter(
    (task) => task.type === TASKS_TYPES.important && task.priority === TASKS_TYPES.not_urgent
  );
  const N_U_N_I = tasks.filter(
    (task) => task.type === TASKS_TYPES.not_important && task.priority === TASKS_TYPES.not_urgent
  );

  return (
    <div className="flex justify-center">
      <div className="matrix-container h-screen w-4/5 flex flex-col">
        <div className="top-layer flex h-12">
          <div className="basis-12" />
          <div className="flex-1 h-12">Urgent</div>
          <div className="flex-1 h-12">Not Urgent</div>
        </div>
        <div className="middle-layer flex flex-1">
          <div className="w-24 rotate-text">Important</div>
          <div className="square important-urgent">
            <ul>
              {U_I.map((task, index) => (
                <TaskList id={task.id} value={task.name} taskDeleteHandler={taskDeleteHandler} />
              ))}
            </ul>
          </div>
          <div className="square">
            <ul>
              {N_U_I.map((task, index) => (
                <TaskList id={task.id} value={task.name} taskDeleteHandler={taskDeleteHandler} />
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom-layer flex flex-1">
          <div className="w-24 rotate-text">Not Important</div>
          <div className="square">
            <ul>
              {U_N_I.map((task, index) => (
                <TaskList id={task.id} value={task.name} taskDeleteHandler={taskDeleteHandler} />
              ))}
            </ul>
          </div>
          <div className="square">
            <ul>
              {N_U_N_I.map((task, index) => (
                <TaskList id={task.id} value={task.name} taskDeleteHandler={taskDeleteHandler} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MatrixContainer.propTypes = {};

export default MatrixContainer;
