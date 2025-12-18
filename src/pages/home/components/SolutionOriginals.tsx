
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Solutions() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Trading Systems');
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ['Trading Systems', 'Platforms', 'Solutions'];

  const categoryData = {
    'Trading Systems': [
      {
        title: "GLOBALEQUITY",
        description: "Advanced equity trading platform with real-time execution",
        image: "https://readdy.ai/api/search-image?query=Modern%20financial%20trading%20floor%20with%20equity%20market%20displays%2C%20professional%20traders%20analyzing%20stock%20charts%2C%20blue%20and%20green%20screen%20lights%2C%20sophisticated%20trading%20technology%20setup%2C%20clean%20corporate%20environment&width=400&height=300&seq=global-equity&orientation=landscape",
        link: "/trading-systems/global-equity"
      },
      {
        title: "GLOBAL DERIVATIVES",
        description: "Comprehensive derivatives trading solutions",
        image: "https://readdy.ai/api/search-image?query=High-tech%20derivatives%20trading%20desk%20with%20multiple%20monitors%20showing%20futures%20and%20options%20data%2C%20professional%20financial%20environment%2C%20blue%20digital%20displays%2C%20modern%20trading%20technology&width=400&height=300&seq=global-derivatives&orientation=landscape",
        link: "/trading-systems/global-derivatives"
      },
      {
        title: "FX TRADING",
        description: "Foreign exchange trading platform with advanced analytics",
        image: "https://readdy.ai/api/search-image?query=Foreign%20exchange%20trading%20floor%20with%20currency%20pair%20displays%2C%20forex%20charts%20and%20graphs%2C%20professional%20traders%20working%2C%20modern%20financial%20technology%20environment%2C%20blue%20and%20green%20lighting&width=400&height=300&seq=fx-trading&orientation=landscape",
        link: "/trading-systems/fx-trading"
      },
      {
        title: "KRX DERIVATIVES",
        description: "Korea Exchange derivatives trading system",
        image: "https://readdy.ai/api/search-image?query=Korean%20financial%20exchange%20trading%20floor%20with%20derivatives%20market%20data%2C%20professional%20trading%20environment%2C%20modern%20technology%20displays%2C%20blue%20and%20navy%20color%20scheme&width=400&height=300&seq=krx-derivatives&orientation=landscape",
        link: "/trading-systems/krx-derivatives"
      },
      {
        title: "NON-ELECTRONIC LEDGER",
        description: "Traditional ledger management system",
        image: "https://readdy.ai/api/search-image?query=Professional%20financial%20office%20with%20ledger%20management%20systems%2C%20document%20processing%20technology%2C%20clean%20corporate%20environment%2C%20modern%20workstations%20with%20blue%20lighting&width=400&height=300&seq=non-electronic&orientation=landscape",
        link: "/trading-systems/non-electronic-ledger"
      }
    ],
    'Platforms': [
      {
        title: "SERVER PLATFORM",
        description: "High-performance server infrastructure solutions",
        image: "https://readdy.ai/api/search-image?query=Modern%20data%20center%20with%20server%20racks%20and%20network%20equipment%2C%20blue%20LED%20lights%2C%20high-tech%20infrastructure%2C%20professional%20IT%20environment%20with%20cooling%20systems&width=400&height=300&seq=server-platform&orientation=landscape",
        link: "/platforms/server-platform"
      },
      {
        title: "MOBILE PLATFORM",
        description: "Mobile trading and financial applications",
        image: "https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20financial%20trading%20app%20interface%2C%20mobile%20technology%2C%20clean%20design%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20mobile%20development%20environment&width=400&height=300&seq=mobile-platform&orientation=landscape",
        link: "/platforms/mobile-platform"
      },
      {
        title: "PC CLIENT PLATFORM",
        description: "Desktop client applications for trading",
        image: "https://readdy.ai/api/search-image?query=Professional%20desktop%20computer%20setup%20with%20trading%20software%20interface%2C%20multiple%20monitors%2C%20modern%20office%20environment%2C%20blue%20and%20navy%20color%20scheme%2C%20sophisticated%20trading%20technology&width=400&height=300&seq=pc-client&orientation=landscape",
        link: "/platforms/pc-client-platform"
      },
      {
        title: "COMMUNICATION MIDDLEWARE",
        description: "Middleware solutions for system integration",
        image: "https://readdy.ai/api/search-image?query=Network%20infrastructure%20with%20data%20flow%20visualization%2C%20communication%20systems%2C%20blue%20digital%20connections%2C%20modern%20technology%20environment%2C%20professional%20IT%20setup&width=400&height=300&seq=communication&orientation=landscape",
        link: "/platforms/communication-middleware"
      }
    ],
    'Solutions': [
      {
        title: "MARKET DATA PROCESSING",
        description: "Real-time market data processing and analytics",
        image: "https://readdy.ai/api/search-image?query=High-tech%20data%20processing%20center%20with%20flowing%20data%20streams%20visualization%2C%20blue%20and%20green%20digital%20lights%2C%20modern%20technology%20infrastructure%2C%20professional%20analytics%20environment&width=400&height=300&seq=market-data-sol&orientation=landscape",
        link: "/solutions/market-data-processing"
      },
      {
        title: "ORDER MANAGEMENT SYSTEM",
        description: "Comprehensive order management solutions",
        image: "https://readdy.ai/api/search-image?query=Professional%20financial%20office%20with%20order%20management%20interfaces%2C%20multiple%20computer%20screens%20showing%20trading%20orders%2C%20clean%20corporate%20environment%2C%20blue%20and%20navy%20color%20scheme&width=400&height=300&seq=oms-solution&orientation=landscape",
        link: "/solutions/oms"
      },
      {
        title: "PROP TRADING PLATFORM",
        description: "Proprietary trading platform solutions",
        image: "https://readdy.ai/api/search-image?query=Modern%20proprietary%20trading%20floor%20with%20advanced%20analytics%20displays%2C%20professional%20traders%20working%2C%20high-tech%20environment%20with%20blue%20screen%20lights%2C%20sophisticated%20trading%20technology&width=400&height=300&seq=prop-trading&orientation=landscape",
        link: "/solutions/prop-trading-platform"
      }
    ]
  };

  const currentItems = categoryData[activeTab as keyof typeof categoryData];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const currentPageItems = currentItems.slice(currentIndex, currentIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(currentItems.length - itemsPerPage, currentIndex + itemsPerPage));
  };

  const handleItemClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-cormorant leading-tight">
            Our Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold max-w-4xl leading-relaxed">
            Comprehensive software solutions designed for the modern financial industry, delivering performance and reliability.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {currentPageItems.map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer relative overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleItemClick(item.link)}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/90 to-slate-900/85 group-hover:from-slate-900/90 group-hover:via-slate-800/85 group-hover:to-slate-900/80 transition-all duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-regular text-slate-300 uppercase tracking-wide mb-1">
                  </h4>
                  {/* Small subtitle */}
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1">
                    {activeTab}
                  </h4>
                  {/* Fine line */}
                  <hr className="border-t border-slate-400 w-18 mb-2.5" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:-translate-y-1 transition-transform duration-300 font-cormorant">
                    {item.title}
                  </h3>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-start">
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-sm font-bold">
                    Learn more &gt;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {currentItems.length > itemsPerPage && (
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'cursor-pointer'
              }`}
            >
              <i className="ri-arrow-left-s-line text-gray-600 text-lg"></i>
            </button>
            
            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * itemsPerPage)}
                  className={`w-2 h-2 rounded-full transition-all duration-3 ${
                    Math.floor(currentIndex / itemsPerPage) === i
                      ? 'bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentIndex >= currentItems.length - itemsPerPage}
              className={`w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all duration-300 ${
                currentIndex >= currentItems.length - itemsPerPage 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'cursor-pointer'
              }`}
            >
              <i className="ri-arrow-right-s-line text-gray-600 text-lg"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
