// src/pages/Faculty.js
import React from 'react';

const facultyMembers = [
  { name: 'John Doe', position: 'Principal', qualifications: 'M.Ed', experience: '20 years of experience in educational administration' },
  { name: 'Jane Smith', position: 'Vice Principal', qualifications: 'M.Sc. in Physics', experience: '15 years of teaching experience' },
  { name: 'Emily Johnson', position: 'English Teacher', qualifications: 'M.A. in English', experience: '10 years of teaching experience' },
  { name: 'Michael Brown', position: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics', experience: '8 years of teaching experience' },
  { name: 'Sophia Davis', position: 'Science Teacher', qualifications: 'M.Sc. in Chemistry', experience: '12 years of teaching experience' },
  { name: 'David Wilson', position: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science', experience: '5 years of teaching experience' },
];

function Faculty() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-green-600 text-white p-6 md:p-8 lg:p-12 rounded-t-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Faculty
          </h1>
          <p className="text-lg md:text-xl text-center">
            Meet our dedicated team of educators committed to providing top-quality education.
          </p>
        </div>
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 border-b-4 border-green-600 pb-2">
            Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{member.name}</h3>
                <p className="text-lg text-gray-700 font-semibold">{member.position}</p>
                <p className="text-md text-gray-600 mb-2">{member.qualifications}</p>
                <p className="text-md text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
