import React, { createContext, useEffect, useContext, useState } from 'react';
import { node } from 'prop-types';
import { getDefaultTaskState } from '../../../utils';

const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.tasks) || []);
  const [taskObj, setTaskObj] = useState(getDefaultTaskState());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [JSON.parse(JSON.stringify(tasks))]);

  const taskDeleteHandler = (id) => {
    console.log('clicked');
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskEditHandler = (id) => {
    const targetTask = tasks.find((task) => task.id === id);
    setTaskObj(targetTask);
  };

  const providerObj = {
    tasks,
    setTasks,
    taskDeleteHandler,
    taskEditHandler,
    taskObj,
    setTaskObj
  };
  return <AppContext.Provider value={providerObj}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: node
};

export default AppProvider;
