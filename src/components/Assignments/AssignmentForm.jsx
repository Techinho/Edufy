import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from '../../redux/actions/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/appContext';


const AssignmentForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [course, setCourse] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { courses } = useContext(AppContext)  // Access courses from context
  const assignments = useSelector((state) => state.assignments);

  // Load assignment data if editing
  useEffect(() => {
    if (id) {
      const assignmentToEdit = assignments.find((a) => a.id === parseInt(id));
      if (assignmentToEdit) {
        setTitle(assignmentToEdit.title);
        setDescription(assignmentToEdit.description);
        setDueDate(assignmentToEdit.dueDate);
        setCourse(assignmentToEdit.course);
      }
    }
  }, [id, assignments]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAssignment = {
      id: id ? parseInt(id) : Date.now(),
      title,
      description,
      dueDate,
      course,
      completed: false,
    };

    if (id) {
      dispatch(updateAssignment(newAssignment.id, newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }

    navigate('/assignments');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">{id ? 'Edit Assignment' : 'Add New Assignment'}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter assignment title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter assignment description"
            required
          />
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-600">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-600">Course</label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.title}>{course.title}</option>
            ))}
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            {id ? 'Update Assignment' : 'Add Assignment'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentForm;
