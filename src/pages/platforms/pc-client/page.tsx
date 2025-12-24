
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function PCClientPlatformPage() {
  const { t } = useTranslation('common');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSummarySlide, setCurrentSummarySlide] = useState(0);
  const [currentSection, setCurrentSection] = useState<'summary' | 'key-features' | 'functions' | 'architectures'>('summary');

  const summaryFeatures = [
    {
      title: 'UI Integrated Solution',
      details: [
        'Combines the user-friendly features of C/S (Client-Server) with the convenient management features of Web'
      ]
    },
    {
      title: 'GPL Free',
      details: [
        'Does not use any open-source software related to the GPL license',
        'Fully free from GPL-related obligations'
      ]
    },
    {
      title: 'No ActiveX Technology',
      details: [
        'Avoids use of ActiveX, which is declining due to security concerns',
        'ActiveX controls can still be imported and used if necessary'
      ]
    },
    {
      title: 'Open Architecture',
      details: [
        'Capable of integrating with various 3rd-party products'
      ]
    },
    {
      title: 'No Registry Usage',
      details: [
        'Does not rely on the Windows Registry, which has increasing limitations in newer Windows versions',
        'Especially useful in User Mode, where registry access is restricted'
      ]
    },
    {
      title: 'No Installation Required',
      details: [
        'Can run simply by copying files, without installation'
      ]
    },
    {
      title: 'No Administration Rights Needed',
      details: [
        'Can be executed without administrator privileges on Windows 10'
      ]
    }
  ];

  const keyFeatures = [
    {
      title: 'Convenient User Environment',
      details: [
        'MDI (Multiple Document Interface) support, Docking Tool Bar',
        'Hotkeys, user-defined menus',
        'User-customizable connection screens, screen layout saving',
        'Floating independent windows, virtualization and multi-monitor support',
        'Theme support'
      ]
    },
    {
      title: 'Developer Convenience',
      details: [
        'WYSIWYG-based screen development',
        'Instant testing within the development screen',
        'Various controls, containers, and data sources',
        'SVN integration within the development environment',
        'Support for various templates'
      ]
    },
    {
      title: 'Support for Various Development Technologies',
      details: [
        'Supports multiple scripting languages: Python, JavaScript, VBScript',
        'Supports multiple communication methods: HTTP-SOAP, HTTP-REST, Socket, Tmax'
      ]
    },
    {
      title: 'High-Speed Data Processing',
      details: [
        'Performance considered from design to implementation',
        'Capable of handling large-scale data',
        'Fast real-time data processing',
        'Export of large Excel files supported'
      ]
    }
  ];

  const functions = [
    {
      title: 'Form Designer',
      description: 'Screen development program',
      details: 'Provides various features for easy and efficient development'
    },
    {
      title: 'Version Manager',
      description: 'Version management tool for handling file versions',
      details: 'Very simple and user-friendly version manager. Prevents file tampering through CRC32-based file verification'
    },
    {
      title: 'Channel Manager',
      description: 'Manages communication and connections with various external servers',
      details: 'Supports encryption (SEED128, AES128, AES192, AES256) and compression (BZIP)'
    },
    {
      title: 'Auto Patch',
      description: 'Automatic file update/download program',
      details: 'Automatically connects to an alternate server in case of server failure'
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

  const nextSummarySlide = () => {
    setCurrentSummarySlide((prev) => (prev + 1) % Math.ceil(summaryFeatures.length / 4));
  };

  const prevSummarySlide = () => {
    setCurrentSummarySlide((prev) => (prev - 1 + Math.ceil(summaryFeatures.length / 4)) % Math.ceil(summaryFeatures.length / 4));
  };

  const goToSummarySlide = (index: number) => {
    setCurrentSummarySlide(index);
  };

  const scrollToSection = (sectionId: string, tab?: 'summary' | 'key-features' | 'functions' | 'architectures') => {
    if (tab) setCurrentSection(tab);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-cormorant ">
                Presto | PC Clinet
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Comprehensive desktop trading platform with advanced charting tools, multi-monitor support,
                and professional-grade trading interfaces designed for institutional traders and financial professionals.
              </p>

              {/* Navigation Categories */}
              <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center">
                <button
                  onClick={() => scrollToSection('summary', 'summary')}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'summary' ? 'text-white border-white' : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'}`}
                >
                  Summary
                </button>
                <button
                  onClick={() => scrollToSection('key-features', 'key-features')}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'key-features' ? 'text-white border-white' : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'}`}
                >
                  Key Features
                </button>
                <button
                  onClick={() => scrollToSection('functions', 'functions')}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'functions' ? 'text-white border-white' : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'}`}
                >
                  Functions
                </button>
                <button
                  onClick={() => scrollToSection('architectures', 'architectures')}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'architectures' ? 'text-white border-white' : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'}`}
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

      {/* Summary Section */}
      <section id="summary" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 inline font-cormorant">
              Platform Summary
            </h2>
            <span className="text-slate-600 ml-4">
              - Enterprise PC client platform capabilities
            </span>
          </div>

          {/* Desktop View - 4 features at once */}
          <div className="hidden lg:block">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSummarySlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(summaryFeatures.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-4 gap-6">
                      {summaryFeatures.slice(slideIndex * 4, slideIndex * 4 + 4).map((feature, index) => (
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
                onClick={prevSummarySlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSummarySlide === 0}
              >
                <i className="ri-arrow-left-s-line text-lg"></i>
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(summaryFeatures.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSummarySlide(index)}
                    className={`w-3 h-3 transition-colors cursor-pointer ${currentSummarySlide === index ? 'bg-slate-600' : 'bg-slate-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSummarySlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSummarySlide === Math.ceil(summaryFeatures.length / 4) - 1}
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
                style={{ transform: `translateX(-${currentSummarySlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(summaryFeatures.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {summaryFeatures.slice(slideIndex * 2, slideIndex * 2 + 2).map((feature, index) => (
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
                onClick={prevSummarySlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSummarySlide === 0}
              >
                <i className="ri-arrow-left-s-line text-lg"></i>
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(summaryFeatures.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSummarySlide(index)}
                    className={`w-3 h-3 transition-colors cursor-pointer ${currentSummarySlide === index ? 'bg-slate-600' : 'bg-slate-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSummarySlide}
                className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                disabled={currentSummarySlide === Math.ceil(summaryFeatures.length / 2) - 1}
              >
                <i className="ri-arrow-right-s-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 inline font-cormorant">
              Key Features
            </h2>
            <span className="text-slate-600 ml-4">
              - Enterprise PC client platform capabilities
            </span>
          </div>

          {/* Desktop View - All 4 boxes in one line */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6">
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

          {/* Mobile/Tablet View - Swipeable carousel */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(keyFeatures.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {keyFeatures.slice(slideIndex * 2, slideIndex * 2 + 2).map((feature, index) => (
                          <div key={index} className="bg-white border border-gray-200 p-6">
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
                  {Array.from({ length: Math.ceil(keyFeatures.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 transition-colors cursor-pointer ${currentSlide === index ? 'bg-slate-600' : 'bg-slate-300'
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
        </div>
      </section>

      {/* Functions Section */}
      <section id="functions" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cormorant">
              Functions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive development and management tools designed for efficient PC client platform operations and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {functions.map((func, index) => (
              <div key={index} className="bg-slate-50 p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-cormorant">
                  {func.title}
                </h3>
                <p className="text-slate-700 font-medium mb-3">
                  {func.description}
                </p>
                <p className="text-sm text-slate-600">
                  {func.details}
                </p>
              </div>
            ))}
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
              Advanced PC client platform architecture designed for professional trading environments.
              Our comprehensive system provides seamless integration with multiple trading venues and real-time data processing capabilities.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="bg-black p-8 inline-block">
              <img
                src="https://static.readdy.ai/image/9843b11cb216f42dfb814e267ad2d570/225b81afcccc4a807c5143a4f2c22e6b.png"
                alt="PC Client Platform Architecture Diagram"
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
