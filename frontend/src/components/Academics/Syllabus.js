import React from 'react';
import { Link } from 'react-router-dom';

const branches = [
  { name: 'Computer Science & Engineering', path: '/academics/syllabus/cse' },
  { name: 'Information Technology', path: '/academics/syllabus/it' },
  { name: 'Electronics and Communication Engineering', path: '/academics/syllabus/ece' },
  { name: 'Mechanical Engineering', path: '/academics/syllabus/me' },
  { name: 'Civil Engineering', path: '/academics/syllabus/ce' },
  { name: 'Chemical Engineering', path: '/academics/syllabus/che' },
];

const Syllabus = () => (
  <div className="bg-gray-100 min-h-screen py-8 ">
   
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Syllabus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <Link 
            key={branch.path} 
            to={branch.path} 
            className="p-6 bg-white rounded-lg shadow-lg border-2 border-transparent hover:border-green-500 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-700">{branch.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Syllabus;
