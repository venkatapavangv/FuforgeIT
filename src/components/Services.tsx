import React from 'react';
import { Code, Database, Shield, Cloud, Smartphone, BarChart } from 'lucide-react';

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and industry standards.',
      features: ['Web Applications', 'Desktop Software', 'API Integration', 'Legacy System Modernization']
    },
    {
      icon: <Cloud className="h-12 w-12 text-teal-600" />,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration, deployment, and management services for scalable business growth.',
      features: ['Cloud Migration', 'AWS/Azure/GCP', 'DevOps', 'Cloud Security']
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence tools.',
      features: ['Data Warehousing', 'Predictive Analytics', 'Dashboard Creation', 'Real-time Reporting']
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', '24/7 Monitoring']
    },
    {
      icon: <Smartphone className="h-12 w-12 text-green-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization']
    },
    {
      icon: <BarChart className="h-12 w-12 text-orange-600" />,
      title: 'Digital Transformation',
      description: 'Strategic guidance and implementation support for your complete digital transformation journey.',
      features: ['Process Automation', 'System Integration', 'Change Management', 'ROI Analysis']
    }
  ];

  const industries = [
    {
      name: 'Finance & Banking',
      solutions: ['Payment Processing', 'Risk Management', 'Regulatory Compliance', 'Core Banking Systems'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'Healthcare',
      solutions: ['EMR/EHR Systems', 'Telemedicine', 'Medical Imaging', 'Patient Management'],
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Insurance',
      solutions: ['Claims Processing', 'Policy Management', 'Underwriting Systems', 'Customer Portals'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: 'Human Resources',
      solutions: ['HRMS', 'Payroll Systems', 'Performance Management', 'Recruitment Platforms'],
      color: 'bg-teal-50 border-teal-200'
    }
  ];

  const handleRequestQuote = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
  };

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized expertise tailored to meet the unique challenges of your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`${industry.color} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {industry.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div
                      key={solutionIndex}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <p className="text-gray-700 font-medium">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business needs and objectives' },
              { step: '02', title: 'Strategy', desc: 'Developing a comprehensive solution roadmap' },
              { step: '03', title: 'Development', desc: 'Agile development with regular progress updates' },
              { step: '04', title: 'Deployment', desc: 'Seamless launch with ongoing support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that drives results.
          </p>
          <button 
            onClick={handleRequestQuote}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;