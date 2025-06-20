import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-sky-200">
      <div className="max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-xl overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-sky-100 mb-6">About Our Blog</h1>
        
        <div className="prose prose-invert max-w-none text-sky-300">
          <p className="mb-4">
            Welcome to our blog! We are passionate about web development and love sharing our knowledge with the community.
          </p>
          
          <p className="mb-4">
            This blog was created as a learning project to demonstrate how to build a simple blog application using React, React Router, and Tailwind CSS.
          </p>
          
          <h2 className="text-2xl font-bold text-sky-200 mt-6 mb-4">Our Mission</h2>
          
          <p className="mb-4">
            Our mission is to provide high-quality, easy-to-understand content about web development technologies. 
            We believe that learning should be accessible to everyone, regardless of their background or experience level.
          </p>
          
          <h2 className="text-2xl font-bold text-sky-200 mt-6 mb-4">Technologies Used</h2>
          
          <ul className="list-disc pl-6 mb-4 marker:text-sky-400">
            <li className="mb-2">React - A JavaScript library for building user interfaces</li>
            <li className="mb-2">React Router - For navigation and routing in our React application</li>
            <li className="mb-2">Tailwind CSS - A utility-first CSS framework for rapid UI development</li>
            <li className="mb-2">Vite - A build tool that provides a faster and leaner development experience</li>
          </ul>
          
          <p className="mb-4">
            We hope you enjoy reading our blog and find the content helpful in your web development journey!
          </p>
        </div>
        
        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors duration-300 shadow hover:shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

