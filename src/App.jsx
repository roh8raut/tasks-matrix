import React from 'react';
import MatrixContainer from './components/MatrixContainer';
import AddTasksContainer from './components/AddTasksContainer';
import Footer from './components/common/Footer';

import './App.css';
import AppProvider from './components/context/App/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App  flex-col max-w-6xl">
        <MatrixContainer />
        <AddTasksContainer type="text" />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
