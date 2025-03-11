// store.js
import { configureStore } from '@reduxjs/toolkit';
import assignmentReducer from './reducers/assignmentSlice';

const store = configureStore({
  reducer: {
    assignments: assignmentReducer
  }
});

export default store;
