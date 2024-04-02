import { MdOutlineDateRange } from "react-icons/md";
import { FaRegCircleXmark } from "react-icons/fa6";
import React, { useState } from 'react';

// Task object structure
const initialTask = {
    id: '',
    title: '',
    description: '',
    startDate: new Date().toLocaleDateString(),
    endDate: '',
    status: 'Pending',
    assignee: '',
    priority: 'P1',
};

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState(initialTask);
    const [assignee, setAssignee] = useState('');
    const [date, setDate] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.title.trim() || !task.description.trim()) return;
        // Set the status to 'Assigned'
        const newTask = { ...task, status: 'Assigned' };
        addTask(newTask);
        setTask(initialTask);
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handlePriorityChange = (priority) => {
        setTask({ ...task, priority }); // Set the priority
    };

    return (
        <div className="first">
            <div className="All-buttons">
                <div className="button-left">
                    <div><h2>Filter By:</h2></div>
                    <div className="button-left-two">
                    <div className="dropdown">
                    
                        <input
                            type="text"
                            placeholder="Assignee Name"
                            value={assignee}
                            onChange={(e) => setAssignee(e.target.value)}
                        />
                    </div>
                    <div className="dropdown">
                        <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Priority
                        </a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">P0</a></li>
                            <li><a className="dropdown-item" href="#">P1</a></li>
                            <li><a className="dropdown-item" href="#">P2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <input
                                type="date"
                                placeholder="DD/MM/YYYY - DD/MM/YYYY"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <MdOutlineDateRange />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="button-right">
                    <div className="dropdown">
                        <button
                            style={{ border: 'none', borderRadius: '6px', background: "#0056b3", color: 'white', padding: '0.3rem', width: '150px' }}
                            onClick={() => setShowModal(true)}
                        >
                            Add New Task
                        </button>
                    </div>
            </div>
            </div>
            <div className="button-left">
                <h2>Sort By:</h2>
                <div className="dropdown">
                    <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Priority
                    </a>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">P0</a></li>
                        <li><a className="dropdown-item" href="#">P1</a></li>
                        <li><a className="dropdown-item" href="#">P2</a></li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            {showModal && (
                <div className="modal-container">
                    <div className="modal-content">
                        <div className='note' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h2>CREATE A TASK</h2>
                            <FaRegCircleXmark onClick={() => setShowModal(false)} />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="create-task">
                                    <label style={{ minWidth: '100px' }}>Title:</label>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={task.title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="create-task">
                                    <label style={{ minWidth: '100px' }}>Description:</label>
                                    {/* <input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        value={task.description}
                                        onChange={handleInputChange}
                                    /> */}
                                     <textarea
                                    type='text'
                                    style={{height: '100px', padding: '5px',borderRadius: '5px',background: 'none'}}
                                        placeholder="Description"
                                        value={task.description}
                                        onChange={(e) => handleInputChange({ target: { name: 'description', value: e.target.value } })}
                                    />
                                </div>
                                <div className="create-task">
                                    <label style={{ minWidth: '100px' }}>Team:</label>
                                    <input
                                        type="text"
                                        name="team"
                                        placeholder="Team"
                                        value={task.team}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="create-task">
                                    <label style={{ minWidth: '100px' }}>Assignees:</label>
                                    <input
                                        type="text"
                                        name="assignees"
                                        placeholder="Assignees"
                                        value={task.assignees}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="dropdown create-task">
                                    <label style={{ minWidth: '100px' }}>Priority:</label>
                                    <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {task.priority}
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" onClick={() => handlePriorityChange('P0')}>P0</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => handlePriorityChange('P1')}>P1</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => handlePriorityChange('P2')}>P2</a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="text-center">
                                    <button className='btn btn-primary mx-2 my-2' type="submit" onClick={handleSubmit}>Submit</button>
                                    <button className='btn btn-danger mx-2 my-2' onClick={() => setShowModal(false)}>Close</button>
                            </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskForm;
