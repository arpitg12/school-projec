import React from 'react';
import CustomCarousel from '../components/Carousel';  // Ensure this matches your actual file name

function Home() {
  return (
    <div className="font-sans text-gray-900">
      <CustomCarousel />

      {/* Hero Section */}
      <section className="text-center p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Welcome to Springdale Public School</h1>
        <p className="text-lg text-blue-700 mb-8">Where we nurture young minds for a brighter future.</p>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            At Springdale, we believe in creating a stimulating environment that encourages students to reach their full potential.
            Our dedicated faculty and state-of-the-art facilities ensure a holistic educational experience.
          </p>
          <a href="/about-us" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <ul className="list-disc list-inside mx-auto max-w-xl text-lg text-gray-700">
            <li className="mb-4">Annual Sports Day - March 15, 2024</li>
            <li className="mb-4">Science Exhibition - April 10, 2024</li>
            <li className="mb-4">Cultural Fest - May 20, 2024</li>
          </ul>
          <a href="/gallery" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            View All Events
          </a>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="text-center p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/admissions" className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Admissions
          </a>
          <a href="/faculty" className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Faculty
          </a>
          <a href="/students" className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Students
          </a>
          <a href="/contact-us" className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
