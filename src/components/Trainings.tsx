import React, { useState } from 'react';
import { BookOpen, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Trainings: React.FC = () => {
  const [enrollFormData, setEnrollFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEnrollFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailContent = `
New Training Enrollment Request:

Name: ${enrollFormData.name}
Email: ${enrollFormData.email}
Phone: ${enrollFormData.phone}
Course: ${enrollFormData.course}
Experience Level: ${enrollFormData.experience}
Message: ${enrollFormData.message}
    `;

    const subject = encodeURIComponent('Training Enrollment Request');
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:training@fuforgeit.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setEnrollFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      experience: '',
      message: ''
    });
    
    alert('Thank you for your interest! We will contact you soon with enrollment details.');
  };

  const handleEnrollNow = (courseTitle: string) => {
    setEnrollFormData(prev => ({ ...prev, course: courseTitle }));
    // Scroll to enrollment form
    const enrollmentSection = document.getElementById('enrollment-form');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
/*
  const programs = [
    {
      title: 'Full Stack Web Development',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      price: '₹45,000',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Master modern web development with React, Node.js, and database technologies.',
      curriculum: [
        'HTML5, CSS3, JavaScript ES6+',
        'React.js & Redux',
        'Node.js & Express.js',
        'MongoDB & SQL Databases',
        'RESTful APIs & GraphQL',
        'Deployment & DevOps Basics'
      ],
      features: ['Live Projects', 'Industry Mentorship', 'Job Assistance', 'Certificate']
    },
    {
      title: 'Data Science & Analytics',
      duration: '4 Months',
      level: 'Intermediate',
      price: '₹35,000',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Learn data analysis, machine learning, and business intelligence tools.',
      curriculum: [
        'Python for Data Science',
        'Pandas, NumPy, Matplotlib',
        'Machine Learning Algorithms',
        'SQL & Database Management',
        'Power BI & Tableau',
        'Statistical Analysis'
      ],
      features: ['Real Datasets', 'Industry Projects', 'Certification', 'Career Support']
    },
    {
      title: 'Cloud Computing (AWS/Azure)',
      duration: '3 Months',
      level: 'Intermediate to Advanced',
      price: '₹40,000',
      image: 'https://images.pexels.com/photos/544270/pexels-photo-544270.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Master cloud platforms and become a certified cloud professional.',
      curriculum: [
        'Cloud Computing Fundamentals',
        'AWS/Azure Services',
        'Infrastructure as Code',
        'Container Technologies',
        'DevOps & CI/CD',
        'Cloud Security Best Practices'
      ],
      features: ['AWS/Azure Credits', 'Certification Prep', 'Hands-on Labs', 'Job Placement']
    },
    {
      title: 'Mobile App Development',
      duration: '5 Months',
      level: 'Beginner to Advanced',
      price: '₹38,000',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      curriculum: [
        'React Native Development',
        'Flutter & Dart',
        'Native iOS (Swift)',
        'Native Android (Kotlin)',
        'Mobile UI/UX Design',
        'App Store Deployment'
      ],
      features: ['Published Apps', 'UI/UX Training', 'Mentorship', 'Portfolio Building']
    },
    {
      title: 'Cybersecurity Fundamentals',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      price: '₹30,000',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Learn ethical hacking, security analysis, and cyber threat prevention.',
      curriculum: [
        'Network Security Basics',
        'Ethical Hacking Techniques',
        'Vulnerability Assessment',
        'Incident Response',
        'Compliance & Governance',
        'Security Tools & Technologies'
      ],
      features: ['Hands-on Labs', 'Security Certifications', 'Industry Tools', 'Expert Instructors']
    },
    {
      title: 'Digital Marketing & Analytics',
      duration: '3 Months',
      level: 'Beginner',
      price: '₹25,000',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Master digital marketing strategies and analytics for business growth.',
      curriculum: [
        'SEO & SEM Strategies',
        'Social Media Marketing',
        'Content Marketing',
        'Google Analytics',
        'Email Marketing',
        'Performance Measurement'
      ],
      features: ['Live Campaigns', 'Google Certifications', 'Analytics Tools', 'Case Studies']
    }
  ];
  */
 const programs: any[] = []; 

  const stats = [
    { number: '10+', label: 'Students Trained' },
    { number: '85%', label: 'Job Placement Rate' },
    // { number: '5+', label: 'Industry Partners' },
    { number: '4.8/5', label: 'Average Rating' }
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Industry-Relevant Curriculum',
      description: 'Up-to-date courses designed with input from industry experts and current market demands.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Expert Instructors',
      description: 'Learn from seasoned professionals with years of real-world experience in their respective fields.'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Certification & Recognition',
      description: 'Earn industry-recognized certificates that enhance your professional credibility and career prospects.'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: 'Flexible Learning',
      description: 'Choose from weekday, weekend, or online learning options that fit your schedule and lifestyle.'
    }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Training Programs
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empower your career with comprehensive training programs designed to meet industry demands and accelerate professional growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive learning experiences that prepare you for real-world challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of programs designed to build in-demand skills.
            </p>
            <p></p>
            <p className="text-4xl font-semibold text-teal-700 italic">
                 Stay Tuned — Coming Your Way!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {program.title}
                    </h3>
                    <span className="text-2xl font-bold text-blue-600">
                      {program.price}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </span>
                    <span>{program.level}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Curriculum:</h4>
                    <ul className="space-y-1">
                      {/* {program.curriculum.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {program.curriculum.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{program.curriculum.length - 3} more topics
                        </li>
                      )} */}
                      /*
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {/* {program.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))} */}
                  </div>
                  
                  <button
                    onClick={() => handleEnrollNow(program.title)}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center"
                  >
                    COMMING SOON
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enrollment-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enroll in a Program
              </h2>
              <p className="text-xl text-gray-600">
                Take the first step towards advancing your career. Fill out the form below to get started.
              </p>
            </div>
            
            <form onSubmit={handleEnrollSubmit} className="space-y-6">
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
                    value={enrollFormData.name}
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
                    value={enrollFormData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={enrollFormData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interest 
                  </label>
                  <select
                    id="course"
                    name="course"
                   // required
                    value={enrollFormData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a course</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program.title}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={enrollFormData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select your experience level</option>
                  <option value="Beginner">Beginner (0-1 years)</option>
                  <option value="Intermediate">Intermediate (1-3 years)</option>
                  <option value="Advanced">Advanced (3+ years)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={enrollFormData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us about your goals and any questions you have..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Submit Enrollment Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;