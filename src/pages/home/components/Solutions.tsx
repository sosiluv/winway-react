import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Solutions() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Trading Systems');

  // PAGE-BASED NAVIGATION
  const [currentPage, setCurrentPage] = useState(0);

  const tabs = ['Trading Systems', 'Frameworks', 'Solutions', 'Services'];


  const categoryData = {
    'Trading Systems': [
      {
        title: 'WinEdge',
        description:
          'Proprietary trading platform offering advanced tools and low-latency execution across equities, futures, and options.',
        link: '/trading-systems/win-edge',
      },
      {
        title: 'StealthWin',
        description:
          'Low-latency FX arbitrage engine across Korea’s FX ECN brokers, offshore NDFs, and KRX currency futures.',
        link: '/trading-systems/stealth-win',
      },
      {
        title: 'FXWin',
        description:
          'FX trading platform that supports both dealer and client environments, equipped with a wide range of advanced features for bank dealers.',
        link: '/trading-systems/fx-win',
      },
      {
        title: 'WinGDTS',
        description:
          'Global derivatives trading systems delivering a complete end-to-end solution, from front-end trading to back-office processing',
        link: '/trading-systems/winway-gdts',
      },
      {
        title: 'WinKDTS',
        description:
          'KRX derivatives trading systems with comprehensive front-to-back functionality, covering the entire trading lifecycle.',
        link: '/trading-systems/winway-kdts',
      },
      {
        title: 'WinGETS',
        description:
          'Integrated global equity trading systems providing complete front-to-back coverage across the full trading workflow.',
        link: '/trading-systems/winway-gets',
      },
      {
        title: 'WinFITS',
        description:
          'Fixed Income Trading System designed for both institutional and retail users, supporting the full workflow from front office to back office.',
        link: '/trading-systems/winway-fits',
      },
      {
        title: 'WinCFD',
        description:
          'Equity CFD Trading Systems with comprehensive front-to-back functionality, covering the entire trading lifecycle.',
        link: '/trading-systems/winway-cfd-equity',
      },
      {
        title: 'WinGOLD',
        description:
          'KRX Gold Trading System that supports the full front-to-back workflow and enables arbitrage between KRX gold and global gold markets.',
        link: '/trading-systems/winway-gold',
      },
    ],

    Frameworks: [
      {
        title: 'WinNet',
        description:
          'TP Monitor that enables seamless transaction processing across heterogeneous systems and provides flexible, reliable integration with a wide range of enterprise applications.',
        link: '/frameworks/tp-monitor',
      },
      {
        title: 'SpiderGen',
        description:
          'Unified development environment that enables you to easily and rapidly build and manage applications that run seamlessly across web, mobile, and desktop platforms—all from a single codebase.',
        link: '/frameworks/ide',
      },
      {
        title: 'Presto',
        description:
          'Unified UI development solution that combines the rich user experience of C/S applications with the flexible management capabilities of the web—without the complexity of traditional desktop technologies.',
        link: '/frameworks/pc-client',
      }
    ],

    Solutions: [
      {
        title: 'F1Win',
        description:
          'Shared memory–based order management system for low-latency trading.',
        link: '/solutions/oms',
      },
      {
        title: 'ForteAlgo',
        description:
          'Intelligent execution algorithms designed for precision, adaptability, and speed for traders.',
        link: '/solutions/prop-trading-platform',
      },
      {
        title: 'ArmisWin',
        description:
          'Real-time control and protection of trading accounts by continuously monitoring total equity based on tick-by-tick market data.',
        link: '/solutions/market-data-processing',
      },
      {
        title: 'WinFIX',
        description:
          'High-performance FIX engine and gateway offering reliable and low-latency FIX connectivity for global financial institutions.',
        link: '/solutions/hipassfix',
      },
      {
        title: 'WinFeed Engine',
        description:
          'Integrated market-data processing platform that delivers fast and efficient handling of high-volume data streams.',
        link: '/solutions/winfeedengine',
      },
      {
        title: 'Prima',
        description:
          "Real-time portfolio margin engine built for todays global derivatives markets, supporting Span, Eurex Prisma, JPX VaR, OCC TIMS, and KRX COMS.",
        link: '/solutions/prima',
      },
      {
        title: 'TrustWin',
        description:
          'High-performance, fault-tolerant middleware that delivers fast data transfer between processes and supports a wide range of communication protocols essential for enterprise-grade connectivity.',
        link: '/solutions/trus-twin',
      },
      {
        title: 'Chammae',
        description:
          'Surveillance solution designed to monitor derivatives markets and detect potential market abuse or unfair trading activity.',
        link: '/solutions/chammae',
      },
      {
        title: 'Trust Messenger Enterprise',
        description:
          'High-performance messaging platform engineered to ensure uninterrupted communication at all times.',
        link: '/solutions/trustmessenger-enterprise',
      },
    ],

    Services: [
      {
        title: 'FX DMA Hub',
        description:
          'Institutional-grade FX Direct Market Access hub providing low-latency connectivity to global liquidity providers, unified pricing, and intelligent execution.',
        image:
          'https://readdy.ai/api/search-image?query=Professional%20server%20platform%20infrastructure%20with%20multiple%20server%20racks%2C%20high-performance%20computing%20systems%2C%20enterprise%20data%20center%20environment%2C%20silver%20and%20navy%20color%20scheme&width=400&height=300',
        link: '/services/fx-dma-hub'
      },
      {
        title: 'KRX Equity & ETF Reference Data',
        description:
          'Comprehensive reference data for KRX-listed equities and ETFs, covering corporate actions, dividends, IPO events, ownership structure, and key market classifications for institutional use.',
        image:
          'https://readdy.ai/api/search-image?query=Mobile%20trading%20platform%20interface%20on%20smartphones%20and%20tablets%20with%20financial%20charts&width=400&height=300',
        link: '/services/krx-corporate-actions'
      },
      {
        title: 'Korean Fund Information',
        description:
          'English-language reference data for Korea-domiciled funds, including fund identifiers, management company details, fund structure, and core investment attributes.',
        image:
          'https://readdy.ai/api/search-image?query=Professional%20PC%20client%20trading%20platform%20with%20multiple%20monitors&width=400&height=300',
        link: '/services/korean-fund-information'
      }
    ]


  };

  const currentItems = categoryData[activeTab as keyof typeof categoryData];

  // FIXED 3 ITEMS PER PAGE
  const itemsPerPage = 3;

  // TOTAL PAGES CALCULATED ON THE FLY
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);

  // CALCULATE SLICE
  const startIndex = currentPage * itemsPerPage;
  const currentPageItems = currentItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => setCurrentPage((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  const handleItemClick = (link: string) => navigate(link);

  return (
    <section className="py-20 relative overflow-hidden bg-[#f4f5f6]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 font-cormorant tracking-tight">
            Our Solutions
          </h2>
          <p className="text-xl text-slate-500 font-semibold max-w-4xl leading-relaxed">
            Comprehensive software solutions supporting the full lifecycle of capital markets trading
            <br />— delivering precision, scalability, and trusted performance.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-[#eceff2]/90 border border-[#cfd3d8] rounded-full p-1 inline-flex backdrop-blur-sm shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(0);
                }}
                className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${activeTab === tab
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-800'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ease-in-out">
          {currentPageItems.map((item, index) => (
            <div
              key={index}
              onClick={() => item.link && handleItemClick(item.link)}
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
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-semibold tracking-tight group-hover:text-slate-900">
                  {item.description}
                </p>
                <span className="text-slate-900 text-sm font-extrabold uppercase tracking-wider group-hover:text-black">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-8 mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`w-10 h-10 rounded-full bg-[#d2d5d8] flex items-center justify-center hover:bg-[#c1c5ca] transition-all duration-300 ${currentPage === 0 && 'opacity-40 cursor-not-allowed'
                }`}
            >
              <i className="ri-arrow-left-s-line text-slate-800 text-xl"></i>
            </button>

            <div className="flex space-x-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 ${currentPage === i
                    ? 'bg-[#5f646b]'
                    : 'bg-[#b6babe] hover:bg-[#9da1a6]'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`w-10 h-10 rounded-full bg-[#d2d5d8] flex items-center justify-center hover:bg-[#c1c5ca] transition-all duration-300 ${currentPage === totalPages - 1 && 'opacity-40 cursor-not-allowed'
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
