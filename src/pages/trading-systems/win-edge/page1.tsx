
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function GlobalEquityPage() {
  const { t } = useTranslation('common');
  const [expandedConnection, setExpandedConnection] = useState<number | null>(null);
  const [selectedHTS, setSelectedHTS] = useState(0);
  const [showHTSModal, setShowHTSModal] = useState(false);
  const [expandedExternalIntegration, setExpandedExternalIntegration] = useState<number | null>(null);
  const [expandedLedgerSystem, setExpandedLedgerSystem] = useState<number | null>(null);

  const toggleConnection = (index: number) => {
    setExpandedConnection(expandedConnection === index ? null : index);
  };

  const toggleExternalIntegration = (index: number) => {
    setExpandedExternalIntegration(expandedExternalIntegration === index ? null : index);
  };

  const toggleLedgerSystem = (index: number) => {
    setExpandedLedgerSystem(expandedLedgerSystem === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const htsOptions = [
    {
      title: 'Professional Trading Interface',
      description: 'Comprehensive desktop trading platform with advanced charting, real-time market data, and sophisticated order management tools. Features customizable layouts, multi-monitor support, and integrated risk management for professional equity traders.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20equity%20trading%20interface%20with%20multiple%20screens%20showing%20stock%20charts%2C%20order%20books%2C%20portfolio%20positions%2C%20advanced%20trading%20dashboard%20with%20silver%20and%20navy%20color%20scheme%2C%20sophisticated%20desktop%20trading%20platform%20with%20real-time%20market%20data%20displays&width=800&height=500&seq=equity-hts-professional&orientation=landscape'
    },
    {
      title: 'Algorithmic Trading Console',
      description: 'Advanced algorithmic trading interface with strategy development tools, backtesting capabilities, and automated execution systems. Designed for quantitative traders with complex strategy management and performance monitoring features.',
      image: 'https://readdy.ai/api/search-image?query=Algorithmic%20trading%20console%20with%20strategy%20development%20interface%2C%20backtesting%20charts%2C%20automated%20trading%20controls%2C%20quantitative%20analysis%20tools%2C%20professional%20silver%20and%20navy%20design%2C%20sophisticated%20algo%20trading%20platform%20with%20performance%20metrics&width=800&height=500&seq=equity-hts-algorithmic&orientation=landscape'
    }
  ];

  const fepCategories = [
    {
      title: 'Real-Time Data Reception & Distribution',
      details: [
        'Reliable reception of live and delayed market data across multiple exchanges',
        'Intelligent data filtering for optimized performance and bandwidth efficiency',
        'Dynamic filtering rate control through environment files — adjustable in real time without system interruption',
        'High-speed data transmission to connection and database servers via UDP Multicast, ensuring fast and stable distribution'
      ]
    },
    {
      title: 'Tick Data Management & Storage',
      details: [
        'Long-term tick data retention of over six months using Sam file format',
        'Automated periodic tick data backups to secure trading records',
        'Flexible tick data extraction by date or individual instrument for analysis and auditing'
      ]
    },
    {
      title: 'Monitoring & System Visibility',
      details: [
        'Process status tracking and performance overview in real time',
        'Comprehensive input/output data count aggregation and inquiry',
        'Access to instrument master data, including closing and current prices',
        'Exchange session status monitoring for trading hour management',
        'Market data line usage analysis and time-based data volume tracking',
        'Direct monitoring data inquiry and modification, enabling quick issue response and system tuning'
      ]
    }
  ];

  const connectionCategories = [
    {
      title: 'Intelligent Connection Management',
      details: [
        'Efficiently manage all client connections in real time',
        'Send targeted or system-wide messages instantly to connected users',
        'Trigger automated notifications upon event occurrences',
        'Monitor user connection status, usage statistics, and session activity',
        'Forcefully terminate specific or all connections when necessary for security or maintenance',
        'Comprehensive connection and event logging, with automated backup for reliability and traceability'
      ]
    },
    {
      title: 'Advanced Investment Information Services',
      details: [
        'Real-time access to market data and quote information',
        'Continuous live and delayed quote updates for seamless data delivery',
        'Tiered service control based on user authorization and account status (real-time vs delayed)',
        'Maintain individual customer service history for auditing and support',
        'Isolated quote query and real-time stream processing, ensuring stable and interference-free performance',
        'Provide comprehensive chart data by day, week, month, year, tick, or minute intervals',
        'Enable shared-memory data viewing and modification for real-time adjustments',
        'Support exchange-specific data backup and initialization policies to align with market rules and local requirements'
      ]
    },
    {
      title: 'Reliable Data Management',
      details: [
        'Historical data storage and retrieval via DBMS for research, analysis, and compliance',
        'Robust architecture ensuring long-term data integrity and high accessibility'
      ]
    }
  ];

  const externalIntegrationFeatures = [
    {
      title: 'Core System Connectivity',
      details: [
        'Seamless linkage with the mainframe (core system) for real-time data synchronization',
        'Provides current price data at scheduled intervals and closing price data after market close',
        'Stable and secure communication through the Tmax Client Library',
        'Supports login information retrieval, user-specific exchange authorization, and account information access'
      ]
    },
    {
      title: 'Data Provider Integration',
      details: [
        'Connects with market data feed providers for real-time global market coverage',
        'Integrates international corporate financial information feeds to enhance analytical depth and investment insights'
      ]
    },
    {
      title: 'Client-Side Interface Compatibility',
      details: [
        'Delivers customized TR (Transaction Request) processing programs developed in compliance with each client\'s standard development guide',
        'Ensures high interoperability and compatibility across different financial institutions and partner systems'
      ]
    }
  ];

  const ledgerSystemFeatures = [
    {
      icon: 'ri-exchange-line',
      title: 'Comprehensive Order & Settlement Management',
      description: 'Complete trading operations from order placement to final settlement with multi-currency support',
      details: [
        'Supports real-time online, emergency, and scheduled orders for seamless trading operations',
        'Enables fractional trading and integrated margin management across KRW and multiple foreign currencies',
        'Provides automatic currency conversion, ensuring global trading flexibility',
        'Offers real-time order, execution, and transaction tracking, along with detailed balance evaluation',
        'Includes error trade correction and generation of internal and regulatory trade reports',
        'Manages all commissions and expenses, including customer fees, overseas broker charges, settlement costs, and stamp duties',
        'Integrates full overseas broker management, covering accounts, settlements, and commissions',
        'Automates capital gains tax calculation and reporting',
        'Handles the entire settlement lifecycle — margin release, pending settlement, settlement instructions, and deferrals',
        'Conducts data reconciliation with overseas brokers and manages exchange-specific settlement schedules',
        'Transmits settlement data directly to the Korea Securities Depository (KSD), including trade and commission details'
      ]
    },
    {
      icon: 'ri-building-line',
      title: 'Proprietary Trading Management',
      description: 'Institutional trading activities management from order to settlement and closing',
      details: [
        'Manages institutional trading activities from product order to settlement and closing',
        'Processes product rights deposit/withdrawal and maintains accurate internal ledgers',
        'Provides real-time trading limit and profit/loss control for optimized performance'
      ]
    },
    {
      icon: 'ri-settings-4-line',
      title: 'Instrument & System Administration',
      description: 'Centralized management of trading instruments and system configurations',
      details: [
        'Centralized instrument master management for all tradable products',
        'Configurable holiday and trading session management by exchange',
        'Automated market data usage fee and fractional unit management'
      ]
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Corporate Action & Rights Processing',
      description: 'Complete corporate actions and rights management with automated processing',
      details: [
        'Complete rights information management for corporate actions',
        'Automates rights processing such as record date management, allocation, tax calculation, deposits, withdrawals, and settlements',
        'Supports rights applications, including paid subscriptions, dissent submissions, and buyback requests',
        'Generates detailed corporate action and rights reports for compliance and recordkeeping'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-cormorant">
              GLOBAL EQUITY TRADING
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Advanced equity trading solutions for global markets with real-time execution,
              comprehensive risk management, and seamless integration capabilities.
            </p>
            
            {/* Navigation Categories - Minimal Design */}
            <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center">
              <button
                onClick={() => scrollToSection('hts-section')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                HTS 
              </button>
              <button
                onClick={() => scrollToSection('fep-section')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                FEP
              </button>
              <button
                onClick={() => scrollToSection('external-system-integration')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                External System Integration
              </button>
              <button
                onClick={() => scrollToSection('connection-section')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                Connection & Database Server
              </button>
              <button
                onClick={() => scrollToSection('ledger-system')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                Ledger System
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HTS Section */}
      <section id="hts-section" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-cormorant">
              HTS (Home Trading System)
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Advanced desktop trading interface designed for professional equity traders with comprehensive order management and real-time market analysis capabilities.
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

      {/* FEP Section */}
      <section id="fep-section" className="py-20 bg-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-8 font-cormorant">
              FEP (Front-End Processor) System — Key Features
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced front-end processing system designed for high-performance market data handling and distribution across multiple exchanges and trading platforms.
            </p>
          </div>
          
          {/* Desktop View - All 3 boxes in one line */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {fepCategories.map((category, index) => (
              <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center font-cormorant">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet View - Expandable cards */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {fepCategories.map((category, index) => (
              <div key={index} className="border border-white overflow-hidden">
                <button
                  onClick={() => toggleConnection(index)}
                  className="w-full p-6 text-left hover:bg-stone-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between">
                        {category.title}
                        <i className={`ri-arrow-${expandedConnection === index ? 'up' : 'down'}-s-line text-slate-500 ml-2`}></i>
                      </h3>
                    </div>
                  </div>
                </button>
                
                {expandedConnection === index && (
                  <div className="px-6 pb-6 border-t border-white bg-stone-100">
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

      {/* External System Integration Section */}
      <section id="external-system-integration" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white mb-8 font-cormorant">
              External System Integration — Key Features
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive integration capabilities for seamless connectivity with core systems, data providers, and client interfaces across multiple financial institutions.
            </p>
          </div>

          {/* Desktop View - All 3 boxes in one line */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {externalIntegrationFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <h3 className="text-xl font-bold text-white mb-6 text-center font-cormorant">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-slate-300 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet View - Expandable cards */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalIntegrationFeatures.map((feature, index) => (
              <div key={index} className="border border-white overflow-hidden">
                <button
                  onClick={() => toggleExternalIntegration(index)}
                  className="w-full p-6 text-left hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                        {feature.title}
                        <i className={`ri-arrow-${expandedExternalIntegration === index ? 'up' : 'down'}-s-line text-slate-300 ml-2`}></i>
                      </h3>
                    </div>
                  </div>
                </button>
                
                {expandedExternalIntegration === index && (
                  <div className="px-6 pb-6 border-t border-white bg-slate-700">
                    <ul className="space-y-2 mt-4">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <i className="ri-check-line text-slate-300 mr-2 mt-0.5 flex-shrink-0"></i>
                          <span className="text-sm text-slate-300">{detail}</span>
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

      {/* Connection & Database Server Section */}
      <section id="connection-section" className="py-20 bg-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 inline font-cormorant">
              Connection &amp; Database Server — Key Features
            </h2>
            <span className="text-slate-600 ml-4">
              - Advanced connection management and data services for equity trading operations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectionCategories.map((category, index) => (
              <div key={index} className="border border-white overflow-hidden">
                <button
                  onClick={() => toggleConnection(index)}
                  className="w-full p-6 text-left hover:bg-stone-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between">
                        {category.title}
                        <i className={`ri-arrow-${expandedConnection === index ? 'up' : 'down'}-s-line text-slate-500 ml-2`}></i>
                      </h3>
                    </div>
                  </div>
                </button>
                
                {expandedConnection === index && (
                  <div className="px-6 pb-6 border-t border-white bg-stone-100">
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

      {/* Ledger System Section */}
      <section id="ledger-system" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 inline font-cormorant">
              Ledger System — Key Features
            </h2>
            <span className="text-slate-600 ml-4">
              - Complete trading lifecycle management and settlement processing
            </span>
          </div>

          {/* Comprehensive Order & Settlement Management - Full Width */}
          <div className="mb-12">
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-exchange-line text-2xl text-slate-700"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Comprehensive Order & Settlement Management
                  </h3>
                  <p className="text-sm text-slate-600">Complete trading operations from order placement to final settlement with multi-currency support</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Supports real-time online, emergency, and scheduled orders for seamless trading operations</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Enables fractional trading and integrated margin management across KRW and multiple foreign currencies</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Provides automatic currency conversion, ensuring global trading flexibility</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Offers real-time order, execution, and transaction tracking, along with detailed balance evaluation</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Includes error trade correction and generation of internal and regulatory trade reports</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Manages all commissions and expenses, including customer fees, overseas broker charges, settlement costs, and stamp duties</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Integrates full overseas broker management, covering accounts, settlements, and commissions</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Automates capital gains tax calculation and reporting</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Handles the entire settlement lifecycle — margin release, pending settlement, settlement instructions, and deferrals</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Conducts data reconciliation with overseas brokers and manages exchange-specific settlement schedules</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-slate-700 leading-relaxed">Transmits settlement data directly to the Korea Securities Depository (KSD), including trade and commission details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Three Features in One Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proprietary Trading Management */}
            <div>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-building-line text-2xl text-slate-700"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Proprietary Trading Management
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">Institutional trading activities management from order to settlement and closing</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Manages institutional trading activities from product order to settlement and closing</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Processes product rights deposit/withdrawal and maintains accurate internal ledgers</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Provides real-time trading limit and profit/loss control for optimized performance</span>
                </div>
              </div>
            </div>

            {/* Instrument & System Administration */}
            <div>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-settings-4-line text-2xl text-slate-700"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Instrument & System Administration
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">Centralized management of trading instruments and system configurations</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Centralized instrument master management for all tradable products</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Configurable holiday and trading session management by exchange</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Automated market data usage fee and fractional unit management</span>
                </div>
              </div>
            </div>

            {/* Corporate Action & Rights Processing */}
            <div>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-list-3-line text-2xl text-slate-700"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Corporate Action & Rights Processing
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">Complete corporate actions and rights management with automated processing</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Complete rights information management for corporate actions</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Automates rights processing such as record date management, allocation, tax calculation, deposits, withdrawals, and settlements</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Supports rights applications, including paid subscriptions, dissent submissions, and buyback requests</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-slate-600 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-slate-700 leading-relaxed">Generates detailed corporate action and rights reports for compliance and recordkeeping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Trading Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cormorant">
            Ready to Transform Your Equity Trading?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions worldwide in revolutionizing their equity trading operations with our comprehensive global equity trading solutions. Experience unparalleled performance, reliability, and innovation.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Trusted by leading global financial institutions
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
    </div>
  );
}
