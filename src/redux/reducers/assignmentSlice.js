// assignmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assignments: [
    {
      id: 1,
      title: 'React Components',
      course: 'Introduction to React',
      dueDate: '2023-06-15',
      completed: false,
    },
    {
      id: 2,
      title: 'Async/Await in JavaScript',
      course: 'Advanced JavaScript',
      dueDate: '2023-06-20',
      completed: false,
    },
  ],
};

const assignmentSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment.id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      const { id, updatedData } = action.payload;
      const assignment = state.assignments.find((a) => a.id === id);
      if (assignment) {
        Object.assign(assignment, updatedData);
      }
    },
    toggleAssignmentCompleted: (state, action) => {
      const assignment = state.assignments.find((a) => a.id === action.payload);
      if (assignment) {
        assignment.completed = !assignment.completed;
      }
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  toggleAssignmentCompleted,
} = assignmentSlice.actions;

export default assignmentSlice.reducer;
