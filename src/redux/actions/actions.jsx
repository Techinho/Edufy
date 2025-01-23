// actions.js
export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';
export const DELETE_ASSIGNMENT = 'DELETE_ASSIGNMENT';
export const UPDATE_ASSIGNMENT = 'UPDATE_ASSIGNMENT';
export const TOGGLE_ASSIGNMENT_COMPLETED = 'TOGGLE_ASSIGNMENT_COMPLETED';

export const addAssignment = (assignment) => ({
  type: ADD_ASSIGNMENT,
  payload: assignment,
});

export const deleteAssignment = (id) => ({
  type: DELETE_ASSIGNMENT,
  payload: id,
});

export const updateAssignment = (id, updatedData) => ({
  type: UPDATE_ASSIGNMENT,
  payload: { id, updatedData },
});

export const toggleAssignmentCompleted = (id) => ({
  type: TOGGLE_ASSIGNMENT_COMPLETED,
  payload: id,
});
