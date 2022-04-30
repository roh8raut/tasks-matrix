import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import './AddTasksContainer.css';
import { useAppContext } from '../context/App/AppProvider';
import { TASKS_TYPES } from '../../constants';

const getDefaultState = () => ({
  priority: TASKS_TYPES.urgent,
  type: TASKS_TYPES.important,
  name: '',
  id: new Date().getTime()
});

const AddTasksContainer = (props) => {
  const [taskObj, setTaskObj] = useState(getDefaultState());

  const { setTasks } = useAppContext();

  const checkBoxChangeHandler = (value, key) => {
    setTaskObj({
      ...taskObj,
      [key]: value
    });
  };

  const addClickHandler = () => {
    if (!taskObj.name) {
      toast.error('Oopss :( Pls add the task.');
    } else {
      setTasks((oldTasks) => [...oldTasks, taskObj]);
      setTaskObj(getDefaultState());
    }
  };
  return (
    <div className="flex">
      <ToastContainer />
      {/* // Priority */}
      <fieldset>
        <legend>Urgent</legend>
        {console.log(taskObj.priority === TASKS_TYPES.urgent, taskObj.priority)}
        <div>
          <input
            type="radio"
            id={TASKS_TYPES.urgent}
            name={TASKS_TYPES.urgent}
            value={TASKS_TYPES.urgent}
            checked={taskObj.priority === TASKS_TYPES.urgent}
            onChange={(e) => checkBoxChangeHandler(e.target.value, 'priority')}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id={TASKS_TYPES.not_urgent}
            name={TASKS_TYPES.not_urgent}
            value={TASKS_TYPES.not_urgent}
            checked={taskObj.priority === TASKS_TYPES.not_urgent}
            onChange={(e) => checkBoxChangeHandler(e.target.value, 'priority')}
          />
          <label htmlFor="no">No</label>
        </div>
      </fieldset>

      {/* // Input */}

      <input
        type="text"
        className="input-bar flex-1"
        value={taskObj.name}
        onChange={(e) => setTaskObj({ ...taskObj, name: e.target.value })}
      />
      <button type="button" className="add-task-btn" onClick={addClickHandler}>
        Add
      </button>

      {/* // Type */}

      <fieldset>
        <legend>Important</legend>
        <div>
          <input
            type="radio"
            id={TASKS_TYPES.important}
            name={TASKS_TYPES.important}
            value={TASKS_TYPES.important}
            checked={taskObj.type === TASKS_TYPES.important}
            onChange={(e) => checkBoxChangeHandler(e.target.value, 'type')}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id={TASKS_TYPES.not_important}
            name={TASKS_TYPES.not_important}
            value={TASKS_TYPES.not_important}
            checked={taskObj.type === TASKS_TYPES.not_important}
            onChange={(e) => checkBoxChangeHandler(e.target.value, 'type')}
          />
          <label htmlFor="no">No</label>
        </div>
      </fieldset>
    </div>
  );
};

AddTasksContainer.propTypes = {};

export default AddTasksContainer;
