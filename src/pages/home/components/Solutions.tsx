import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Solutions() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Trading Systems');

  // PAGE-BASED NAVIGATION
  const [currentPage, setCurrentPage] = useState(0);

  const tabs = ['Trading Systems', 'Platforms', 'Solutions'];

  const categoryData = {
    'Trading Systems': [
      { title: 'WIN EDGE', description: 'Advanced equity trading system designed for high-performance execution.', link: '/trading-systems/win-edge' },
      { title: 'STEALTH WIN', description: 'Low-latency derivatives trading platform with robust risk controls.', link: '/trading-systems/stealth-win' },
      { title: 'FX WIN', description: 'High-speed FX trading system built for global market access.', link: '/trading-systems/fx-win' },
      { title: 'WINWAY GDTS', description: 'Global derivatives trading solution for institutions.', link: '/trading-systems/winway-gdts' },
      { title: 'WINWAY KDTS', description: 'Korean derivatives trading system optimized for local markets.', link: '/trading-systems/winway-kdts' },
      { title: 'WINWAY GETS', description: 'Equity trading platform offering stability and scalability.', link: '/trading-systems/winway-gets' },
      { title: 'WINWAY FITS', description: 'Futures and index trading solution with advanced analytics.', link: '/trading-systems/winway-fits' },
      { title: 'WINWAY CFD EQUITY', description: 'CFD trading system tailored for equity markets.', link: '/trading-systems/winway-cfd-equity' },
      { title: 'WINWAY GOLD', description: 'Specialized gold trading platform for institutional markets.', link: '/trading-systems/winway-gold' },
    ],

    Platforms: [
      { title: 'SERVER PLATFORM', description: 'High-performance server architecture for trading and financial applications.', link: '/platforms/server-platform' },
      { title: 'MOBILE PLATFORM', description: 'Mobile trading and monitoring apps with rich UI and robust security.', link: '/platforms/mobile-platform' },
      { title: 'PC CLIENT PLATFORM', description: 'Powerful desktop platform for professional trading users.', link: '/platforms/pc-client-platform' },
      { title: 'COMMUNICATION MIDDLEWARE', description: 'Middleware for high-speed messaging, connectivity and system integration.', link: '/platforms/communication-middleware' },
    ],

    Solutions: [
      { title: 'ORDER MANAGEMENT SYSTEM (OMS)', description: 'Integrated OMS solution offering workflow automation and real-time order handling.', link: '/solutions/oms' },
      { title: 'PROP TRADING PLATFORM', description: 'Comprehensive proprietary trading platform for algorithmic and manual trading.', link: '/solutions/prop-trading-platform' },
      { title: 'MARKET DATA PROCESSING', description: 'High-throughput market data engine for feed processing and distribution.', link: '/solutions/market-data-processing' },
      { title: 'HIPASS FIX', description: 'Reliable, compliant FIX engine for global trading connectivity.', link: '/solutions/hipassfix' },
      { title: 'WINFEED ENGINE', description: 'Market data delivery engine optimized for speed, stability and scalability.', link: '/solutions/winfeedengine' },
      { title: 'PRIMA', description: 'Portfolio risk management and analytics solution for financial institutions.', link: '/solutions/prima' },
      { title: 'CHAMMAE', description: 'Advanced surveillance and compliance monitoring solution.', link: '/solutions/chammae' },
      { title: 'TRUST MESSENGER ENTERPRISE', description: 'Secure enterprise messaging platform tailored for financial firms.', link: '/solutions/trustmessenger-enterprise' },
    ],
  };

  const currentItems = categoryData[activeTab as keyof typeof categoryData];

  // FIXED 3 ITEMS PER PAGE
  const itemsPerPage = 3;

  // TOTAL PAGES CALCULATED ON THE FLY
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);

  // CALCULATE SLICE
  const startIndex = currentPage * itemsPerPage;
  const currentPageItems = currentItems.slice(startIndex, startIndex + itemsPerPage);

  // PAGE-BASED NAVIGATION
  const handlePrevious = () => setCurrentPage((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

  const handleItemClick = (link: string) => navigate(link);

  return (
    <section className="py-20 relative overflow-hidden bg-[#f4f5f6]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-left mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 font-cormorant tracking-tight">
            Our Solutions
          </h2>
          <p className="text-xl text-slate-500 font-semibold max-w-4xl leading-relaxed">
            Comprehensive software solutions for the global financial industry — delivering precision, scalability, and trust.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#eceff2]/90 border border-[#cfd3d8] rounded-full p-1 inline-flex backdrop-blur-sm shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(0); // RESET PAGE ON TAB CHANGE
                }}
                className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                  activeTab === tab ? 'bg-white text-slate-900 shadow-md' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ease-in-out">
          {currentPageItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item.link)}
              className="relative group overflow-hidden shadow-md bg-white border border-slate-300 cursor-pointer"
            >
              <div className="p-10">
                <h4 className="text-sm text-slate-600 uppercase tracking-widest mb-3 font-bold">
                  {activeTab}
                </h4>
                <hr className="border-t border-slate-400 w-full mb-5 ml-0" />
                <h3 className="text-3xl font-extrabold text-slate-900 mb-3 font-cormorant group-hover:text-slate-700 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[1.05rem] leading-relaxed mb-6 font-semibold tracking-tight group-hover:text-slate-900">
                  {item.description}
                </p>
                <span className="text-slate-900 text-sm font-extrabold uppercase tracking-wider group-hover:text-black">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-8 mt-10">

            {/* Prev Button */}
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`w-10 h-10 rounded-full bg-[#d2d5d8] flex items-center justify-center hover:bg-[#c1c5ca] transition-all duration-300 ${
                currentPage === 0 && 'opacity-40 cursor-not-allowed'
              }`}
            >
              <i className="ri-arrow-left-s-line text-slate-800 text-xl"></i>
            </button>

            {/* Dots */}
            <div className="flex space-x-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 ${
                    currentPage === i ? 'bg-[#5f646b]' : 'bg-[#b6babe] hover:bg-[#9da1a6]'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`w-10 h-10 rounded-full bg-[#d2d5d8] flex items-center justify-center hover:bg-[#c1c5ca] transition-all duration-300 ${
                currentPage === totalPages - 1 && 'opacity-40 cursor-not-allowed'
              }`}
            >
              <i className="ri-arrow-right-s-line text-slate-800 text-xl"></i>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
