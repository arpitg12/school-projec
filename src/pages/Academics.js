// src/pages/Academics.js
import React from 'react';

function Academics() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-5xl font-extrabold text-center text-green-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
          Academics
        </h1>
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Curriculum</h2>
          <p className="text-lg text-gray-700 mb-8">
            We offer a comprehensive curriculum across all levels of education.
          </p>
          <div className="space-y-12">
            <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Primary (Grades 1-5)</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Secondary (Grades 6-10)</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Senior Secondary (Grades 11-12)</h3>
              <div className="space-y-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-800 mb-2">Science Stream</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                    <li>Mathematics</li>
                    <li>Computer Science</li>
                    <li>English</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-800 mb-2">Commerce Stream</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Accountancy</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>Mathematics</li>
                    <li>English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Teaching Methodologies</h2>
          <p className="text-lg text-gray-700 mb-6">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Educational Resources</h2>
          <p className="text-lg text-gray-700">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Academics;
