import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment, toggleAssignmentCompleted } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';

const AssignmentList = () => {
  const assignments = useSelector((state) => state.assignments);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAssignment(id));
  };

  const handleToggleCompleted = (id) => {
    dispatch(toggleAssignmentCompleted(id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className='flex justify-between items-center'>
      <h1 className="text-3xl font-semibold text-center text-gray-800 ">Assignment List</h1>
      <Link
        to="new"
        className=" inline-block py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
      >
        Add New Assignment
      </Link>
      </div>
      <ul className="space-y-4 mt-6">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div>
              <h3 className={`text-2xl font-medium ${assignment.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {assignment.title}
              </h3>
              <p className="text-sm text-gray-600">Course: {assignment.course}</p>
              <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
              <p className="text-sm text-gray-500">Status: {assignment.completed ? 'Completed' : 'Pending'}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleToggleCompleted(assignment.id)}
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
              >
                {assignment.completed ? 'Mark as Pending' : 'Mark as Completed'}
              </button>
              <Link
                to={`edit/${assignment.id}`}
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none transition duration-300"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(assignment.id)}
                className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default AssignmentList;
