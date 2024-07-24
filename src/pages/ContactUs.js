// src/pages/ContactUs.js
import React from 'react';
import ContactForm from '../components/ContactForm';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Contact Us</h1>
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Reach Out to Us</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We are here to answer any questions you may have. Feel free to reach out to us through the form below or visit us at:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Address</h3>
          <address className="text-lg text-gray-600">
            Springdale Public School<br />
            123 Education Lane<br />
            Springfield, SP 12345<br />
            Phone: <a href="tel:(123) 456-7890" className="text-blue-600 hover:underline">(123) 456-7890</a><br />
            Email: <a href="mailto:info@springdaleschool.com" className="text-blue-600 hover:underline">info@springdaleschool.com</a>
          </address>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
