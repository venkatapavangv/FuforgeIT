import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailContent = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Service Interest: ${formData.service}
Message: ${formData.message}
    `;

    // Create mailto link
    const subject = encodeURIComponent('New Contact Form Submission from Website');
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:info@fuforgeit.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    
    alert('Thank you for your inquiry! Your default email client will open with the contact details.');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      details: 'info@fuforgeit.com'
      //subDetails: 'support@fuforgeit.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-teal-600" />,
      title: 'Call Us',
      details:    '+91 94924 81744',
      subDetails: '+91 80743 30323'
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      title: 'Visit Us',
      details: 'Regadichelika Village, Kodavalur mandal',
      subDetails: 'SPSR Nellore District, Andhra Pradesh, India'
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      subDetails: 'Sat: 10:00 AM - 2:00 PM'
    }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project requirements and create innovative solutions together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-700 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.subDetails}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+91 94924 81744"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="data-analytics">Data Analytics & BI</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="training">Training Programs</option>
                    <option value="talent-acquisition">Talent Acquisition</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Office
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Head Office</h4>
                    <p className="text-gray-600">
                      FUFORGEIT CONSULTANCY SERVICES PVT LTD<br />
                      Regadichelika Village<br />
                      Kodavalur mandal<br />
                      SPSR Nellore District, Andhra Pradesh<br />
                      India - 524344
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Quick Contact
                </h3>
                <p className="text-blue-100 mb-6">
                  Need immediate assistance? Our team is ready to help you with your technology challenges.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-300 mr-3" />
                    <span>+91 94924 81744</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-300 mr-3" />
                    <span>info@fuforgeit.com</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-400">
                  <p className="text-sm text-blue-100">
                    Emergency Support: Available 24/7 for critical issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;