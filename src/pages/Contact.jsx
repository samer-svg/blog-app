import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setFormStatus({
      submitted: true,
      error: false
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 text-sky-200">
      <div className="max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-xl overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-sky-100 mb-6">Contact Us</h1>
        
        {formStatus.submitted && !formStatus.error && (
          <div className="bg-green-800/50 border border-green-600 text-green-300 px-4 py-3 rounded mb-6">
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        )}
        
        {formStatus.submitted && formStatus.error && (
          <div className="bg-red-800/50 border border-red-600 text-red-300 px-4 py-3 rounded mb-6">
            <p>Please fill out all fields before submitting.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sky-300 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sky-300 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sky-300 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-3 rounded-md hover:bg-sky-700 transition-colors duration-300 shadow hover:shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
        
        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow hover:shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

