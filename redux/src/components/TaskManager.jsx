import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask } from '../actions';
import './style.css'

const TaskManager = () => {
    const [newTask, setNewTask] = useState('');
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
    const dispatch = useDispatch();

    const handleAddClick = () => {
        if(newTask.length>0){
            dispatch(addTask({ task: newTask, id: Date.now() }));
            setNewTask('');
        }
    };

    const handleDeleteClick = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleEditClick = (taskId) => {
        setEditId(taskId);
        setEditValue(tasks.find(task => task.id === taskId).task);
    };

    const handleSaveClick = (taskId) => {
        dispatch(editTask(taskId, { task: editValue }));
        setEditId(null);
        setEditValue('');
    };

    const tasks = useSelector(state => state.tasks);

    return (
        <div className='task-manager'>
            <div className="cnt1">
                <input
                    autoFocus
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="Add new task"
                />
                <button onClick={handleAddClick}>Add</button>
            </div>
            <div className="tasks">
                {
                    tasks.length > 0?
                    tasks.map(task => (
                        <div className="task">
                            <div className='info'>
                                <p key={task.id}>
                                    {editId === task.id ? (
                                        <div className='save-area' >
                                            <input
                                            autoFocus
                                                id='save-npt'
                                                value={editValue}
                                                onChange={e => setEditValue(e.target.value)}
                                            />
                                            <button
                                                id='save-btn'
                                                onClick={() => handleSaveClick(task.id)}>
                                                Save
                                            </button>
                                        </div>
                                    ) : (
                                        task.task
                                    )}
                                </p>
                            </div>
                            <div className='btns'>
                                <button id='update' onClick={() => handleEditClick(task.id)}>
                                    Edit
                                </button>
                                <button id='del' onClick={() => handleDeleteClick(task.id)}>
                                    Del
                                </button>
                            </div>
                        </div>
                    )):
                    <h1>No tasks yet</h1>
                }
                
            </div>
        </div>
    );
};

export default TaskManager;
