import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducer';
import TaskManager from './components/TaskManager';

const store = createStore(taskReducer);

function App() {
    return (
        <Provider store={store}>
            <TaskManager />
        </Provider>
    );
}

export default App;
