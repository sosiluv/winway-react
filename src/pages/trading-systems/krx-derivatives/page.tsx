
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function KRXDerivativesPage() {
  const { t } = useTranslation('common');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [expandedAdvancedFeature, setExpandedAdvancedFeature] = useState<number | null>(null);
  const [selectedHTS, setSelectedHTS] = useState(0);
  const [selectedMTS, setSelectedMTS] = useState(0);
  const [showHTSModal, setShowHTSModal] = useState(false);
  const [showMTSModal, setShowMTSModal] = useState(false);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const toggleAdvancedFeature = (index: number) => {
    setExpandedAdvancedFeature(expandedAdvancedFeature === index ? null : index);
  };

  const keyFeatures = [
    {
      title: 'Scalability',
      details: [
        'Limited impact from adding or changing exchanges/vendors, minimizing additional development scope',
        'Provides API sets for futures/options market data',
        'When adding a new exchange, changes can be handled via configuration rather than program modification',
        'Minimal development required for vendor changes/additions (only stream data format handling needs updates)'
      ]
    },
    {
      title: 'Modular Design',
      details: [
        'Business layer, data processing layer, and communication layer are clearly separated',
        'Each module can independently respond to changes in development environment and requirements',
        'Enables quick and flexible response to new feature additions or business logic changes'
      ]
    },
    {
      title: 'Real-Time Market Data',
      details: [
        'Processes real-time data with minimal latency',
        'Allows separate data retention period settings for tick and minute data'
      ]
    },
    {
      title: 'Dynamic Configuration',
      details: [
        'Independent configuration available for each exchange',
        'Settings include communication methods and protocols for market data reception',
        'Adjustable data retention period',
        'Time zone configuration per exchange',
        'Trading hour configuration',
        'Batch process scheduling',
        'Watchdog settings: monitors data reception status and sends error reports (via SMS)',
        'Database configuration (CISAM, Altibase, MongoDB)'
      ]
    },
    {
      title: 'Event Scheduler',
      details: [
        'Batch job scheduling for each exchange (market open/close/settlement handling, etc.)',
        'Holiday management per exchange'
      ]
    },
    {
      title: 'Database Support',
      details: [
        'Supports CISAM, Altibase, and MongoDB (NoSQL)',
        'Unified API set for database access'
      ]
    },
    {
      title: 'Monitoring',
      details: [
        'Monitors data reception status by exchange',
        'Notifies administrator in case of system errors or failures'
      ]
    }
  ];

  const advancedFeatures = [
    {
      title: 'High-Performance Architecture',
      details: [
        'Built for speed and stability, the system leverages in-memory databases and shared-memory ledger structures to deliver lightning-fast order execution.',
        'Through asynchronous processing and optimized Oracle sequencing, it minimizes latency and system locks, ensuring seamless, high-volume trading even in peak market conditions.'
      ]
    },
    {
      title: 'Intelligent Risk & Margin Management',
      details: [
        'Empowered with real-time and next-day margin estimation, the system provides proactive control over market exposure.',
        'Automated take-profit and stop-loss orders safeguard assets based on evaluated collateral, while post-margin and margin call management functions enable consistent risk mitigation and operational confidence.'
      ]
    },
    {
      title: 'Smart Automation & Integration',
      details: [
        'Routine operations are streamlined through automated product registration and modification, with margin, fee, and related data linked instantly across all modules.',
        'This end-to-end integration reduces manual input, boosts operational efficiency, and ensures data accuracy across departments.'
      ]
    },
    {
      title: 'Advanced Reporting & Back-Office Efficiency',
      details: [
        'Comprehensive reporting, ledger, and voucher management tools support fast and transparent oversight of all trading activities.',
        'Back-office workflows are simplified, improving accuracy and freeing teams to focus on higher-value analysis and decision-making.'
      ]
    },
    {
      title: 'Professional Trading & Analytical Tools',
      details: [
        'Server-side conditional order system (OMS)',
        'Asset management and risk control module (RMS)',
        'Option pricing and margin calculators',
        'Strategy screens for futures and options trading'
      ]
    }
  ];

  const htsOptions = [
    {
      title: 'Comprehensive Order Window',
      description: 'Advanced order management interface with multiple order types and real-time execution controls. Features comprehensive order book display, advanced order types including stop-loss and take-profit orders, real-time position monitoring, and integrated risk management tools.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20trading%20application%20interface%20showing%20comprehensive%20order%20window%20with%20multiple%20order%20types%2C%20advanced%20order%20management%20system%2C%20clean%20modern%20UI%20design%20with%20silver%20and%20navy%20color%20scheme%2C%20sophisticated%20trading%20dashboard%20with%20order%20book%2C%20price%20charts%2C%20and%20execution%20controls&width=800&height=500&seq=krx-hts-comprehensive-order&orientation=landscape'
    },
    {
      title: 'One-Click Order',
      description: 'Streamlined one-click trading interface for rapid order execution with minimal latency. Designed for high-frequency trading scenarios with instant buy/sell buttons, pre-configured order sizes, and lightning-fast execution capabilities for professional traders.',
      image: 'https://readdy.ai/api/search-image?query=One-click%20trading%20interface%20with%20streamlined%20order%20execution%2C%20quick%20trade%20buttons%2C%20simplified%20trading%20controls%2C%20modern%20minimalist%20design%20with%20silver%20and%20navy%20color%20palette%2C%20professional%20trading%20application%20with%20instant%20execution%20capabilities&width=800&height=500&seq=krx-hts-one-click-order&orientation=landscape'
    }
  ];

  const mtsOptions = [
    {
      title: 'Order',
      description: 'Intuitive mobile order interface with streamlined controls for placing trades on the go. Features touch-optimized order entry forms, swipe gestures for quick actions, and simplified order management designed specifically for mobile trading.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20trading%20app%20order%20interface%20with%20clean%20modern%20design%2C%20order%20entry%20forms%2C%20buy%20and%20sell%20buttons%2C%20professional%20mobile%20trading%20application%20with%20silver%20and%20navy%20color%20scheme%2C%20smartphone%20trading%20interface%20with%20order%20management%20controls&width=800&height=500&seq=krx-mts-order&orientation=landscape'
    },
    {
      title: 'Watchlist',
      description: 'Customizable watchlist for tracking favorite instruments with real-time price updates. Allows users to monitor multiple markets simultaneously, set price alerts, and quickly access detailed information about their preferred trading instruments.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20watchlist%20interface%20showing%20favorite%20stocks%20and%20instruments%2C%20clean%20list%20design%20with%20price%20changes%2C%20mobile%20trading%20app%20with%20silver%20and%20navy%20color%20palette%2C%20professional%20smartphone%20interface%20for%20market%20monitoring&width=800&height=500&seq=krx-mts-watchlist&orientation=landscape'
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
                KRX DERITIVES TRADING SYSTEMS
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Specialized trading systems designed for Korea Exchange derivatives markets, featuring local market connectivity, regulatory compliance, and optimized execution capabilities.
              </p>
              
               {/* Navigation Categories - Minimal Design */}
            <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center">
                <button
                  onClick={() => scrollToSection('real-time-market-data')}
                  className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
                >
                  Real-Time Market Data System
                </button>
                <button
                  onClick={() => scrollToSection('key-features')}
                  className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
                >
                  Key Features
                </button>
                <button
                  onClick={() => scrollToSection('ledger-system')}
                  className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
                >
                  Ledger System
                </button>
                <button
                  onClick={() => scrollToSection('advanced-features')}
                  className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
                >
                  Advanced Features
                </button>
              </div>
            </div>
            <div className="lg:justify-self-end w-full">
            </div>
          </div>
      </section>

      {/* Real-Time Market Data System Section */}
      <section id="real-time-market-data" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-800 mb-6 font-cormorant">
              Real-Time Market Data System
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced real-time market data processing system designed for high-frequency trading environments. Delivers ultra-low latency data feeds with comprehensive market coverage and intelligent data distribution architecture.
            </p>
          </div>
          <div className="mt-12">
            <img 
              src="https://readdy.ai/api/search-image?query=Real-time%20market%20data%20system%20flow%20diagram%20showing%20data%20streams%2C%20processing%20nodes%2C%20distribution%20networks%2C%20high-frequency%20trading%20infrastructure%2C%20professional%20technical%20diagram%20with%20clean%20lines%2C%20silver%20and%20navy%20color%20scheme%2C%20modern%20enterprise%20system%20design%20with%20data%20flow%20arrows%20and%20processing%20components&width=1200&height=600&seq=real-time-market-data-flow&orientation=landscape"
              alt="Real-Time Market Data System Flow Diagram"
              className="w-full h-96 object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-20 bg-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 inline font-cormorant">
              Key Features
            </h2>
            <span className="text-slate-600 ml-4">
              - Advanced KRX derivatives trading capabilities for Korean market operations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="border border-white overflow-hidden">
                <button
                  onClick={() => toggleFeature(index)}
                  className="w-full p-6 text-left hover:bg-stone-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between">
                        {feature.title}
                        <i className={`ri-arrow-${expandedFeature === index ? 'up' : 'down'}-s-line text-slate-500 ml-2`}></i>
                      </h3>
                    </div>
                  </div>
                </button>
                
                {expandedFeature === index && (
                  <div className="px-6 pb-6 border-t border-white bg-stone-100">
                    <ul className="space-y-2 mt-4">
                      {feature.details.map((detail, detailIndex) => (
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

      {/* HTS Section */}
      <section id="hts-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
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
      <section id="ledger-system" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-800 mb-6 font-cormorant">
              Ledger System
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive ledger management system providing real-time position tracking, automated settlement processing, and integrated risk management. Ensures accurate record-keeping and regulatory compliance for all trading activities.
            </p>
          </div>
          <div className="mt-12">
            <img 
              src="https://readdy.ai/api/search-image?query=Ledger%20system%20flow%20diagram%20showing%20transaction%20processing%2C%20settlement%20workflows%2C%20position%20management%2C%20risk%20controls%2C%20professional%20financial%20system%20diagram%20with%20clean%20design%2C%20silver%20and%20navy%20color%20palette%2C%20structured%20ledger%20management%20visualization%20with%20interconnected%20modules&width=1200&height=600&seq=ledger-system-flow&orientation=landscape"
              alt="Ledger System Flow Diagram"
              className="w-full h-96 object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="advanced-features" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 inline font-cormorant">
              Advanced Features
            </h2>
            <span className="text-slate-300 ml-4">
              - Professional-grade trading capabilities for institutional operations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="border border-white overflow-hidden">
                <button
                  onClick={() => toggleAdvancedFeature(index)}
                  className="w-full p-6 text-left hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                        {feature.title}
                        <i className={`ri-arrow-${expandedAdvancedFeature === index ? 'up' : 'down'}-s-line text-slate-300 ml-2`}></i>
                      </h3>
                    </div>
                  </div>
                </button>
                
                {expandedAdvancedFeature === index && (
                  <div className="px-6 pb-6 border-t border-white bg-slate-800">
                    <div className="space-y-4 mt-4">
                      {feature.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-300 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cormorant">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions in Korea in revolutionizing their derivatives trading operations with our comprehensive KRX trading solutions. Experience unparalleled performance, reliability, and innovation.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Trusted by leading Korean financial institutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              Schedule Consultation
            </button>
            <button className="border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center cursor-pointer">
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
