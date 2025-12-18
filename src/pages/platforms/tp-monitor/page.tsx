
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ServerPlatformPage() {
  const { t } = useTranslation('common');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedUI, setSelectedUI] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const features = [
    {
      title: 'Reliability',
      details: [
        'Consistency and Message Delivery Verification',
        'Verification of Message Sender',
        'High Availability Features'
      ]
    },
    {
      title: 'Connectivity',
      details: [
        'Provides more powerful distributed system integration than clustering',
        'Distributed processing via Active/Standby and Active/Active connections'
      ]
    },
    {
      title: 'Flexible Routing',
      details: [
        'Various types of Exchanges',
        'Message routing processing through queues'
      ]
    },
    {
      title: 'Real-Time Message Processing',
      details: [
        'Clustering for real-time processing of distributed data',
        'Real-time data integration based on data server and connection server configurations'
      ]
    },
    {
      title: 'Clustering',
      details: [
        'Clustering through message brokers'
      ]
    },
    {
      title: 'High Availability Queue',
      details: [
        'Queue sharing and mirroring by applications on clustered servers'
      ]
    },
    {
      title: 'Management UI',
      details: [
        'Monitoring and control of message brokers on all distributed servers'
      ]
    }
  ];

  const uiControlOptions = [
    {
      title: 'Activity Report',
      features: [
        'Online Help Support (Korean/English)',
        'Configuration and System Setup (File References)',
        'Programming (API Call Subroutines)',
        'Commands (Command Reference)'
      ],
      image: 'https://readdy.ai/api/search-image?query=Server%20platform%20activity%20report%20dashboard%20with%20real-time%20monitoring%20graphs%2C%20performance%20metrics%2C%20message%20flow%20analytics%2C%20professional%20monitoring%20interface%20with%20silver%20and%20navy%20color%20scheme%2C%20sophisticated%20data%20visualization&width=1000&height=600&seq=server-activity-report&orientation=landscape'
    },
    {
      title: 'Manual',
      features: [
        'Online Help Support (Korean/English)',
        'Configuration and System Setup (File References)',
        'Programming (API Call Subroutines)',
        'Commands (Command Reference)'
      ],
      image: 'https://readdy.ai/api/search-image?query=Server%20platform%20manual%20documentation%20interface%20with%20structured%20guides%2C%20configuration%20instructions%2C%20technical%20documentation%20layout%2C%20professional%20documentation%20system%20with%20silver%20and%20navy%20design%2C%20clean%20typography&width=1000&height=600&seq=server-manual-docs&orientation=landscape'
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
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-cormorant ">
              WinNet | TP-Monitor
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Enterprise-grade server infrastructure providing robust, scalable, and high-performance 
              solutions for mission-critical trading operations with advanced clustering and distributed processing capabilities.
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
                onClick={() => scrollToSection('ui-control')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                UI Control
              </button>
              <button
                onClick={() => scrollToSection('functions')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                Functions
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
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-20 bg-gradient-to-r from-slate-100 to-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-8 font-cormorant">
              Key Features
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our server platform provides comprehensive enterprise-grade features for high-performance 
              trading operations with advanced clustering and distributed processing capabilities.
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
                          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center font-cormorant">
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

      {/* UI Control Section */}
      <section id="ui-control" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-8 font-cormorant">
              UI Control
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive management and monitoring tools for complete control over your server platform infrastructure.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex space-x-1 bg-stone-200 p-1 rounded-lg inline-flex">
              {uiControlOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedUI(index)}
                  className={`px-6 py-3 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedUI === index
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full">
                <img 
                  src={uiControlOptions[selectedUI].image}
                  alt={uiControlOptions[selectedUI].title}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-1 bg-stone-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-cormorant">
                {uiControlOptions[selectedUI].title}
              </h3>
              <ul className="space-y-4">
                {uiControlOptions[selectedUI].features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="ri-check-line text-slate-600 text-xl mt-0.5 flex-shrink-0"></i>
                    <span className="text-slate-700 text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section id="functions" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cormorant">
              Functions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive message queuing architecture designed for high-performance real-time data processing and transaction management.
            </p>
          </div>

          {/* Interactive Triangle Diagram */}
          <div className="relative w-full max-w-5xl mx-auto" style={{ minHeight: '500px' }}>
            {/* RQ Node - Top */}
            <div 
              className={`absolute transition-all duration-500 ease-out cursor-pointer ${hoveredNode === 'RQ' ? 'z-30' : 'z-10'}`}
              style={{
                left: '50%',
                top: hoveredNode === 'RQ' ? '1%' : '3%',
                transform: `translate(-50%, 0) scale(${hoveredNode === 'RQ' ? 1.15 : hoveredNode ? 0.85 : 1})`,
              }}
              onMouseEnter={() => setHoveredNode('RQ')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="relative">
                {/* Circular Background */}
                <div className="w-48 h-48 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">RQ</div>
                    <div className="text-sm text-slate-300 font-semibold">Real time</div>
                    <div className="text-sm text-slate-300 font-semibold">Message Queuing</div>
                  </div>
                </div>
                {/* Details List */}
                <div className="max-w-xs">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-800 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Multi-market data real-time processing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-800 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Distributed data real-time interface</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-800 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Manage over 100,000 keys</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-800 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">32 Events/Key</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-800 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Event Driven Push &amp; Full</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FQ Node - Bottom Left */}
            <div 
              className={`absolute transition-all duration-500 ease-out cursor-pointer ${hoveredNode === 'FQ' ? 'z-30' : 'z-10'}`}
              style={{
                left: hoveredNode === 'FQ' ? '8%' : '10%',
                bottom: hoveredNode === 'FQ' ? '1%' : '3%',
                transform: `scale(${hoveredNode === 'FQ' ? 1.15 : hoveredNode ? 0.85 : 1})`,
              }}
              onMouseEnter={() => setHoveredNode('FQ')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="relative">
                {/* Circular Background */}
                <div className="w-48 h-48 rounded-full bg-slate-400 flex items-center justify-center mb-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">FQ</div>
                    <div className="text-sm text-white font-semibold">Stored &amp; Forwarding</div>
                    <div className="text-sm text-white font-semibold">Queuing</div>
                  </div>
                </div>
                {/* Details List */}
                <div className="max-w-xs">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-400 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Inter-channel interface</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-400 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Stored &amp; forwarding message processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MQ Node - Bottom Right */}
            <div 
              className={`absolute transition-all duration-500 ease-out cursor-pointer ${hoveredNode === 'MQ' ? 'z-30' : 'z-10'}`}
              style={{
                right: hoveredNode === 'MQ' ? '8%' : '10%',
                bottom: hoveredNode === 'MQ' ? '1%' : '3%',
                transform: `scale(${hoveredNode === 'MQ' ? 1.15 : hoveredNode ? 0.85 : 1})`,
              }}
              onMouseEnter={() => setHoveredNode('MQ')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="relative">
                {/* Circular Background */}
                <div className="w-48 h-48 rounded-full bg-slate-900 flex items-center justify-center mb-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">MQ</div>
                    <div className="text-sm text-slate-300 font-semibold">Transaction</div>
                    <div className="text-sm text-slate-300 font-semibold">Message Queuing</div>
                  </div>
                </div>
                {/* Details List */}
                <div className="max-w-xs">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-900 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Transaction message routing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-900 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Client/server computing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-900 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Clustering for transaction processing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-900 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Resource management</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-900 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Application program/transaction support</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-record-circle-fill text-slate-900 mr-2 mt-1 text-xs flex-shrink-0"></i>
                      <span className="text-sm text-slate-700">Message exchange/message queue</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {/* RQ to FQ - Left diagonal */}
              <line 
                x1="50%" 
                y1="15%" 
                x2="24%" 
                y2="55%" 
                stroke="#94a3b8" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                className="transition-all duration-500"
              />
              {/* FQ to MQ - Bottom horizontal */}
              <line 
                x1="28%" 
                y1="58%" 
                x2="72%" 
                y2="58%" 
                stroke="#94a3b8" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                className="transition-all duration-500"
              />
              {/* MQ to RQ - Right diagonal */}
              <line 
                x1="76%" 
                y1="55%" 
                x2="50%" 
                y2="15%" 
                stroke="#94a3b8" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                className="transition-all duration-500"
              />
            </svg>

            {/* Left Diagonal Label - Real-time Message */}
            <div className="absolute pointer-events-none" style={{ left: '30%', top: '28%', zIndex: 1 }}>
              <div className="text-slate-400 font-semibold text-sm transform -rotate-45">
                <div>Real-time Message</div>
                <div>(Pusher &amp; Puller)</div>
              </div>
            </div>

            {/* Bottom Label - Transaction & Application */}
            <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none" style={{ bottom: '12%', zIndex: 1 }}>
              <div className="text-slate-400 font-semibold text-sm text-center">
                <div>Transaction &amp; Application</div>
                <div>(Message Publisher &amp; Subscriber)</div>
              </div>
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
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive server platform architecture designed for high-performance trading operations and optimal scalability. 
              Our multi-tier structure ensures robust data processing with enterprise-grade reliability and fault tolerance.
            </p>
          </div>
          <div className="mt-12">
            <img 
              src="https://static.readdy.ai/image/9843b11cb216f42dfb814e267ad2d570/2701784a9882726c66446f8b68280356.png"
              alt="Server Platform Architecture Diagram"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
