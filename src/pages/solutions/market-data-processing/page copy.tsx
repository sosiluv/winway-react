
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function OMSPage() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const leftFeatures = [
    {
      title: 'Speed Advantage',
      description: 'Lightning-fast execution boosts fill rates and cuts down slippage.  Processes order flow with microsecond latency from entry to execution, minimizing delay in high-frequency trading environments.',
      details: []
    },
    {
      title: 'Event-Driven Architecture',
      description: 'Employs an asynchronous, event-based design to process multiple market and client events in parallel for maximum throughput.',
      details: []
    },
    {
      title: 'Customization',
      description: 'Flexible execution logic designed for different asset classes and strategies. Supports strategy-specific rules and parameters tailored to different asset classes, products, and trading styles.',
      details: []
    }
  ];

  const rightFeatures = [
    {
      title: 'Pre-Trade Risk and Compliance Checks',
      description: 'Performs real-time validation of trading limits, quote accuracy, and compliance rules before execution.',
      details: []
    },
    {
      title: 'Horizontal Scalability',
      description: 'Utilizes distributed and microservices-based architecture to handle growing order volumes without sacrificing performance.',
      details: []
    },
    {
      title: 'Exchange & Broker Connectivity',
      description: 'Supports multiple exchange protocols (FIX, iLink3) and APIs for seamless integration with brokers and liquidity providers.',
      details: []
    }
  ];

  const applications = [
    {
      icon: 'ri-flashlight-line',
      title: 'Ultra-high-speed trading platforms',
      description: 'Built for environments demanding microsecond-level execution and minimal latency'
    },
    {
      icon: 'ri-arrow-right-line',
      title: 'DMA (Direct Market Access) systems',
      description: 'Direct connectivity to exchanges with optimized routing and execution'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Proprietary trading (Prop) systems',
      description: 'Comprehensive order management for proprietary trading operations'
    },
    {
      icon: 'ri-funds-line',
      title: 'Market maker and liquidity provider systems',
      description: 'Real-time quote management and position tracking for liquidity provision'
    },
    {
      icon: 'ri-exchange-line',
      title: 'Arbitrage and algorithmic trading environments',
      description: 'High-frequency execution capabilities for complex trading strategies'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                F1Win OMS (Order Management System)
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Shared Memory–Based Low Latency Trading Engine
              </p>
            </div>
            <div className="lg:justify-self-end w-full">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20interface%20with%20sophisticated%20order%20routing%20displays%2C%20institutional%20trading%20operations%20center%20with%20advanced%20execution%20monitoring%2C%20silver%20and%20navy%20corporate%20design%2C%20modern%20OMS%20dashboard%20with%20order%20flow%20visualization&width=600&height=400&seq=oms-hero&orientation=landscape"
                alt="F1Win Order Management System"
                className="w-full h-80 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

     {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-relaxed font-cormorant text-center">
            F1Win delivers<br />
            ultra-fast, event-driven order management across the entire trading lifecycle.<br />
            Built for high-frequency and high-volume environments,<br />
            it minimizes execution latency and ensures seamless, reliable performance<br />
            under the most demanding market conditions.
          </h2>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-16 font-cormorant">
            Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-slate-50 p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-4">
                  <i className={`${app.icon} text-2xl text-slate-700`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-cormorant">
                  {app.title}
                </h3>
                <p className="text-sm text-slate-700">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 font-cormorant">
              Key Features
            </h2>
            <p className="text-lg text-slate-600">
              Professional order management capabilities designed for ultra-low latency trading operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="border-r-4 border-slate-700 pr-6">
                  <button
                    onClick={() => toggleFeature(index)}
                    className="w-full text-left cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between font-cormorant">
                      {feature.title}
                      {feature.details.length > 0 && (
                        <i className={`ri-arrow-${expandedFeature === index ? 'up' : 'down'}-s-line text-slate-700 ml-2 text-3xl`}></i>
                      )}
                    </h3>
                  </button>
                  {feature.description && (
                    <p className="text-sm text-slate-600 mb-2">{feature.description}</p>
                  )}
                  {feature.details.length > 0 && expandedFeature === index && (
                    <ul className="space-y-2 mt-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <i className="ri-check-line text-slate-600 mr-2 mt-0.5 flex-shrink-0"></i>
                          <span className="text-sm text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Middle Column - Image */}
            <div className="flex items-start justify-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20dashboard%20with%20comprehensive%20order%20tracking%20interface%2C%20real-time%20execution%20monitoring%20displays%2C%20institutional%20trading%20workstation%20with%20sophisticated%20silver%20and%20navy%20color%20scheme%2C%20modern%20OMS%20platform%20showing%20order%20flow%20and%20portfolio%20positions&width=400&height=500&seq=oms-interface-compact&orientation=portrait"
                alt="F1Win Order Management System Interface"
                className="w-full h-auto max-h-96 object-cover object-top"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {rightFeatures.map((feature, index) => (
                <div key={index + leftFeatures.length} className="border-l-4 border-slate-700 pl-6">
                  <button
                    onClick={() => toggleFeature(index + leftFeatures.length)}
                    className="w-full text-left cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between font-cormorant">
                      {feature.title}
                      {feature.details.length > 0 && (
                        <i className={`ri-arrow-${expandedFeature === (index + leftFeatures.length) ? 'up' : 'down'}-s-line text-slate-700 ml-2 text-3xl`}></i>
                      )}
                    </h3>
                  </button>
                  {feature.description && (
                    <p className="text-sm text-slate-600 mb-2">{feature.description}</p>
                  )}
                  {feature.details.length > 0 && expandedFeature === (index + leftFeatures.length) && (
                    <ul className="space-y-2 mt-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <i className="ri-check-line text-slate-600 mr-2 mt-0.5 flex-shrink-0"></i>
                          <span className="text-sm text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Performance You Can Trust
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            F1Win offers the foundation for a next-generation trading environment — delivering speed, precision, and stability demanded by today's competitive financial markets.
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
