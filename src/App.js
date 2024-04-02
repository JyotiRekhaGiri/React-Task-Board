import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { FaUser } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => { // Update deleteTask function to accept taskTitle
    setTasks(tasks.filter(task => task.id !== taskId));
    // Now you can access the taskTitle here and pass it to the TaskList component
    // console.log("Deleted task with title:", taskTitle);
  };

  return (
    <div className="app">
      <div className="header">
        <h1 style={{ fontSize: '26px', fontWeight: '700' }}>Task Board</h1>
        <div className="user-icon">
          <FaUser />
        </div>
      </div>
      <div className='containerone'>
        <TaskForm addTask={addTask} />
        {/* TaskList component should not receive taskTitle prop unless a specific task is being deleted */}
        <TaskList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask}  />
      </div>
    </div>
  );
};

export default App;
