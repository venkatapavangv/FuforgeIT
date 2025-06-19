import React, { useState } from 'react';
import { MapPin, Calendar, DollarSign, Users, Send, Briefcase } from 'lucide-react';

const Careers: React.FC = () => {
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    currentCompany: '',
    currentCtc: '',
    expectedCtc: '',
    noticePeriod: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailContent = `
New Job Application:

Position Applied: ${applicationData.position}
Name: ${applicationData.name}
Email: ${applicationData.email}
Phone: ${applicationData.phone}
Experience: ${applicationData.experience}
Current Company: ${applicationData.currentCompany}
Current CTC: ${applicationData.currentCtc}
Expected CTC: ${applicationData.expectedCtc}
Notice Period: ${applicationData.noticePeriod}

Cover Letter:
${applicationData.coverLetter}

Note: Resume attachment needs to be sent separately.
    `;

    const subject = encodeURIComponent(`Job Application - ${applicationData.position}`);
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:98pavantech@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      currentCompany: '',
      currentCtc: '',
      expectedCtc: '',
      noticePeriod: '',
      coverLetter: '',
      resume: null
    });
    
    alert('Thank you for your application! Please attach your resume to the email that opens. We will review your application and get back to you soon.');
  };

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹12-18 LPA',
      posted: '2 days ago',
      description: 'We are looking for an experienced Full Stack Developer to join our dynamic team and work on cutting-edge web applications.',
      requirements: [
        'Strong experience with React.js, Node.js, and TypeScript',
        'Proficiency in MongoDB, PostgreSQL, or similar databases',
        'Experience with cloud platforms (AWS/Azure)',
        'Knowledge of microservices architecture',
        'Strong problem-solving skills and attention to detail'
      ],
      responsibilities: [
        'Develop and maintain full-stack web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable, and efficient code',
        'Participate in code reviews and technical discussions'
      ]
    },
    {
      id: 2,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Gurgaon, HR',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹15-22 LPA',
      posted: '5 days ago',
      description: 'Join our data science team to build machine learning models and derive insights from complex datasets.',
      requirements: [
        'Masters in Computer Science, Statistics, or related field',
        'Strong experience with Python, R, and SQL',
        'Experience with machine learning frameworks (TensorFlow, PyTorch)',
        'Knowledge of statistical analysis and data visualization',
        'Experience with big data technologies (Spark, Hadoop)'
      ],
      responsibilities: [
        'Develop and deploy machine learning models',
        'Analyze large datasets to identify trends and patterns',
        'Create data visualization dashboards',
        'Collaborate with business stakeholders'
      ]
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Bangalore, KA',
      type: 'Full-time',
      experience: '6-8 years',
      salary: '₹20-28 LPA',
      posted: '1 week ago',
      description: 'Lead cloud transformation initiatives and design scalable cloud architectures for our enterprise clients.',
      requirements: [
        'AWS/Azure/GCP certifications (Solutions Architect level)',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong knowledge of containerization (Docker, Kubernetes)',
        'Experience with DevOps practices and CI/CD pipelines',
        'Excellent communication and client-facing skills'
      ],
      responsibilities: [
        'Design and implement cloud solutions',
        'Lead client meetings and technical discussions',
        'Mentor junior team members',
        'Ensure adherence to security and compliance standards'
      ]
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹8-12 LPA',
      posted: '3 days ago',
      description: 'Create intuitive and engaging user experiences for our web and mobile applications.',
      requirements: [
        'Proficiency in design tools (Figma, Adobe XD, Sketch)',
        'Strong understanding of user-centered design principles',
        'Experience with responsive and mobile-first design',
        'Knowledge of HTML/CSS and front-end frameworks',
        'Portfolio demonstrating excellent design skills'
      ],
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Collaborate with developers and product managers',
        'Maintain design systems and style guides'
      ]
    },
    {
      id: 5,
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹10-16 LPA',
      posted: '4 days ago',
      description: 'Protect our clients\' digital assets by implementing robust security measures and monitoring threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        'Experience with security tools (SIEM, IDS/IPS, firewalls)',
        'Knowledge of compliance frameworks (ISO 27001, GDPR)',
        'Certified Ethical Hacker (CEH) or similar certification',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Monitor security incidents and respond to threats',
        'Conduct vulnerability assessments and penetration testing',
        'Develop security policies and procedures',
        'Provide security awareness training'
      ]
    },
    {
      id: 6,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Mumbai, MH',
      type: 'Full-time',
      experience: '5-7 years',
      salary: '₹15-25 LPA',
      posted: '1 week ago',
      description: 'Drive business growth by identifying new opportunities and building strategic partnerships.',
      requirements: [
        'MBA or equivalent business degree',
        'Proven track record in B2B sales',
        'Experience in IT services or consulting industry',
        'Excellent communication and negotiation skills',
        'Strong network in enterprise technology space'
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain client relationships',
        'Prepare proposals and presentations',
        'Achieve revenue targets and growth objectives'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health and dental insurance',
    'Flexible working hours and remote work options',
    'Professional development and training opportunities',
    'Modern office spaces with latest technology',
    'Team outings and company-sponsored events',
    'Generous leave policy and sabbatical options',
    'Stock options and equity participation'
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Build your career with a leading IT consultancy. We offer exciting opportunities to work on cutting-edge projects with top-tier clients.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a company that values innovation, growth, and work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Briefcase className="h-8 w-8 text-blue-600" />,
                title: 'Growth Opportunities',
                description: 'Clear career progression paths and skill development programs.'
              },
              {
                icon: <Users className="h-8 w-8 text-teal-600" />,
                title: 'Collaborative Culture',
                description: 'Work with talented professionals in a supportive environment.'
              },
              {
                icon: <DollarSign className="h-8 w-8 text-orange-600" />,
                title: 'Competitive Compensation',
                description: 'Industry-leading salaries and comprehensive benefits package.'
              },
              {
                icon: <MapPin className="h-8 w-8 text-purple-600" />,
                title: 'Flexible Work',
                description: 'Remote work options and flexible schedules for work-life balance.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Employee Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities to advance your career with us.
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.experience}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                      {job.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      Posted {job.posted}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => setApplicationData(prev => ({ ...prev, position: job.title }))}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Apply for a Position
              </h2>
              <p className="text-xl text-gray-600">
                Ready to join our team? Fill out the application form below.
              </p>
            </div>
            
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
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
                    value={applicationData.name}
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
                    value={applicationData.email}
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
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={applicationData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="Other">Other (specify in cover letter)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Total Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-8 years">5-8 years</option>
                    <option value="8+ years">8+ years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Company
                  </label>
                  <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    value={applicationData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Current employer"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="currentCtc" className="block text-sm font-medium text-gray-700 mb-2">
                    Current CTC
                  </label>
                  <input
                    type="text"
                    id="currentCtc"
                    name="currentCtc"
                    value={applicationData.currentCtc}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="₹10 LPA"
                  />
                </div>
                <div>
                  <label htmlFor="expectedCtc" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected CTC
                  </label>
                  <input
                    type="text"
                    id="expectedCtc"
                    name="expectedCtc"
                    value={applicationData.expectedCtc}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="₹15 LPA"
                  />
                </div>
                <div>
                  <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Period
                  </label>
                  <select
                    id="noticePeriod"
                    name="noticePeriod"
                    value={applicationData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select notice period</option>
                    <option value="Immediate">Immediate</option>
                    <option value="15 days">15 days</option>
                    <option value="1 month">1 month</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload your resume in PDF, DOC, or DOCX format (max 5MB)
                </p>
              </div>
              
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  required
                  rows={6}
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Submit Application
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;