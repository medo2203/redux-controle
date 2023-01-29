// actions.js

export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
});

export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    taskId
});

export const editTask = (taskId, task) => ({
    type: 'EDIT_TASK',
    taskId,
    task
});
