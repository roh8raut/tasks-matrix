import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const taskDeleteHandler = (id) => {
    console.log('clicked');
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const providerObj = {
    tasks,
    setTasks,
    taskDeleteHandler
  };
  return <AppContext.Provider value={providerObj}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: node
};

export default AppProvider;
