
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CommunicationMiddlewarePage() {
  const { t } = useTranslation('common');
  const [currentSlide, setCurrentSlide] = useState(0);

  const keyFeatures = [
    {
      title: 'System Architecture & Performance',
      details: [
        'Gateway/Router/Business 3-Tier structure (2-Tier also available)',
        'Highest data transmission speed between processes (Infiniband applicable)',
        'Memory-leak-free system'
      ]
    },
    {
      title: 'Reliability & Stability',
      details: [
        '24 × 365 operation',
        'Rapid fault detection and recovery',
        'Easy addition of new institutions without engine shutdown',
        'Business expansion possible through process modification only'
      ]
    },
    {
      title: 'Connectivity & Compatibility',
      details: [
        'Supports TCP/UDP, X.25, XOT, FTP, RS232C communication components',
        'Open system supporting multiple operating systems'
      ]
    },
    {
      title: 'Scalability & Management',
      details: [
        'Grouping of institutions and processes; supports multiple process instances per program',
        'Process management, environment-file modification, and failure-log push notifications'
      ]
    },
    {
      title: 'Logging & Monitoring',
      details: [
        'Multi-level log configuration and real-time logging control'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(keyFeatures.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(keyFeatures.length / 4)) % Math.ceil(keyFeatures.length / 4));
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
                COMMUNICATION MIDDLEWARE
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Enterprise communication middleware solutions providing secure, low-latency connectivity 
                between trading systems, market data feeds, and execution venues for optimal trading performance.
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
            <div className="lg:justify-self-end w-full">
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 inline font-cormorant">
              Key Features
            </h2>
            <span className="text-slate-600 ml-4">
              - Enterprise communication middleware capabilities
            </span>
          </div>

          {/* Desktop View - 4 features at once */}
          <div className="hidden lg:block">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(keyFeatures.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-4 gap-6">
                      {keyFeatures.slice(slideIndex * 4, slideIndex * 4 + 4).map((feature, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                          <h3 className="text-lg font-semibold text-slate-900 mb-4 font-cormorant">
                            {feature.title}
                          </h3>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <i className="ri-check-line text-slate-600 mr-2 mt-0.5 flex-shrink-0"></i>
                                <span className="text-sm text-slate-700">{detail}</span>
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

            {/* Navigation Controls for Desktop */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSlide === 0}
              >
                <i className="ri-arrow-left-s-line text-lg"></i>
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(keyFeatures.length / 4) }).map((_, index) => (
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
                disabled={currentSlide === Math.ceil(keyFeatures.length / 4) - 1}
              >
                <i className="ri-arrow-right-s-line text-lg"></i>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(keyFeatures.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {keyFeatures.slice(slideIndex * 2, slideIndex * 2 + 2).map((feature, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                          <h3 className="text-lg font-semibold text-slate-900 mb-4 font-cormorant">
                            {feature.title}
                          </h3>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <i className="ri-check-line text-slate-600 mr-2 mt-0.5 flex-shrink-0"></i>
                                <span className="text-sm text-slate-700">{detail}</span>
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

            {/* Navigation Controls for Mobile */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSlide === 0}
              >
                <i className="ri-arrow-left-s-line text-lg"></i>
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(keyFeatures.length / 2) }).map((_, index) => (
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
                disabled={currentSlide === Math.ceil(keyFeatures.length / 2) - 1}
              >
                <i className="ri-arrow-right-s-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Architectures Section */}
      <section id="architectures" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 font-cormorant">
              Architectures
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive communication middleware architecture designed for high-performance message routing and seamless connectivity. 
              Our 3-tier structure ensures optimal data transmission speed with robust fault detection and recovery capabilities.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl">
              <img 
                src="https://static.readdy.ai/image/9843b11cb216f42dfb814e267ad2d570/8dd2733904d1ff5e4250657426e11d3a.png"
                alt="Communication Middleware Architecture Diagram"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Communication Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cormorant">
            Ready to Transform Your Communication Infrastructure?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions worldwide in revolutionizing their communication infrastructure with our comprehensive middleware solutions. Experience unparalleled performance, reliability, and innovation.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Trusted by 500+ financial institutions globally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
              <i className="ri-phone-line mr-2"></i>
              Schedule Consultation
            </button>
            <button className="border border-slate-300 hover:border-slate-400 text-slate-712 hover:text-slate-900 px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
              <i className="ri-download-line mr-2"></i>
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
