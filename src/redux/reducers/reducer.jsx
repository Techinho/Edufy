// reducer.js
import {
    ADD_ASSIGNMENT,
    DELETE_ASSIGNMENT,
    UPDATE_ASSIGNMENT,
    TOGGLE_ASSIGNMENT_COMPLETED,
  } from '../actions/actions';
  
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
  
  const assignmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ASSIGNMENT:
        return {
          ...state,
          assignments: [...state.assignments, action.payload],
        };
      case DELETE_ASSIGNMENT:
        return {
          ...state,
          assignments: state.assignments.filter((assignment) => assignment.id !== action.payload),
        };
      case UPDATE_ASSIGNMENT:
        return {
          ...state,
          assignments: state.assignments.map((assignment) =>
            assignment.id === action.payload.id
              ? { ...assignment, ...action.payload.updatedData }
              : assignment
          ),
        };
      case TOGGLE_ASSIGNMENT_COMPLETED:
        return {
          ...state,
          assignments: state.assignments.map((assignment) =>
            assignment.id === action.payload
              ? { ...assignment, completed: !assignment.completed }
              : assignment
          ),
        };
      default:
        return state;
    }
  };
  
  export default assignmentReducer;
  