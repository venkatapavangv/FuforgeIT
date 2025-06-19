import React from 'react';
import { ArrowRight, Shield, Users, Zap, Award } from 'lucide-react';

interface HomeProps {
  setCurrentPage?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security for all your IT infrastructure needs.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Expert Team',
      description: 'Highly skilled professionals with domain expertise across industries.'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: 'Fast Delivery',
      description: 'Rapid deployment and implementation of cutting-edge solutions.'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Quality Assured',
      description: 'Proven track record of delivering excellence across all projects.'
    }
  ];

  const handleGetStarted = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
  };

  const handleLearnMore = () => {
    if (setCurrentPage) {
      setCurrentPage('about');
    }
  };

  const handleScheduleConsultation = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-300">
                Innovative IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering enterprises across Finance, Insurance, Healthcare, Banking, and HR with cutting-edge technology solutions and expert talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={handleLearnMore}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FUFORGEIT?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional IT solutions that drive business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions tailored for your industry's unique challenges and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Finance & Banking',
                description: 'Secure, compliant financial technology solutions',
                image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Healthcare',
                description: 'HIPAA-compliant healthcare management systems',
                image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Insurance',
                description: 'Comprehensive insurance technology platforms',
                image: 'https://images.pexels.com/photos/1642770/pexels-photo-1642770.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Human Resources',
                description: 'Advanced HR management and analytics tools',
                image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Retail & E-commerce',
                description: 'Scalable retail and e-commerce solutions',
                image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Manufacturing',
                description: 'Industrial IoT and automation solutions',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our expertise can accelerate your digital transformation journey.
          </p>
          <button 
            onClick={handleScheduleConsultation}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;