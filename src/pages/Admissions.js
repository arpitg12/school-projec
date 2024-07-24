// src/pages/Admissions.js
import React from 'react';

function Admissions() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6 md:p-8 lg:p-12 rounded-b-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Admissions
          </h1>
          <p className="text-lg md:text-xl text-center">
            Discover the process, criteria, and important dates for admission at Springdale Public School.
          </p>
        </div>
        <div className="p-8 md:p-12 lg:p-16">
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
              Process
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Admission forms are available for download. Submit the completed form along with required documents at the school office.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
              Criteria
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
            </p>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-4 border-blue-600 pb-2">
              Important Dates
            </h2>
            <ul className="list-disc pl-5 text-lg md:text-xl text-gray-700 space-y-6">
              <li className="bg-blue-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-100">
                Admission Form Availability: March 1st
              </li>
              <li className="bg-blue-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-100">
                Last Date for Submission: March 31st
              </li>
              <li className="bg-blue-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-100">
                Entrance Test: April 15th
              </li>
              <li className="bg-blue-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-100">
                Announcement of Results: April 30th
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
