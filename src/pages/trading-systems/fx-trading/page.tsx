import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FXTradingPage() {
  const { t } = useTranslation('common');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [selectedHTS, setSelectedHTS] = useState(0);
  const [showHTSModal, setShowHTSModal] = useState(false);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const keyFeatures = [
    {
      title: 'Trading & Order Execution',
      details: [
        'Broker and Market Maker system support',
        'Multiple order types (One-Click/Double-Click Market, FAK/FOK, OCO, If Done, etc.)',
        'Aggregation of quotes from multiple LPs and execution at Best Bid/Offer',
        'Error-trade prevention'
      ]
    },
    {
      title: 'Account & Position Management',
      details: [
        'FIFO netting and designated hedge accounts',
        'Dealer position aggregation, monitoring, and covering (auto / semi-auto / manual)',
        'LP omnibus account reconciliation'
      ]
    },
    {
      title: 'Risk & Control Systems',
      details: [
        'Real-time risk management and automatic liquidation through RMS',
        'Server-based order control via OMS'
      ]
    },
    {
      title: 'Pricing & Reporting',
      details: [
        'Client-specific spread customization',
        'Comprehensive trade and external (regulatory) reports'
      ]
    }
  ];

  const htsOptions = [
    {
      title: 'Integrated Order Window',
      image: 'https://readdy.ai/api/search-image?query=Professional%20FX%20trading%20application%20interface%20showing%20integrated%20order%20window%20with%20currency%20pairs%2C%20real-time%20rates%2C%20order%20entry%20forms%2C%20advanced%20FX%20trading%20dashboard%20with%20silver%20and%20navy%20color%20scheme%2C%20sophisticated%20trading%20interface%20with%20market%20data%20and%20execution%20controls&width=800&height=500&seq=fx-hts-integrated-order&orientation=landscape'
    },
    {
      title: 'Mini Order Panel',
      image: 'https://readdy.ai/api/search-image?query=Compact%20FX%20trading%20mini%20order%20panel%20with%20streamlined%20order%20entry%2C%20quick%20trade%20buttons%2C%20simplified%20FX%20trading%20controls%2C%20modern%20minimalist%20design%20with%20silver%20and%20navy%20color%20palette%2C%20professional%20trading%20application%20with%20instant%20execution%20capabilities&width=800&height=500&seq=fx-hts-mini-order&orientation=landscape'
    },
    {
      title: 'FX Rate Board & Order',
      image: 'https://readdy.ai/api/search-image?query=FX%20rate%20board%20interface%20with%20real-time%20currency%20rates%2C%20bid-ask%20spreads%2C%20market%20depth%20display%2C%20integrated%20order%20placement%2C%20professional%20FX%20trading%20application%20with%20silver%20and%20navy%20design%2C%20live%20rate%20board%20with%20trading%20capabilities&width=800&height=500&seq=fx-hts-rate-board&orientation=landscape'
    },
    {
      title: 'FX Rate Table & Order',
      image: 'https://readdy.ai/api/search-image?query=FX%20rate%20table%20interface%20with%20detailed%20currency%20pair%20data%2C%20sortable%20columns%2C%20filtering%20options%2C%20order%20placement%20integration%2C%20professional%20trading%20table%20with%20silver%20and%20navy%20color%20scheme%2C%20comprehensive%20rate%20display%20with%20trading%20functions&width=800&height=500&seq=fx-hts-rate-table&orientation=landscape'
    },
    {
      title: 'FX Hedge Manager',
      image: 'https://readdy.ai/api/search-image?query=FX%20hedge%20manager%20interface%20with%20position%20analysis%2C%20risk%20assessment%20tools%2C%20hedge%20ratio%20calculations%2C%20automated%20hedging%20strategies%2C%20professional%20risk%20management%20dashboard%20with%20silver%20and%20navy%20design%2C%20advanced%20FX%20hedging%20system&width=800&height=500&seq=fx-hts-hedge-manager&orientation=landscape'
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
                FX TRADING SYSTEMS
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Comprehensive foreign exchange trading platform with advanced order management, 
                multi-bank connectivity, and sophisticated risk management for institutional FX operations.
              </p>
              
              {/* Navigation Categories */}
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
              </div>
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
              - Advanced FX trading capabilities for institutional operations
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
              Advanced desktop FX trading interface designed for professional traders with comprehensive order management and real-time market analysis capabilities.
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

          <div className="w-full">
            <img 
              src={htsOptions[selectedHTS].image}
              alt={htsOptions[selectedHTS].title}
              className="w-full h-auto object-cover object-top cursor-pointer"
              onClick={() => setShowHTSModal(true)}
            />
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Trading Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cormorant">
            Ready to Transform Your FX Trading?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions worldwide in revolutionizing their FX trading operations with our comprehensive foreign exchange trading solutions. Experience unparalleled performance, reliability, and innovation.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Trusted by major banks and financial institutions globally
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
