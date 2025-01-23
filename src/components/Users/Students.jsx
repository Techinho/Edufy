import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

// Your fake student generation function
const subjects = [
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile App Development",
  "Blockchain",
  "UI/UX Design",
  "Digital Marketing",
];

const studentGrades = ["A", "B", "C", "D", "E", "F"];

const generateFakeStudents = (count = 50) => {
  return Array.from({ length: count }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    enrolledCourse: faker.helpers.arrayElement(subjects),
    gradeLevel: faker.number.int({ min: 1, max: 12 }),
    grade: faker.helpers.arrayElement(studentGrades),
    profilePicture: faker.image.avatar(),
  }));
};

const StudentList = () => {
  const [students] = useState(generateFakeStudents(50));

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">List of Students</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <img
                src={student.profilePicture}
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
                <p className="text-gray-600">{student.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700"><strong>Course:</strong> {student.enrolledCourse}</p>
              <p className="text-gray-700"><strong>Grade Level:</strong> {student.gradeLevel}</p>
              <p className="text-gray-700"><strong>Grade:</strong> {student.grade}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
