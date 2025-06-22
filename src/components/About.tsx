import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Mission-Driven',
      description: 'To empower businesses with innovative technology solutions that drive growth and efficiency.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions for our clients.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service.'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project we undertake.'
    }
  ];

  const stats = [
    { number: '2+', label: 'Projects Completed' },
    { number: '2+', label: 'Happy Clients' },
    { number: '10+', label: 'Expert Consultants' },
    { number: '10+', label: 'Years Experience' }
  ];

  // const team = [
  //   {
  //     name: 'Harsha Vardhan',
  //     role: 'Chief Executive Officer',
  //     image: '',
  //     bio: 'Master in enterprise technology solutions'
  //   },
  //   {
  //     name: 'Pavan Kumar',
  //     role: 'Chief Technology Officer',
  //     image: '',
  //     bio: 'Expert in cloud architecture and digital transformation'
  //   },
  //   {
  //     name: 'Venkat',
  //     role: 'VP of Engineering',
  //     image: '',
  //     bio: 'Specializes in scalable software development'
  //   },
  //   {
  //     name: 'Priya',
  //     role: 'Head of Training',
  //     image: '',
  //     bio: 'Passionate about developing tech talent'
  //   }
  // ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About FUFORGEIT
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through innovative technology solutions, expert training, and exceptional talent acquisition.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between cutting-edge technology and business success, 
                FUFORGEIT Consultancy Services has grown from a small team of passionate technologists to a 
                leading IT consultancy firm serving enterprises across multiple industries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in delivering comprehensive IT solutions for Finance, Insurance, Healthcare, 
                Banking, and HR sectors, while also providing world-class training programs and connecting 
                businesses with top-tier technology talent.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, innovation, and client success has made us a trusted partner 
                for organizations looking to accelerate their digital transformation journey.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">1+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-300">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries driving innovation and excellence at FUFORGEIT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FUFORGEIT?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Domain Expertise',
                description: 'Deep industry knowledge across Finance, Healthcare, Insurance, Banking, and HR sectors.'
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully delivered 2+ projects with a 98% client satisfaction rate.'
              },
              {
                title: 'End-to-End Solutions',
                description: 'From consulting to implementation to ongoing support - we handle it all.'
              },
              {
                title: 'Agile Methodology',
                description: 'Fast, flexible, and transparent development process with regular client updates.'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control processes ensure bug-free deliverables.'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock technical support to keep your systems running smoothly.'
              }
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;