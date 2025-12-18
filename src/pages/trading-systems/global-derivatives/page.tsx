
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function GlobalDerivativesPage() {
  const { t } = useTranslation('common');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [expandedLedger, setExpandedLedger] = useState<number | null>(null);
  const [selectedHTS, setSelectedHTS] = useState(0);
  const [selectedMTS, setSelectedMTS] = useState(0);
  const [showHTSModal, setShowHTSModal] = useState(false);
  const [showMTSModal, setShowMTSModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const toggleLedger = (index: number) => {
    setExpandedLedger(expandedLedger === index ? null : index);
  };

  const keyFeatures = [
    {
      title: 'Scalability',
      details: [
        'Minimal impact from exchange/vendor changes with optimized architecture',
        'Additional development requirements are minimized',
        'Provides API sets for market data such as futures and options',
        'Configuration changes can be handled without modifying transaction programs'
      ]
    },
    {
      title: 'Modularity',
      details: [
        'Clear separation of business layer, data processing layer, and communication layer',
        'Each module can be developed and maintained independently according to requirements',
        'Allows quick and flexible response to new functions or business logic changes'
      ]
    },
    {
      title: 'Real-Time Market Data',
      details: [
        'Processes data in real time with minimal latency',
        'Enables configuration of data retention periods by tick or minute units'
      ]
    },
    {
      title: 'Dynamic Configuration',
      details: [
        'Provides independent configuration for each exchange',
        'Communication protocols for market data and data retention period can be configured',
        'Supports data retention period setup',
        'Configurable time zones for each exchange'
      ]
    },
    {
      title: 'Event Scheduler',
      details: [
        'Supports batch job scheduling for exchange open/close/settlement processes',
        'Holiday management per exchange'
      ]
    },
    {
      title: 'Database Support',
      details: [
        'Supports CISAM, Altibase, and MongoDB (NoSQL)',
        'Allows database access through a unified API set'
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

  const htsOptions = [
    {
      title: 'Comprehensive Order Window',
      description: 'Advanced order management interface with multiple order types and real-time execution controls. Features comprehensive order book display, advanced order types including stop-loss and take-profit orders, real-time position monitoring, and integrated risk management tools.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20trading%20application%20interface%20showing%20comprehensive%20order%20window%20with%20multiple%20order%20types%2C%20advanced%20order%20management%20system%2C%20clean%20modern%20UI%20design%20with%20silver%20and%20navy%20color%20scheme%2C%20sophisticated%20trading%20dashboard%20with%20order%20book%2C%20price%20charts%2C%20and%20execution%20controls&width=800&height=500&seq=hts-comprehensive-order&orientation=landscape'
    },
    {
      title: 'One-Click Order',
      description: 'Streamlined one-click trading interface for rapid order execution with minimal latency. Designed for high-frequency trading scenarios with instant buy/sell buttons, pre-configured order sizes, and lightning-fast execution capabilities for professional traders.',
      image: 'https://readdy.ai/api/search-image?query=One-click%20trading%20interface%20with%20streamlined%20order%20execution%2C%20quick%20trade%20buttons%2C%20simplified%20trading%20controls%2C%20modern%20minimalist%20design%20with%20silver%20and%20navy%20color%20palette%2C%20professional%20trading%20application%20with%20instant%20execution%20capabilities&width=800&height=500&seq=hts-one-click-order&orientation=landscape'
    }
  ];

  const mtsOptions = [
    {
      title: 'Order',
      description: 'Intuitive mobile order interface with streamlined controls for placing trades on the go. Features touch-optimized order entry forms, swipe gestures for quick actions, and simplified order management designed specifically for mobile trading.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20trading%20app%20order%20interface%20with%20clean%20modern%20design%2C%20order%20entry%20forms%2C%20buy%20and%20sell%20buttons%2C%20professional%20mobile%20trading%20application%20with%20silver%20and%20navy%20color%20scheme%2C%20smartphone%20trading%20interface%20with%20order%20management%20controls&width=800&height=500&seq=mts-order&orientation=landscape'
    },
    {
      title: 'Watchlist',
      description: 'Customizable watchlist for tracking favorite instruments with real-time price updates. Allows users to monitor multiple markets simultaneously, set price alerts, and quickly access detailed information about their preferred trading instruments.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20watchlist%20interface%20showing%20favorite%20stocks%20and%20instruments%2C%20clean%20list%20design%20with%20price%20changes%2C%20mobile%20trading%20app%20with%20silver%20and%20navy%20color%20palette%2C%20professional%20smartphone%20interface%20for%20market%20monitoring&width=800&height=500&seq=mts-watchlist&orientation=landscape'
    },
    {
      title: 'Real-Time Price',
      description: 'Live market data with real-time price feeds and interactive charts. Provides instant access to current market prices, bid-ask spreads, volume data, and technical indicators optimized for mobile viewing and analysis.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20real-time%20price%20interface%20with%20live%20market%20data%2C%20price%20charts%2C%20bid-ask%20spreads%2C%20mobile%20trading%20application%20with%20professional%20silver%20and%20navy%20design%2C%20smartphone%20interface%20showing%20current%20market%20prices%20and%20trading%20information&width=800&height=500&seq=mts-real-time-price&orientation=landscape'
    }
  ];

  const ledgerCategories = [
    {
      icon: 'ri-bar-chart-line',
      title: 'Margin & risk management',
      details: [
        'Portfolio Margin, Total-Risk Model, Margin Simulation',
        'Risk Array File reception and monitoring',
        'Settlement price, future margin, FND (First Notice Day), LTD (Last Trading Day)',
        'Variational margin, Realtime Risk Amount, Futures maturity auto-covering',
        'FIFO netting account, Hedge account targeting',
        'Post margin/margin call respite account'
      ]
    },
    {
      icon: 'ri-exchange-line',
      title: 'Trading & Order Management',
      details: [
        'CME Seoul Hub DMA (ISV)',
        'Calendar Spread Orders',
        'Algorithm Orders (OFC, IFDone, MIT, Stop, Trailing Stop...)',
        'Prevent mistaken orders',
        'Server to Server API, Client API',
        'Account Management, Reporting & Taxes'
      ]
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Account Management, Reporting & Taxes',
      details: [
        'Real-time Market Data by User ID and Exchange',
        'Corporation customer settlement/reporting',
        'Income statement per account (MMS)',
        'Multiple FCM by product/account',
        'Automatic currency exchange',
        'Capital gains tax calculation'
      ]
    },
    {
      icon: 'ri-settings-4-line',
      title: 'Options, Physical Delivery & Simulation System',
      details: [
        'Supports premium and future options, Option CAB, exercise and assignment processing, and reservation of option exercises',
        'Handles physical delivery',
        'Includes a simulated investment system and contract engine, with tools for historical data and/or correction'
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-cormorant">
              GLOBAL DERIVATIVES TRADING SYSTEMS
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive global derivatives trading infrastructure with advanced order management, 
              execution algorithms, and multi-market connectivity for institutional trading operations.
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
                onClick={() => scrollToSection('hts-section')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                HTS
              </button>
              <button
                onClick={() => scrollToSection('mts-section')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                MTS
              </button>
              <button
                onClick={() => scrollToSection('ledger-section')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                Ledger System
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
              Advanced derivatives trading capabilities designed for institutional operations with 
              comprehensive order management and real-time market connectivity.
            </p>
          </div>
          
          {/* Horizontal Scrolling Layout */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(keyFeatures.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {keyFeatures.slice(slideIndex * 4, slideIndex * 4 + 4).map((feature, index) => (
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
        </div>
      </section>

      {/* HTS Section */}
      <section id="hts-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-cormorant">
              HTS (Home Trading System)
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Advanced desktop trading interface designed for professional traders with comprehensive order management and real-time market analysis capabilities.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex space-x-1 bg-stone-200 p-1 rounded-lg inline-flex">
              {htsOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedHTS(index)}
                  className={`px-6 py-3 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedHTS === index
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <div className="lg:col-span-1">
              <img 
                src={htsOptions[selectedHTS].image}
                alt={htsOptions[selectedHTS].title}
                className="w-full h-120 object-cover object-top"
              />
            </div>
            <div className="lg:col-span-1 bg-slate-900 p-8 flex flex-col justify-between h-120">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {htsOptions[selectedHTS].title}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  {htsOptions[selectedHTS].description}
                </p>
              </div>
              <button
                onClick={() => setShowHTSModal(true)}
                className="bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-2 self-start"
              >
                <i className="ri-fullscreen-line"></i>
                View Larger Image
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MTS Section */}
      <section id="mts-section" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-cormorant">
              MTS (Mobile Trading System)
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Mobile trading platform optimized for on-the-go trading with intuitive interface design and comprehensive market access from any device.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex space-x-1 bg-stone-200 p-1 rounded-lg inline-flex">
              {mtsOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMTS(index)}
                  className={`px-6 py-3 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedMTS === index
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-[600px]">
                <img 
                  src={mtsOptions[selectedMTS].image}
                  alt={mtsOptions[selectedMTS].title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {mtsOptions[selectedMTS].title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {mtsOptions[selectedMTS].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ledger System Section */}
      <section id="ledger-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 inline font-cormorant">
              Ledger System
            </h2>
            <span className="text-slate-600 ml-4">
              - Comprehensive ledger management for derivatives trading operations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ledgerCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleLedger(index)}
                  className="w-full p-6 text-left hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <i className={`${category.icon} text-2xl text-slate-700`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between">
                        {category.title}
                        <i className={`ri-arrow-${expandedLedger === index ? 'up' : 'down'}-s-line text-slate-500 ml-2`}></i>
                      </h3>
                    </div>
                  </div>
                </button>
                
                {expandedLedger === index && (
                  <div className="px-6 pb-6 border-t border-gray-200 bg-white">
                    <ul className="space-y-2 mt-4">
                      {category.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <i className="ri-check-line text-slate-600 mr-2 mt-0.5 flex-shrink-0"></i>
                          <span className="text-sm text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Trading Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions worldwide in revolutionizing their trading operations with our comprehensive derivatives trading solutions. Experience unparalleled performance, reliability, and innovation.
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

      {/* HTS Modal */}
      {showHTSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 max-w-6xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                {htsOptions[selectedHTS].title}
              </h3>
              <button
                onClick={() => setShowHTSModal(false)}
                className="text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <img 
              src={htsOptions[selectedHTS].image}
              alt={htsOptions[selectedHTS].title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* MTS Modal */}
      {showMTSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 max-w-6xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                {mtsOptions[selectedMTS].title}
              </h3>
              <button
                onClick={() => setShowMTSModal(false)}
                className="text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <img 
              src={mtsOptions[selectedMTS].image}
              alt={mtsOptions[selectedMTS].title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
