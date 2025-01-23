// store.js
import { createStore } from 'redux';
import assignmentReducer from './reducers/reducer';

const Store = createStore(assignmentReducer);

export default Store;
