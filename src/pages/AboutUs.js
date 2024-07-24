// src/pages/AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">About Us</h1>
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Vision</h2>
          <p className="text-lg text-gray-600">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Mission</h2>
          <p className="text-lg text-gray-600">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Principal's Message</h2>
          <p className="text-lg text-gray-600">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Infrastructure and Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Science and Computer Labs</h3>
              <p className="text-gray-700">
                State-of-the-art labs equipped with the latest technology to facilitate hands-on learning and experimentation.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Classrooms</h3>
              <p className="text-gray-700">
                Spacious and well-equipped classrooms designed to foster a conducive learning environment.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Library</h3>
              <p className="text-gray-700">
                A vast collection of books and digital resources to support students' academic and personal growth.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Sports Facilities</h3>
              <p className="text-gray-700">
                Includes a playground, gymnasium, and swimming pool to encourage physical fitness and teamwork.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
