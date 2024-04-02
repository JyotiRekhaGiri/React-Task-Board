import React, { useState } from 'react';
import { IoMdMore } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";

const TaskList = ({ tasks, deleteTask, taskTitle, setTasks }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showOptions, setShowOptions] = useState(null); // Define showOptions state
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState(null); // Define editedTask state

  const handleEditClick = (taskId) => {
    setShowEditModal(true);
    setSelectedTaskId(taskId);
    // Logic to set editedTask based on taskId
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditedTask(taskToEdit);
  };

  const handleDeleteClick = (taskId) => {
    setShowDeleteModal(true);
    setSelectedTaskId(taskId);
  };

  const handleDropdownClick = (taskId) => {
    setShowOptions(showOptions === taskId ? null : taskId);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
    setEditedTask(null);
  };

  const handlePriorityChange = (priority) => {
    setEditedTask({ ...editedTask, priority });
  };

  const handleStatusChange = (status) => {
    setEditedTask({ ...editedTask, status });
  };


  const handleSaveEdit = () => {
    const updatedTasks = tasks.map(task =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setShowEditModal(false);
    setEditedTask(null);

    // Update container based on status
    const editedTaskStatus = editedTask.status;
    if (editedTaskStatus !== 'Assigned') {
      const updatedTasks = tasks.filter(task => task.id !== editedTask.id);
      setTasks([...updatedTasks, editedTask]);
    }
  };

  const handleDeleteConfirm = () => {
    deleteTask(selectedTaskId);
    setShowDeleteModal(false);
  };

  const setShowModal = (value) => {
    // Logic to set showModal state
    // You need to implement the logic to set showModal state here
  };

  const task = editedTask || {}; // Define task variable

  return (
    <div className="containers">
      <div className="task-containers">
        <div className='task-container'>
          <div style={{ background: "#969090" }}>
            <h2>Pending</h2>
          </div>
          <div className='different'>
            {tasks.map(task => task.status === 'Assigned' && (
              <div className="container" key={task.id}>
                <div className="card-head">
                  <div className='title-priority'>
                    <h5>{task.title}</h5>
                    <button>{task.priority}</button>
                  </div>
                  <hr />
                  <div className='description-container'>
                    <p className='card-text'>{task.description}</p>
                  </div>
                  <div className='assignee-icon'>
                    <h5 className="card-title">{task.assignees}</h5>
                    <div className="">
                      <IoMdMore onClick={() => handleDropdownClick(task.id)} />
                      {showOptions === task.id && ( // Render options if showOptions matches taskId
                        <div className="options">
                          <button onClick={() => handleEditClick(task.id)}>Edit</button>
                          <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <a className="btn btn-primary my-2">{task.status}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='task-container'>
          <div style={{ background: "#ba7226" }}>
            <h2>In Progress</h2>
          </div>
          <div className='different'>
            {tasks.map(task => task.status === 'In Progress' && (
              <div className="container" key={task.id}>
                <div className="card-head">
                  <div className='title-priority'>
                    <h5>{task.title}</h5>
                    <button>{task.priority}</button>
                  </div>
                  <hr />
                  <div className='description-container'>
                    <p className='card-text'>{task.description}</p>
                  </div>
                  <div className='assignee-icon'>
                    <h5 className="card-title">{task.assignees}</h5>
                    <div className="">
                      <IoMdMore onClick={() => handleDropdownClick(task.id)} />
                      {showOptions === task.id && ( // Render options if showOptions matches taskId
                        <div className="options">
                          <button onClick={() => handleEditClick(task.id)}>Edit</button>
                          <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <a className="btn btn-primary my-2">{task.status}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='task-container'>
          <div style={{ background: "rgb(58, 199, 58)" }}>
            <h2 >Completed</h2>
          </div>
          <div className='different'>
            {tasks.map(task => task.status === 'Completed' && (
              <div className="container" key={task.id}>
                <div className="card-head">
                  <div className='title-priority'>
                    <h5>{task.title}</h5>
                    <button>{task.priority}</button>
                  </div>
                  <hr />
                  <div className='description-container'>
                    <p className='card-text'>{task.description}</p>
                  </div>
                  <div className='assignee-icon'>
                    <h5 className="card-title">{task.assignees}</h5>
                    <div className="">
                      <IoMdMore onClick={() => handleDropdownClick(task.id)} />
                      {showOptions === task.id && ( // Render options if showOptions matches taskId
                        <div className="options">
                          <button onClick={() => handleEditClick(task.id)}>Edit</button>
                          <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <a className="btn btn-primary my-2">{task.status}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='task-container'>
          <div style={{ background: "rgb(7, 7, 71)" }}>
            <h2>Deployed</h2>
          </div>
          <div className='different'>
            {tasks.map(task => task.status === 'Deployed' && (
              <div className="container" key={task.id}>
                <div className="card-head">
                  <div className='title-priority'>
                    <h5>{task.title}</h5>
                    <button>{task.priority}</button>
                  </div>
                  <hr />
                  <div className='description-container'>
                    <p className='card-text'>{task.description}</p>
                  </div>
                  <div className='assignee-icon'>
                    <h5 className="card-title">{task.assignees}</h5>
                    <div className="">
                      <IoMdMore onClick={() => handleDropdownClick(task.id)} />
                      {showOptions === task.id && ( // Render options if showOptions matches taskId
                        <div className="options">
                          <button onClick={() => handleEditClick(task.id)}>Edit</button>
                          <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <a className="btn btn-primary my-2">{task.status}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='task-container'>
          <div style={{ background: "rgb(182, 102, 102)" }}>
            <h2>Deffered</h2>
          </div>
          <div className='different'>
            {tasks.map(task => task.status === 'Differed' && (
              <div className="container" key={task.id}>
                <div className="card-head">
                  <div className='title-priority'>
                    <h5>{task.title}</h5>
                    <button>{task.priority}</button>
                  </div>
                  <hr />
                  <div className='description-container'>
                    <p className='card-text'>{task.description}</p>
                  </div>
                  <div className='assignee-icon'>
                    <h5 className="card-title">{task.assignees}</h5>
                    <div className="">
                      <IoMdMore onClick={() => handleDropdownClick(task.id)} />
                      {showOptions === task.id && ( // Render options if showOptions matches taskId
                        <div className="options">
                          <button onClick={() => handleEditClick(task.id)}>Edit</button>
                          <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <a className="btn btn-primary my-2">{task.status}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-container">
          <div className="modal-content">
            <div className='note' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2>EDIT TASK</h2>
              <FaRegCircleXmark onClick={handleCancelEdit} />
            </div>
            <div className="modal-body">
              <form>
                <div className="create-task">
                  <label style={{ minWidth: '100px' }}>Title:</label>
                  <input type="text" value={editedTask.title} readOnly />
                </div>
                <div className="create-task">
                  <label style={{ minWidth: '100px' }}>Description:</label>
                  <textarea value={editedTask.description} readOnly />
                </div>
                <div className="create-task">
                  <label style={{ minWidth: '100px' }}>Team:</label>
                  <input type="text" value={editedTask.team} readOnly />
                </div>
                <div className="create-task">
                  <label style={{ minWidth: '100px' }}>Assignees:</label>
                  <input type="text" value={editedTask.assignees} readOnly />
                </div>
                <div className="dropdown create-task">
                  <label style={{ minWidth: '100px' }}>Priority:</label>
                  {/* <div className="dropdown-toggle">{editedTask.priority}</div> */}
                  <div className="dropdown">
                    <a className="btn btn-light dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {editedTask.priority}
                    </a>

                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('P0')}>P0</a></li>
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('P1')}>P1</a></li>
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('P2')}>P2</a></li>
                    </ul>
                  </div>
                </div>
                <div className="dropdown create-task">
                  <label style={{ minWidth: '100px' }}>Status:</label>
                  <a className="btn btn-light dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {editedTask.status}
                    </a>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('Assigned')}>Assigned</a></li>
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('In Progress')}>In Progress</a></li>
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('Completed')}>Completed</a></li>
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('Deployed')}>Deployed</a></li>
                      <li><a className="dropdown-item" onClick={() => handleStatusChange('Deffered')}>Deffered</a></li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="text-center">
              <button className='btn btn-primary mx-2 my-2' onClick={handleSaveEdit}>Save</button>
              <button className='btn btn-danger mx-2 my-2' onClick={handleCancelEdit}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal-container">
          <div className="modal-content">
            <div className='note' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2>DELETE TASK</h2>
              <FaRegCircleXmark onClick={() => setShowModal(false)} />
            </div>
            <div className="modal-body">
              <p>Do you want to Delete Task</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p>{taskTitle}</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <button className='bg-primary mx-2 my-2' style={{ margin: '5px', border: 'none', borderRadius: "5px" }} onClick={handleDeleteConfirm}>Yes</button>
                  <button className='bg-danger mx-2 my-2' style={{ margin: '5px', border: 'none', borderRadius: "3px" }} onClick={() => setShowDeleteModal(false)}>No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
