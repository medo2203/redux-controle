// reducer.js

const initialState = {
    tasks: []
};

export default function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.taskId) {
                        return {
                            ...task,
                            ...action.task
                        };
                    } else {
                        return task;
                    }
                })
            };
        default:
            return state;
    }
}
