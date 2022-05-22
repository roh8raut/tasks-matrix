import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppContext } from '../context/App/AppProvider';
import { getDefaultTaskState } from '../../utils';
import RadioSection from './RadioSection';

import './AddTasksContainer.css';

const AddTasksContainer = (props) => {
  const { setTasks, taskObj, setTaskObj, tasks } = useAppContext();

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
      const tasksCopy = tasks.map((task) => {
        if (task.id === taskObj.id) {
          return taskObj;
        }
        return task;
      });

      if (tasksCopy.some((task) => task.id === taskObj.id)) {
        setTasks(tasksCopy);
      } else {
        setTasks((oldTasks) => [...oldTasks, taskObj]);
      }
      setTaskObj(getDefaultTaskState());
    }
  };
  return (
    <div className="flex">
      <ToastContainer />

      {/* ------------------------- Priority  ------------------------- */}
      <RadioSection
        taskObj={taskObj}
        checkBoxChangeHandler={checkBoxChangeHandler}
        variant="priority"
      />

      {/* //  ------------------------- Input  ------------------------- */}
      <input
        type="text"
        className="input-bar flex-1"
        value={taskObj.name}
        onChange={(e) => setTaskObj({ ...taskObj, name: e.target.value })}
      />
      <button type="button" className="add-task-btn" onClick={addClickHandler}>
        Add
      </button>

      {/*  ------------------------- Type  ------------------------- */}
      <RadioSection
        taskObj={taskObj}
        checkBoxChangeHandler={checkBoxChangeHandler}
        variant="type"
      />
    </div>
  );
};

AddTasksContainer.propTypes = {};

export default AddTasksContainer;
