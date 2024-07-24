// src/pages/Students.js
import React from 'react';

const extracurricularActivities = [
  "Music",
  "Dance",
  "Drama",
  "Art",
  "Sports",
  "Robotics",
  "Debate Club",
  "Science Club"
];

const clubsAndSocieties = [
  "Literary Society",
  "Environmental Club",
  "Astronomy Club",
  "Coding Club"
];

const achievements = [
  "John Smith - National Level Math Olympiad Winner",
  "Sarah Lee - Gold Medalist in State Swimming Championship",
  "Tech Innovators Club - Winners of Inter-School Robotics Competition"
];

const studentCouncil = [
  { role: "President", name: "Amy Parker", grade: "Grade 12" },
  { role: "Vice President", name: "Rajiv Mehta", grade: "Grade 11" },
  { role: "Secretary", name: "Lisa Wong", grade: "Grade 10" }
];

function Students() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6 md:p-8 lg:p-12 rounded-t-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Students
          </h1>
          <p className="text-lg md:text-xl text-center">
            Discover the vibrant and dynamic life of our students at Springdale.
          </p>
        </div>
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
            Life at Springdale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {extracurricularActivities.map((activity, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 transition-colors">
                <h3 className="text-xl font-semibold text-blue-700">{activity}</h3>
              </div>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
            Clubs and Societies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {clubsAndSocieties.map((club, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 transition-colors">
                <h3 className="text-xl font-semibold text-blue-700">{club}</h3>
              </div>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
            Achievements
          </h2>
          <ul className="list-disc pl-5 mb-12">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-lg text-gray-700 mb-2">
                {achievement}
              </li>
            ))}
          </ul>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
            Student Council
          </h2>
          <ul className="list-disc pl-5 mb-12">
            {studentCouncil.map((member, index) => (
              <li key={index} className="text-lg text-gray-700 mb-2">
                {member.role}: <span className="font-semibold">{member.name}</span>, {member.grade}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Students;
