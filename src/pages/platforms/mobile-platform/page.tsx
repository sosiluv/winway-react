
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MobilePlatformPage() {
  const { t } = useTranslation('common');
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: 'One Source Multi-Device',
      details: [
        'Supports iOS 5.0+ and Android 2.2+',
        'A single source renders simultaneously across different operating systems',
        'Immediate screen updates possible when new OS versions emerge'
      ]
    },
    {
      title: 'Custom Script Support',
      details: [
        'Development using a script similar to standard HTML',
        'Optimized solution that automatically supports various screen resolutions',
        'Major features are available through API functions'
      ]
    },
    {
      title: 'Device Integration',
      details: [
        'APIs provided to access device-specific resources from the platform',
        'All device resources are usable'
      ]
    },
    {
      title: 'Dedicated APIs',
      details: [
        'Provided as specialized APIs available on the client platform for:',
        'Charts, tables, search, encryption, security, location-based SNS integration, and more'
      ]
    },
    {
      title: 'Fast Execution Speed',
      details: [
        'Performance and screen transitions close to native apps',
        'Fast data processing using proprietary algorithms',
        'Improved app stability through various exception handling mechanisms'
      ]
    },
    {
      title: 'High Productivity',
      details: [
        'Significantly reduced development time through a stable framework that supports core development'
      ]
    },
    {
      title: 'Easy Maintenance',
      details: [
        'Efficient maintenance possible by applying the same framework across N-screen platforms'
      ]
    },
    {
      title: 'Efficient Version Management',
      details: [
        'Managed via a version control server',
        'No need for store downloads'
      ]
    },
    {
      title: 'Efficient Use of Development Resources',
      details: [
        'Script developers can develop for both iOS and Android simultaneously',
        'Maximizes developer utilization'
      ]
    },
    {
      title: 'Cost Reduction',
      details: [
        'Significantly reduces development and maintenance costs',
        'Through minimized development time and team size'
      ]
    },
    {
      title: 'Support for Various Development Environments',
      details: [
        'Built-in editor support',
        'UI frameworks developed from extensive experience',
        'Broad API support'
      ]
    },
    {
      title: 'Flexible Communication Environment',
      details: [
        'Supports TCP and HTTP',
        'Supports data formats such as: structured data, XML, JSON, delimiter-based formats',
        'Compatible with custom server integration (e.g., MyMQ)'
      ]
    },
    {
      title: 'Native Feature Support',
      details: [
        'Development and build with native code supported as needed',
        'Native code can be used when platform or web-based implementation is difficult',
        'Supports native OS features such as GPS, camera, etc.',
        'Integration with third-party external modules',
        'Supports SNS and push notifications'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(features.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(features.length / 4)) % Math.ceil(features.length / 4));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-cormorant">
                Mobile Platform
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Advanced mobile trading platform optimized for iOS and Android devices, providing seamless trading experience with real-time market data and comprehensive order management capabilities through a unified development framework.
              </p>
              
              {/* Navigation Categories - Minimal Design */}
              <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center">
                <button
                  onClick={() => scrollToSection('key-features')}
                  className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
                >
                  Key Features
                </button>
                <button
                  onClick={() => scrollToSection('architectures')}
                  className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
                >
                  Architectures
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-20 bg-gradient-to-r from-slate-100 to-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-8 font-cormorant">
              Key Features
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our mobile platform provides comprehensive cross-platform development capabilities with native performance, 
              enabling efficient development and deployment across iOS and Android devices.
            </p>
          </div>
          
          {/* Horizontal Scrolling Layout */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(features.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {features.slice(slideIndex * 4, slideIndex * 4 + 4).map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                          <h3 className="text-lg font-bold text-slate-800 mb-6 text-center font-cormorant">
                            {feature.title}
                          </h3>
                          <ul className="space-y-3">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-slate-600 mt-2 flex-shrink-0"></div>
                                <span className="text-slate-700 text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSlide === 0}
              >
                <i className="ri-arrow-left-s-line text-lg"></i>
              </button>

              {/* Dots indicator */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(features.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 transition-colors cursor-pointer ${
                      currentSlide === index ? 'bg-slate-600' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSlide === Math.ceil(features.length / 4) - 1}
              >
                <i className="ri-arrow-right-s-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Architectures Section */}
      <section id="architectures" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cormorant">
              Architectures
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive mobile platform architecture designed for high-performance trading applications and optimal user experience. 
              Our multi-tier structure ensures robust data processing with enterprise-grade security and scalability.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="bg-white p-8 inline-block">
              <img 
                src="https://static.readdy.ai/image/9843b11cb216f42dfb814e267ad2d570/9e11575b67b0d1ac6d4b317a4f1c0b1b.png"
                alt="Mobile Platform Architecture Diagram"
                className="w-full max-w-5xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Mobile Trading Experience?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions worldwide in revolutionizing their mobile trading platforms with our comprehensive cross-platform solutions. Experience unparalleled performance, efficiency, and user experience.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Trusted by 500+ financial institutions globally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
              <i className="ri-phone-line mr-2"></i>
              Schedule Consultation
            </button>
            <button className="border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
              <i className="ri-download-line mr-2"></i>
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
